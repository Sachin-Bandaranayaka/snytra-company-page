import { NextResponse } from "next/server"
import { compare } from "bcryptjs"
import { SignJWT } from "jose"
import prisma from "@/lib/prisma"
import { cookies } from "next/headers"

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json()

        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                password: true,
                name: true,
                role: true,
                restaurantId: true,
            },
        })

        if (!user) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            )
        }

        // Verify password
        const isPasswordValid = await compare(password, user.password)
        if (!isPasswordValid) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            )
        }

        // Create JWT token
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const token = await new SignJWT({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            restaurantId: user.restaurantId,
        })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("24h")
            .setIssuedAt()
            .sign(secret)

        // Set cookie
        cookies().set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24, // 24 hours
        })

        // Return user data (excluding password)
        const { password: _, ...userData } = user
        return NextResponse.json(userData)
    } catch (error) {
        console.error("Login error:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
} 