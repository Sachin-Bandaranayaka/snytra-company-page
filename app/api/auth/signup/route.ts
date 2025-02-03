import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
    try {
        const { restaurantName, email, password } = await req.json()

        // Validate input
        if (!restaurantName || !email || !password) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            )
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            )
        }

        // Hash password
        const hashedPassword = await hash(password, 12)

        // Create restaurant
        const restaurant = await prisma.restaurant.create({
            data: {
                name: restaurantName,
                address: "", // These can be updated later
                phone: "",
                email: email,
            },
        })

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role: "MANAGER", // Default role for signup
                restaurantId: restaurant.id,
            },
        })

        return NextResponse.json(
            {
                message: "User created successfully",
                user: {
                    id: user.id,
                    email: user.email,
                    restaurantId: user.restaurantId,
                },
            },
            { status: 201 }
        )
    } catch (error) {
        console.error("Signup error:", error)
        return NextResponse.json(
            { message: "Error creating user" },
            { status: 500 }
        )
    }
} 