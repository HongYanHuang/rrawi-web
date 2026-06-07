# raawi Web API — Request Document

**To:** Backend team  
**From:** Frontend / Web  
**Base URL:** `https://api.rrawi.com`  
**Auth:** None required — all endpoints are public, read-only, web-scoped  
**Purpose:** Power the raawi.com marketing/SEO site (Next.js, ISR with 1-hour cache)

---

## Context

The website has three dynamic data needs:

1. A **list of all public tours** — used at build time to pre-generate every tour page, and to populate the landing page carousel.
2. A **single tour detail** — used to render each `/tours/{city}/{slug}` page.
3. A **list of cities** — used on the landing page city grid and the hero pill ("Now in N cities").

**Important content policy:** These endpoints must **not** return narration transcript text or audio file URLs. Stop names and short hints are fine — full narration content stays app-only. This is intentional to protect against web scraping.

---

## Endpoints

### 1. `GET /web/tours`

Returns a paginated list of all public tours. Used for:
- Static page generation at build time (generates one URL per tour)
- XML sitemap
- Landing page featured tours carousel

**Response — array of tour summaries:**

```json
[
  {
    "id": "string",
    "slug": "ancient-rome-on-foot",
    "city": "Rome",
    "city_slug": "rome",
    "title_display": "Ancient Rome, on foot",
    "cover_image_url": "https://...",
    "cover_gradient": "linear-gradient(180deg,#C9A67A,#6E5733)",
    "rating": 4.9,
    "review_count": 348,
    "total_stops": 12,
    "duration_label": "3 hrs",
    "distance_label": "4.2 km",
    "narrator_name": "Elena Conti"
  }
]
```

**Field notes:**
| Field | Required | Notes |
|---|---|---|
| `id` | ✅ | Stable unique ID |
| `slug` | ✅ | URL-safe, kebab-case, stable — used in the page URL |
| `city` | ✅ | Display name e.g. `"Rome"` |
| `city_slug` | ✅ | URL-safe e.g. `"rome"` — used in the page URL |
| `title_display` | ✅ | Tour title for display |
| `cover_image_url` | ⬜ | Full-width cover image. If absent, `cover_gradient` is used as fallback |
| `cover_gradient` | ⬜ | CSS gradient string. Required if `cover_image_url` is absent |
| `rating` | ✅ | Float e.g. `4.9` |
| `review_count` | ✅ | Integer |
| `total_stops` | ✅ | Integer |
| `duration_label` | ✅ | Human string e.g. `"3 hrs"` |
| `distance_label` | ⬜ | Human string e.g. `"4.2 km"` |
| `narrator_name` | ✅ | Display name |

---

### 2. `GET /web/tours/{city_slug}/{tour_slug}`

Returns full detail for a single tour page. Used for rendering `/tours/rome/ancient-rome-on-foot`.

**Response — tour detail object:**

```json
{
  "id": "string",
  "slug": "ancient-rome-on-foot",
  "city": "Rome",
  "city_slug": "rome",
  "title_display": "Ancient Rome, on foot",
  "cover_image_url": "https://...",
  "cover_gradient": "linear-gradient(180deg,#C9A67A,#6E5733)",
  "rating": 4.9,
  "review_count": 348,
  "total_stops": 12,
  "duration_label": "3 hrs",
  "distance_label": "4.2 km",
  "duration_days": 1,
  "narrator_name": "Elena Conti",
  "narrator_avatar_url": "https://...",
  "narrator_quote": "Walk slowly. The stones are patient.",
  "description_short": "Two or three paragraphs. Plain text, newlines between paragraphs.",
  "city_context": "One paragraph about the city — good for SEO.",
  "stops_preview": [
    {
      "order": 1,
      "name": "Arch of Titus",
      "hint": "The triumph, the menorah, the stone that remembers.",
      "duration_label": "~25 min"
    }
  ],
  "stops_hidden_count": 5,
  "tags": ["🎧 Narrated by a local historian", "⬇️ Works offline", "🌍 EN · IT · FR"],
  "schema_type": "TouristTrip"
}
```

**Field notes:**
| Field | Required | Notes |
|---|---|---|
| `duration_days` | ✅ | Integer — used in SEO meta description |
| `narrator_avatar_url` | ⬜ | Small circular avatar photo |
| `narrator_quote` | ⬜ | Short one-liner shown in the sticky download card |
| `description_short` | ✅ | 2–3 paragraphs of plain text. Separate paragraphs with `\n\n`. **No transcript text.** |
| `city_context` | ⬜ | One SEO paragraph about the city. Shared across tours in the same city is fine. |
| `stops_preview` | ✅ | **First 7 stops only.** No transcript text — `name` and `hint` only. |
| `stops_hidden_count` | ✅ | `total_stops - stops_preview.length`. Shown as "+ N more stops in the app". |
| `tags` | ✅ | Short feature pills shown on the page. Emoji prefix encouraged. |

**Do not include:**
- Full narration text for any stop
- Audio file URLs
- Any field that requires app authentication

**Error responses:**
- `404` — tour not found or not public. The website will show a "not found" page.

---

### 3. `GET /web/cities`

Returns the list of available cities. Used for the landing page city grid and the "Now in N cities" hero pill.

**Response — array of city objects:**

```json
[
  {
    "name": "Rome",
    "slug": "rome",
    "icon": "🏛️",
    "tour_count": 4
  }
]
```

**Field notes:**
| Field | Required | Notes |
|---|---|---|
| `name` | ✅ | Display name |
| `slug` | ✅ | URL-safe slug, matches `city_slug` in tour responses |
| `icon` | ✅ | Single emoji representing the city |
| `tour_count` | ✅ | Number of public tours in this city |

---

## Implementation Notes

**Caching:** The website caches all responses for 1 hour (Next.js ISR). Stale data is acceptable within that window — no need for webhook invalidation for now.

**CORS:** The website is hosted on `www.rrawi.com`. The API must allow `Origin: https://www.rrawi.com` (and `http://localhost:3000` for local development).

**Slug stability:** Tour `slug` and `city_slug` values are used as URL paths on the website. Once a tour is published, its slug must never change — changing it breaks inbound links and search rankings. If a tour needs to be renamed, add a redirect from the old slug.

**Pagination:** Not required for the initial launch — a flat array is fine. Add pagination only if the tour count grows beyond a few hundred.

**TypeScript interfaces (frontend reference):**

```typescript
// These types live in lib/api.ts — backend response must match exactly.

interface TourSummary {
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

interface TourStop {
  order: number
  name: string
  hint: string
  duration_label: string
}

interface TourDetail extends TourSummary {
  narrator_avatar_url?: string
  narrator_quote?: string
  description_short: string
  city_context?: string
  stops_preview: TourStop[]
  stops_hidden_count: number
  tags: string[]
  duration_days: number
}

interface City {
  name: string
  slug: string
  icon: string
  tour_count: number
}
```

---

## Current State

The website is already live with **mock data** (`lib/mock-data.ts`) that matches these response shapes exactly. The moment these endpoints go live at `api.rrawi.com`, the website will switch to real data automatically — no frontend code changes required.
