import { NextResponse } from "next/server"

export async function GET() {
    const appleAuthUrl = `https://appleid.apple.com/auth/authorize?${new URLSearchParams({
        response_type: "code",
        client_id: process.env.APPLE_CLIENT_ID || "",
        redirect_uri: "http://localhost:3000/api/auth/apple/callback", // Update in production
        scope: "name email",
        response_mode: "form_post",
    }).toString()}`

    return NextResponse.redirect(appleAuthUrl)
} 