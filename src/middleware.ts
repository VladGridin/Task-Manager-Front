import { NextRequest, NextResponse } from 'next/server'

import { DASHBOARD_PAGES } from './config/pages-url.config'
import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request
	const RefreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = url.includes('/auth')
	if (isAuthPage && RefreshToken) {
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
	}
	if (isAuthPage) {
		return NextResponse.next()
	}
	// 404 redirect
	if (!RefreshToken) {
		return NextResponse.redirect(new URL('/auth', request.url))
	}
	return NextResponse.next()
}

export const config = {
	matcher: ['/i/:path*', '/auth/:path']
}
