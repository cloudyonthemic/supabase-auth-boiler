import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Next.js Supabase Auth Boilerplate',
	description: 'A boilerplate for Next.js with Supabase authentication',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-h-screen bg-gray-100">
					<main className="container mx-auto py-10">{children}</main>
				</div>
			</body>
		</html>
	);
}
