const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'https://api.rrawi.com'

export interface TourSummary {
  id: string
  slug: string
  city: string
  city_slug: string
  title_display: string
  cover_image_url?: string
  cover_gradient?: string
  rating: number
  review_count: number
  total_stops: number
  duration_label: string
  distance_label?: string
  narrator_name: string
}

export interface TourStop {
  order: number
  name: string
  hint: string
  duration_label: string
}

export interface TourDetail extends TourSummary {
  narrator_avatar_url?: string
  narrator_quote?: string
  description_short: string
  city_context?: string
  stops_preview: TourStop[]
  stops_hidden_count: number
  tags: string[]
  duration_days: number
}

export interface City {
  name: string
  slug: string
  icon: string
  tour_count: number
}

async function apiFetch<T>(path: string, fallback: () => Promise<T>): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${path}`, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res.json() as Promise<T>
  } catch {
    return fallback()
  }
}

export async function getTours(): Promise<TourSummary[]> {
  return apiFetch('/web/tours', async () => {
    const { MOCK_TOURS } = await import('./mock-data')
    return MOCK_TOURS
  })
}

export async function getTour(citySlug: string, tourSlug: string): Promise<TourDetail | null> {
  try {
    const res = await fetch(`${API_BASE}/web/tours/${citySlug}/${tourSlug}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    const { MOCK_TOUR_DETAIL } = await import('./mock-data')
    if (MOCK_TOUR_DETAIL.city_slug === citySlug && MOCK_TOUR_DETAIL.slug === tourSlug) {
      return MOCK_TOUR_DETAIL
    }
    return null
  }
}

export async function getCities(): Promise<City[]> {
  return apiFetch('/web/cities', async () => {
    const { MOCK_CITIES } = await import('./mock-data')
    return MOCK_CITIES
  })
}

export async function getAllTourSlugs(): Promise<{ city: string; slug: string }[]> {
  return apiFetch('/web/tours', async () => {
    const { MOCK_TOURS } = await import('./mock-data')
    return MOCK_TOURS
  }).then(tours =>
    tours.map(t => ({ city: t.city_slug, slug: t.slug }))
  )
}
