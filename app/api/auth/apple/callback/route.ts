import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { SignJWT, jwtVerify } from "jose"

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const code = formData.get("code")
        const id_token = formData.get("id_token")

        if (!code || !id_token) {
            return NextResponse.redirect("/signup?error=Invalid response from Apple")
        }

        // Verify the id_token
        const secret = new TextEncoder().encode(process.env.APPLE_CLIENT_SECRET)
        const { payload } = await jwtVerify(id_token.toString(), secret)

        const { email, sub: appleUserId } = payload

        if (!email) {
            return NextResponse.redirect("/signup?error=Email not provided")
        }

        // Check if user exists
        let user = await prisma.user.findUnique({
            where: { email: email.toString() },
            include: { restaurant: true },
        })

        if (!user) {
            // Create new restaurant and user
            const restaurant = await prisma.restaurant.create({
                data: {
                    name: "My Restaurant", // User can update this later
                    address: "",
                    phone: "",
                    email: email.toString(),
                },
            })

            user = await prisma.user.create({
                data: {
                    email: email.toString(),
                    password: "", // No password for OAuth users
                    role: "MANAGER",
                    restaurantId: restaurant.id,
                },
                include: { restaurant: true },
            })
        }

        // Here you would typically create a session or JWT token
        // For now, we'll redirect to the dashboard
        return NextResponse.redirect("/dashboard")
    } catch (error) {
        console.error("Apple callback error:", error)
        return NextResponse.redirect("/signup?error=Authentication failed")
    }
} 