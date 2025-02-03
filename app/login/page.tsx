"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                toast({
                    title: "Success",
                    description: "Logged in successfully!",
                    variant: "default",
                })
                router.push("/dashboard")
            } else {
                toast({
                    title: "Error",
                    description: data.error || "Failed to login",
                    variant: "destructive",
                })
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleLogin = async () => {
        setLoading(true)
        try {
            window.location.href = "/api/auth/google"
        } catch (error) {
            alert("Google login failed. Please try again.")
            setLoading(false)
        }
    }

    const handleAppleLogin = async () => {
        setLoading(true)
        try {
            window.location.href = "/api/auth/apple"
        } catch (error) {
            alert("Apple login failed. Please try again.")
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen">
            {/* Left side - Form */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                <div className="max-w-md w-full">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-[#1e1800]">Welcome Back</h1>
                        <p className="text-gray-600 mt-2">Log in to manage your restaurant</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Input
                                type="email"
                                required
                                placeholder="Email address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <Input
                                type="password"
                                required
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#d94e1f] hover:bg-[#d94e1f]/90"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </Button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                disabled={loading}
                                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d94e1f]"
                            >
                                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Log in with Google
                            </button>

                            <button
                                type="button"
                                onClick={handleAppleLogin}
                                disabled={loading}
                                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d94e1f]"
                            >
                                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                Log in with Apple
                            </button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-[#d94e1f] hover:text-[#d94e1f]/90 font-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <Image
                    src="/tacos-hero.jpg"
                    alt="Delicious tacos with fresh ingredients"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    className="object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-black/30">
                    <div className="p-12 text-white max-w-lg mt-20">
                        <h2 className="text-3xl font-bold mb-4">Welcome Back to Your Dashboard</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <span className="mr-2">✓</span>
                                Manage orders in real-time
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">✓</span>
                                Track your restaurant's performance
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">✓</span>
                                Access detailed analytics
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
} 