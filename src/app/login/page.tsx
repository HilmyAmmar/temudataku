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

                <button
                    type="submit"
                    className="mt-6 w-full px-4 py-2 bg-[#15ae70] text-white rounded-md shadow-lg hover:bg-green-700 transition duration-300"
                >
                    Sign In
                </button>
                {/* <div className="flex items-center mt-6">
                    <div className="border-t border-1 border-gray-400 flex-grow"></div>
                    <div className="px-3 text-gray-800 font-bold text-md">Or</div>
                    <div className="border-t border-1 border-gray-400 flex-grow"></div>
                </div> */}
            </form>
        </div>
    );
}
