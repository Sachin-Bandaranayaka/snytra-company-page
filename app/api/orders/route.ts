import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/auth"

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const restaurantId = searchParams.get("restaurantId")

    if (!restaurantId) {
      return NextResponse.json({ error: "Restaurant ID is required" }, { status: 400 })
    }

    const orders = await db.order.findMany({
      where: {
        restaurantId,
      },
      include: {
        items: {
          include: {
            menuItem: true,
          },
        },
        table: true,
      },
    })

    return NextResponse.json(orders)
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const json = await req.json()
    const { tableId, restaurantId, items } = json

    const order = await db.order.create({
      data: {
        tableId,
        restaurantId,
        total: items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0),
        items: {
          create: items.map((item: any) => ({
            quantity: item.quantity,
            price: item.price,
            menuItemId: item.menuItemId,
          })),
        },
      },
      include: {
        items: {
          include: {
            menuItem: true,
          },
        },
        table: true,
      },
    })

    return NextResponse.json(order)
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

