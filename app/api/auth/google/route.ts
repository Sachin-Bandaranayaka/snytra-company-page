import { NextResponse } from "next/server"
import { OAuth2Client } from "google-auth-library"

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/auth/google/callback" // Update this in production
)

export async function GET() {
    const authUrl = client.generateAuthUrl({
        access_type: "offline",
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
    })

    return NextResponse.redirect(authUrl)
} 