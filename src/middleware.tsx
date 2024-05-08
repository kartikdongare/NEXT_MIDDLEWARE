import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const access_token=request.cookies.get('access_token')?.value||'';

   if(!access_token){
    return NextResponse.redirect(new URL('/',request.url))
   }
   return NextResponse.next();
}
 
export const config = {
  matcher: ['/contact','/about','/home'],
}