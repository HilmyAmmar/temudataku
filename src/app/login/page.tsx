'use client';

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });

            if (result?.error) {
                setError(result.error);
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
        <div className="flex rounded-4xl overflow-hidden shadow-md justify-center mx-auto mt-20">
        
        <div className="w-1/2 bg-green-500"></div>

        <div className="w-1/2 bg-gradient-to-br from-slate-50 to-emerald-100">
            <form className="p-[10vh]" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
                </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-700"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
                </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-700"
                />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition duration-300"
            >
                Login
            </button>
            </form>
        </div>
        </div>
    );
}
