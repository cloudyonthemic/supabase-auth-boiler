import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'; // Import helper to easily create a Supabase client for middleware
import { NextResponse } from 'next/server'; // Import Next.js response utility to control the flow of responses
import type { NextRequest } from 'next/server'; // Type import to define the shape of the Next.js request object

// Middleware function to check the user session
export async function middleware(req: NextRequest) {
	// Create a NextResponse object, allowing the request to proceed by default
	const res = NextResponse.next();

	// Create a Supabase client that can be used to manage authentication
	// Pass both the request and response objects to make the session available
	const supabase = createMiddlewareClient({ req, res });

	// Attempt to retrieve the current session (user login state) from Supabase
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// Check if there is no active session AND the user is trying to access a protected route (in this case, any route that starts with '/dashboard')
	if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
		// Clone the current URL, so we can modify it to redirect the user to the login page
		const redirectUrl = req.nextUrl.clone();

		// Redirect the user to the login page
		redirectUrl.pathname = '/login';

		// Optionally, append a query parameter `redirectedFrom` with the original route the user attempted to access
		// This can be used to redirect them back after successful login
		redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);

		// Return a redirection response to the login page
		return NextResponse.redirect(redirectUrl);
	}

	// If the user is logged in or accessing a public route, allow the request to continue as normal
	return res;
}

/**
 * This middleware is designed to protect certain routes based on user authentication status.
 *
 * To make use of this for protected routes:
 *
 * 1. Protected Routes:
 *    - Any routes that you want to protect, e.g., `/dashboard`, should be prefixed
 *      (like we did with `req.nextUrl.pathname.startsWith('/dashboard')`).
 *    - You can add more protected routes by adjusting the pathname checks.
 *      Example:
 *      - Use `req.nextUrl.pathname.startsWith('/admin')` to protect `/admin` routes.
 *      - Combine multiple protected routes with OR (`||`), like:
 *        `if (!session && (req.nextUrl.pathname.startsWith('/dashboard') || req.nextUrl.pathname.startsWith('/admin')))`.
 *
 * 2. Public Routes:
 *    - Routes like `/login`, `/signup`, or landing pages do not need session checks, so these should be excluded.
 *
 * 3. Redirect After Login:
 *    - The `redirectedFrom` query parameter allows users to be redirected back to their intended destination after logging in.
 *    - When implementing the login logic, check for this parameter and redirect the user accordingly.
 */
