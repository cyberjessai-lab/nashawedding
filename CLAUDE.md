# Nasha & Celson Wedding Website

## Client
- **Couple:** Celson da Costa Lourenço Nangolo & Nasha Schiceya
- **Wedding:** 22 August 2026, Windhoek Country Club Resort
- **Contact:** Unda (Maid of Honour) — mbinajedanisha@gmail.com, Nasha — nashasch@gmail.com
- **Password:** amor eterno

## Stack
- Next.js 15 + Tailwind CSS + TypeScript
- Deployed to **Vercel** (nashandcelson.vercel.app)
- **Supabase** tracking (nikkle-pocket-erp project: tdpzypsaiylcyzhqrfrs)
- GitHub: cyberjessai-lab/nashawedding
- Music: John Legend — Nervous (public/music/nervous.m4a)

## Architecture
- AppShell in layout.tsx wraps ALL pages (LanguageProvider, Navbar, Footer, MusicPlayer)
- Individual pages contain ONLY their content — no nav/footer/providers
- Language persists via localStorage, password via sessionStorage

## Content Rules
- Client stories are SACRED — never rewrite personal content
- EN/PT language toggle on every page
- Bank details: FNB 62156989257 (Nasha), IBAN AO06006001040100594061404 (Celson)
- Reference: CN Wedding
- Brief source: ~/Downloads/website edits.docx

## Pages
Home, Our Story, Gallery (lightbox), Events, Dress Code, Accommodation (17 hotels/guesthouses), Wedding Party (10 members with photos), RSVP (API → Supabase), Guestbook (API → Supabase), Gift Registry, FAQ

## Tracking
- **Tables:** wedding_logins, wedding_rsvp, wedding_guestbook (in nikkle-pocket-erp Supabase)
- **API routes:** /api/track (logins), /api/rsvp, /api/guestbook
- **Security:** RLS insert-only — anon can write, only dashboard can read
- **Geo:** IP + city/country/coordinates via Vercel headers
- **Env vars:** SUPABASE_URL, SUPABASE_ANON_KEY (set in Vercel)

## Name Corrections
- Groom full name: Celson da Costa Lourenço Nangolo (NOT Celson Schiceya)
- Bride: Nasha Schiceya (NOT Nasha Nangolo)
- Bridesmaid: Angélica Garcia (NOT Angelique da Silva)

## Key Dates
- Church Announcement: 16 August 2026, 09:00, Eros Primary School Hall
- Ceremony: 10:00 AM | Photos: 12:30 | Cocktail: 16:30 | Reception: 18:00
- RSVP Deadline: 1 July 2026

## Dress Code
- Shades of brown: chocolate, mocha, caramel, beige, taupe, soft gold
- NO cream, NO champagne, NO white, NO ivory, NO neon
