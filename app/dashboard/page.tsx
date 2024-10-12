'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function Dashboard() {
	const [user, setUser] = useState<any>(null);
	const router = useRouter();

	useEffect(() => {
		const getUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			if (user) {
				setUser(user);
			} else {
				router.push('/login');
			}
		};
		getUser();
	}, [router]);

	const handleLogout = async () => {
		await supabase.auth.signOut();
		router.push('/login');
	};

	if (!user) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="text-4xl font-bold mb-4">Welcome to your Dashboard</h1>
			<p className="mb-4">You are logged in as: {user.email}</p>
			<button
				onClick={handleLogout}
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
				Logout
			</button>
		</div>
	);
}
