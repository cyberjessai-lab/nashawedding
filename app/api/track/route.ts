import { NextResponse } from 'next/server'
import { getRequestGeo } from '@/lib/geo'
import { supabaseInsert } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { event } = await request.json()
    const geo = await getRequestGeo()

    // Track endpoint is fire-and-forget — always return ok
    supabaseInsert('wedding_logins', {
      event: event || 'password_login',
      ip: geo.ip,
      city: geo.city,
      region: geo.region,
      country: geo.country,
      latitude: geo.latitude,
      longitude: geo.longitude,
      location: geo.location,
    }).catch(() => {})

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
