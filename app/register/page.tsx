'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const { error } = await supabase.auth.signUp({ email, password });
			if (error) throw error;
			alert('Check your email for the confirmation link!');
			router.push('/login');
		} catch (error) {
			setError((error as Error).message);
		}
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<form
				onSubmit={handleRegister}
				className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<h2 className="text-2xl mb-4">Register</h2>
				{error && <p className="text-red-500 mb-4">{error}</p>}
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="password">
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="******************"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
}
