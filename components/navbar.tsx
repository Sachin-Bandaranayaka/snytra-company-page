'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            <nav className="bg-[#1e1800] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="w-[100px]">
                            <span className="text-xl font-bold text-white">
                                SNYTRA
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className="bg-[#1e1800] py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-12">
                        <Link href="/" className="block w-[100px]">
                            <Image
                                src="/logo.png"
                                alt="SNYTRA Logo"
                                width={100}
                                height={40}
                                className="object-contain brightness-0 invert"
                                priority
                            />
                        </Link>

                        {/* Main Navigation Links */}
                        <div className="flex items-center space-x-8">
                            <Link href="/" className="text-white hover:text-[#d94e1f] transition-colors duration-200 text-sm font-medium">
                                Home
                            </Link>
                            <Link href="/about" className="text-white hover:text-[#d94e1f] transition-colors duration-200 text-sm font-medium">
                                About
                            </Link>
                            <Link href="/products" className="text-white hover:text-[#d94e1f] transition-colors duration-200 text-sm font-medium">
                                Products
                            </Link>
                            <Link href="/pricing" className="text-white hover:text-[#d94e1f] transition-colors duration-200 text-sm font-medium">
                                Pricing
                            </Link>
                            <Link href="/contact" className="text-white hover:text-[#d94e1f] transition-colors duration-200 text-sm font-medium">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Auth Section */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <>
                                <span className="text-white text-sm">Hi, {user.name || user.email}</span>
                                <Button
                                    variant="ghost"
                                    onClick={handleLogout}
                                    className="text-white hover:text-[#d94e1f] transition-colors duration-200 text-sm font-medium p-0 h-auto hover:bg-transparent"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <div className="space-x-4">
                                <Button
                                    variant="ghost"
                                    onClick={() => router.push('/login')}
                                    className="text-white hover:text-[#d94e1f] transition-colors duration-200 text-sm font-medium p-0 h-auto hover:bg-transparent"
                                >
                                    Login
                                </Button>
                                <Button
                                    onClick={() => router.push('/signup')}
                                    className="bg-[#d94e1f] text-white hover:bg-[#d94e1f]/90 text-sm font-medium px-4 py-2 rounded-md"
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