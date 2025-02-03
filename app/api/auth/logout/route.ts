import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
    try {
        const cookieStore = cookies();

        // Clear the token cookie
        cookieStore.delete('token');

        return NextResponse.json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('Error in /api/auth/logout:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
} 