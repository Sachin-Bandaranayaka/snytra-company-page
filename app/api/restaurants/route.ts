import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/auth"

export async function GET() {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const restaurants = await db.restaurant.findMany({
      where: {
        users: {
          some: {
            id: user.id,
          },
        },
      },
    })

    return NextResponse.json(restaurants)
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()

    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const json = await req.json()
    const { name, address, phone, email } = json

    const restaurant = await db.restaurant.create({
      data: {
        name,
        address,
        phone,
        email,
        users: {
          connect: {
            id: user.id,
          },
        },
      },
    })

    return NextResponse.json(restaurant)
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

