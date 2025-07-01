'use client';

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const session = useSession();
    useEffect(() => {
        if (session.status === 'authenticated') {  
            router.push('/catalog');
        }
    }, [session.status, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });

            if (result?.error) {
                setError(result.error);
                setLoading(false);
            } else {
                setSuccess(true);
                setLoading(false);
                router.push('/catalog');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An unexpected error occurred. Please try again.');
        } 
    }
    return (
        <div className="justify-center min-h-screen mx-auto my-[20vh] flex">
        
            <form className="" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Welcome Back to TemuDataku</h2>
                <p className="text-gray-500 text-center font-extralight mb-6">Enter your password and email to continue</p>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="bg-gray-200 w-full px-3 py-2 border border-gray-400 rounded-md placeholder-gray-400 shadow-md text-gray-800"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-800 font-semibold mb-2">
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="bg-gray-200 w-full px-3 py-2 border border-gray-400 rounded-md placeholder-gray-400 shadow-md text-gray-800"
                    />
                </div>

                {error && (
                <div className="flex items-center p-2 mt-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Error</span>
                    <div>
                    <span className="font-medium">Login failed:</span> {error}
                    </div>
                </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className={`mt-6 w-full px-4 py-2 text-white rounded-md shadow-lg transition duration-300 ${
                        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#15ae70] hover:bg-green-700'
                    }`}
                    >
                    {loading ? 'Signing In...' : 'Sign In'}
                </button>

                <p className="text-gray-500 text-center font-extralight mt-6">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-gray-700 font-semibold hover:underline">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
}
