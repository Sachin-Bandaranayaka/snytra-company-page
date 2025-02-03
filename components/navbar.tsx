'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface User {
    id: string;
    name: string | null;
    email: string;
    role: string;
}

export function Navbar() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('/api/auth/me');
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                }
            } catch (error) {
                console.error('Error checking auth status:', error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
            });

            if (response.ok) {
                setUser(null);
                toast({
                    title: 'Success',
                    description: 'Logged out successfully',
                });
                router.push('/login');
            }
        } catch (error) {
            console.error('Error logging out:', error);
            toast({
                title: 'Error',
                description: 'Failed to logout',
                variant: 'destructive',
            });
        }
    };

    if (loading) {
        return (
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold text-gray-800">
                                Restaurant Manager
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-gray-800">
                            Restaurant Manager
                        </Link>
                    </div>

                    {/* Main Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                            About
                        </Link>
                        <Link href="/products" className="text-gray-600 hover:text-gray-900 font-medium">
                            Products
                        </Link>
                        <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">
                            Pricing
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">
                            Contact Us
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <>
                                <span className="text-gray-600">Hi, {user.name || user.email}</span>
                                <Button
                                    variant="outline"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <div className="space-x-4">
                                <Button
                                    variant="outline"
                                    onClick={() => router.push('/login')}
                                >
                                    Login
                                </Button>
                                <Button
                                    onClick={() => router.push('/signup')}
                                >
                                    Sign Up
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
} 