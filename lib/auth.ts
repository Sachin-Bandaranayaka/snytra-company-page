import { hash, compare } from "bcryptjs"
import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import { db } from "./db"

const SECRET_KEY = process.env.JWT_SECRET_KEY!

export async function hashPassword(password: string) {
  return hash(password, 12)
}

export async function comparePasswords(password: string, hashedPassword: string) {
  return compare(password, hashedPassword)
}

export async function createToken(id: string, email: string) {
  const token = await new SignJWT({ id, email })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(new TextEncoder().encode(SECRET_KEY))

  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 86400, // 24 hours
  })

  return token
}

export async function verifyToken(req: NextRequest) {
  const token = req.cookies.get("token")?.value

  if (!token) {
    throw new Error("Missing token")
  }

  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY))
    return verified.payload as { id: string; email: string }
  } catch (err) {
    throw new Error("Invalid token")
  }
}

export async function getCurrentUser() {
  try {
    const token = cookies().get("token")?.value

    if (!token) {
      return null
    }

    const verified = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY))
    const { id } = verified.payload as { id: string }

    const user = await db.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        restaurantId: true,
      },
    })

    return user
  } catch (err) {
    return null
  }
}

