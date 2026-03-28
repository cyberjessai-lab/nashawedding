import { NextResponse } from 'next/server'
import { supabaseInsert } from '@/lib/supabase'

const VALID_TYPES = ['feedback', 'feature_request', 'bug_report', 'wishlist', 'praise']

export async function POST(request: Request) {
  try {
    const { user_name, user_email, type, message, page_path } = await request.json()

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Message is required' },
        { status: 400 }
      )
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { ok: false, error: 'Message too long (max 1000 characters)' },
        { status: 400 }
      )
    }

    if (type && !VALID_TYPES.includes(type)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid feedback type' },
        { status: 400 }
      )
    }

    await supabaseInsert('wedding_feedback', {
      user_name: user_name?.trim() || null,
      user_email: user_email?.trim() || null,
      type: type || 'feedback',
      message: message.trim(),
      page_path: page_path || null,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
