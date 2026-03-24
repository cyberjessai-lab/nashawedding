import { NextResponse } from 'next/server'
import { getRequestGeo } from '@/lib/geo'
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

    const geo = await getRequestGeo()
    const totalGuests = (additionalGuests?.length || 0) + 1
    const guestNames = Array.isArray(additionalGuests)
      ? additionalGuests.slice(0, 10).join('; ')
      : ''

    await supabaseInsert('wedding_rsvp', {
      first_name: firstName,
      surname,
      phone,
      email: email || null,
      attending,
      total_guests: totalGuests,
      additional_guests: guestNames || null,
      dietary: dietary || null,
      message: message || null,
      ip: geo.ip,
      location: geo.location,
      country: geo.country,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
