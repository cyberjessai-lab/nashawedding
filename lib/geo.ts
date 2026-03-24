import { headers } from 'next/headers'

export async function getRequestGeo() {
  const h = await headers()

  const ip =
    h.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    h.get('x-real-ip') ||
    'unknown'

  const city = h.get('x-vercel-ip-city') || 'unknown'
  const country = h.get('x-vercel-ip-country') || 'unknown'
  const region = h.get('x-vercel-ip-country-region') || ''
  const latitude = h.get('x-vercel-ip-latitude') || ''
  const longitude = h.get('x-vercel-ip-longitude') || ''

  const location = [city, region, country].filter(Boolean).join(', ')

  return { ip, city, country, region, latitude, longitude, location }
}
