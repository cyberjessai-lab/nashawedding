import { NextResponse } from 'next/server'
import { supabaseInsert } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { event } = await request.json()

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const city = request.headers.get('x-vercel-ip-city') || 'unknown'
    const country = request.headers.get('x-vercel-ip-country') || 'unknown'
    const region = request.headers.get('x-vercel-ip-country-region') || ''
    const latitude = request.headers.get('x-vercel-ip-latitude') || ''
    const longitude = request.headers.get('x-vercel-ip-longitude') || ''
    const location = [city, region, country].filter(Boolean).join(', ')

    // Track endpoint is fire-and-forget — always return ok
    supabaseInsert('wedding_logins', {
      event: event || 'password_login',
      ip,
      city,
      region,
      country,
      latitude,
      longitude,
      location,
    }).catch(() => {})

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
