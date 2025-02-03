"use server"

import { db } from "@/lib/db"
import { hashPassword, comparePasswords, createToken } from "@/lib/auth"
import { cookies } from "next/headers"

export async function signUp(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const name = formData.get("name") as string

    if (!email || !password || !name) {
      throw new Error("Missing required fields")
    }

    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new Error("Email already exists")
    }

    const hashedPassword = await hashPassword(password)

    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    await createToken(user.id, user.email)

    return { success: true }
  } catch (error) {
    return { error: (error as Error).message }
  }
}

export async function signIn(formData: FormData) {
  try {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!email || !password) {
      throw new Error("Missing required fields")
    }

    const user = await db.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw new Error("Invalid credentials")
    }

    const isValid = await comparePasswords(password, user.password)

    if (!isValid) {
      throw new Error("Invalid credentials")
    }

    await createToken(user.id, user.email)

    return { success: true }
  } catch (error) {
    return { error: (error as Error).message }
  }
}

export async function signOut() {
  cookies().delete("token")
  return { success: true }
}

