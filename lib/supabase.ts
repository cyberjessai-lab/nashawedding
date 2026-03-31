export async function supabaseInsert(table: string, data: Record<string, unknown>) {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY

  if (!url || !key) {
    console.error(`Supabase insert to ${table} skipped: missing SUPABASE_URL or SUPABASE_ANON_KEY`)
    return false
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    const res = await fetch(`${url}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!res.ok) {
      const err = await res.text()
      console.error(`Supabase insert to ${table} failed (${res.status}):`, err)
      return false
    }

    return true
  } catch (error) {
    console.error(`Supabase insert to ${table} error:`, error instanceof Error ? error.message : error)
    return false
  }
}
