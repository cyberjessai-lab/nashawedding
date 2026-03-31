import { NextResponse } from 'next/server'
import { supabaseInsert } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json()

    if (!name || !message) {
      return NextResponse.json(
        { ok: false, error: 'Name and message are required' },
        { status: 400 }
      )
    }

    if (name.length > 100 || message.length > 1000) {
      return NextResponse.json(
        { ok: false, error: 'Field too long' },
        { status: 400 }
      )
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const city = request.headers.get('x-vercel-ip-city') || 'unknown'
    const country = request.headers.get('x-vercel-ip-country') || 'unknown'
    const region = request.headers.get('x-vercel-ip-country-region') || ''
    const location = [city, region, country].filter(Boolean).join(', ')

    const success = await supabaseInsert('wedding_guestbook', {
      name,
      message,
      ip,
      location,
      country,
    })

    if (!success) {
      return NextResponse.json(
        { ok: false, error: 'Failed to save message. Please try again.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
