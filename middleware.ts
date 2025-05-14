import { NextResponse } from 'next/server';
import { verifyJWT } from './lib/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;
  
  // Verify JWT token
  const verifiedToken = token && verifyJWT(token);
  
  // Protect admin routes
  if (pathname.startsWith('/dashboard')) {
    if (!verifiedToken) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    if (verifiedToken.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*'
  ]
};