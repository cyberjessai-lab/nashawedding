import { NextResponse } from 'next/server'
import { supabaseInsert } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName,
      surname,
      phone,
      email,
      attending,
      additionalGuests,
      dietary,
      message,
    } = body

    if (!firstName || !surname || !phone || !attending) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (firstName.length > 100 || surname.length > 100 || phone.length > 20) {
      return NextResponse.json(
        { ok: false, error: 'Field too long' },
        { status: 400 }
      )
    }

    // Get geo from Vercel headers (inline, no async headers() needed)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const city = request.headers.get('x-vercel-ip-city') || 'unknown'
    const country = request.headers.get('x-vercel-ip-country') || 'unknown'
    const region = request.headers.get('x-vercel-ip-country-region') || ''
    const location = [city, region, country].filter(Boolean).join(', ')

    const totalGuests = (additionalGuests?.length || 0) + 1
    const guestNames = Array.isArray(additionalGuests)
      ? additionalGuests.slice(0, 10).join('; ')
      : ''

    const success = await supabaseInsert('wedding_rsvp', {
      first_name: firstName,
      surname,
      phone,
      email: email || null,
      attending,
      total_guests: totalGuests,
      additional_guests: guestNames || null,
      dietary: dietary || null,
      message: message || null,
      ip,
      location,
      country,
    })

    if (!success) {
      return NextResponse.json(
        { ok: false, error: 'Failed to save RSVP. Please try again.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('RSVP error:', err instanceof Error ? err.message : err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
