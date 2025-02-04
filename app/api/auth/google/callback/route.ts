import { NextResponse } from "next/server"
import { OAuth2Client } from "google-auth-library"
import prisma from "@/lib/prisma"

export const runtime = 'nodejs' // Force Node.js runtime

const CALLBACK_URL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api/auth/google/callback`
    : 'http://localhost:3000/api/auth/google/callback'

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    CALLBACK_URL
)

export async function GET(request: Request) {
    try {
        const url = new URL(request.url)
        const code = url.searchParams.get("code")

        if (!code) {
            return NextResponse.redirect(new URL("/signup?error=No code provided", request.url))
        }

        const { tokens } = await client.getToken(code)
        client.setCredentials(tokens)

        const ticket = await client.verifyIdToken({
            idToken: tokens.id_token!,
            audience: process.env.GOOGLE_CLIENT_ID,
        })

        const payload = ticket.getPayload()
        if (!payload) {
            return NextResponse.redirect(new URL("/signup?error=Invalid token", request.url))
        }

        const { email, name } = payload

        // Check if user exists
        let user = await prisma.user.findUnique({
            where: { email: email! },
            include: { restaurant: true },
        })

        if (!user) {
            // Create new restaurant and user
            const restaurant = await prisma.restaurant.create({
                data: {
                    name: `${name}'s Restaurant`,
                    address: "",
                    phone: "",
                    email: email!,
                },
            })

            user = await prisma.user.create({
                data: {
                    email: email!,
                    name: name,
                    password: "", // No password for OAuth users
                    role: "MANAGER",
                    restaurantId: restaurant.id,
                },
                include: { restaurant: true },
            })
        }

        // Here you would typically create a session or JWT token
        // For now, we'll redirect to the dashboard
        return NextResponse.redirect(new URL("/dashboard", request.url))
    } catch (error) {
        console.error("Google callback error:", error)
        return NextResponse.redirect(new URL("/signup?error=Authentication failed", request.url))
    }
} 