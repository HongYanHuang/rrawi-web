import type { TourSummary, TourDetail, City } from './api'

export const MOCK_CITIES: City[] = [
  { name: 'Rome', slug: 'rome', icon: '🏛️', tour_count: 4 },
  { name: 'Kyoto', slug: 'kyoto', icon: '⛩️', tour_count: 3 },
  { name: 'Lisbon', slug: 'lisbon', icon: '🚋', tour_count: 3 },
  { name: 'Marrakech', slug: 'marrakech', icon: '🕌', tour_count: 2 },
  { name: 'Athens', slug: 'athens', icon: '🏺', tour_count: 3 },
  { name: 'Istanbul', slug: 'istanbul', icon: '🕌', tour_count: 2 },
  { name: 'Florence', slug: 'florence', icon: '🎨', tour_count: 2 },
  { name: 'Seville', slug: 'seville', icon: '🍊', tour_count: 2 },
]

export const MOCK_TOURS: TourSummary[] = [
  {
    id: 'rome-ancient-01',
    slug: 'ancient-rome-on-foot',
    city: 'Rome',
    city_slug: 'rome',
    title_display: 'Ancient Rome, on foot',
    cover_gradient: 'linear-gradient(180deg,#C9A67A,#6E5733)',
    rating: 4.9,
    review_count: 348,
    total_stops: 12,
    duration_label: '3 hrs',
    distance_label: '4.2 km',
    narrator_name: 'Elena Conti',
  },
  {
    id: 'kyoto-rain-01',
    slug: 'kyoto-after-rain',
    city: 'Kyoto',
    city_slug: 'kyoto',
    title_display: 'Kyoto after rain',
    cover_gradient: 'linear-gradient(160deg,#8C9A86,#2F3E33)',
    rating: 4.97,
    review_count: 201,
    total_stops: 8,
    duration_label: '2 hrs',
    narrator_name: 'Takumi Mori',
  },
  {
    id: 'lisbon-hills-01',
    slug: 'lisbon-between-hills',
    city: 'Lisbon',
    city_slug: 'lisbon',
    title_display: 'Lisbon, between hills',
    cover_gradient: 'linear-gradient(170deg,#D9A27A,#7A3E2A)',
    rating: 4.88,
    review_count: 156,
    total_stops: 10,
    duration_label: '2.5 hrs',
    narrator_name: 'Inês Almeida',
  },
  {
    id: 'marrakech-dusk-01',
    slug: 'marrakech-at-dusk',
    city: 'Marrakech',
    city_slug: 'marrakech',
    title_display: 'Marrakech at dusk',
    cover_gradient: 'linear-gradient(180deg,#E0A764,#693718)',
    rating: 4.85,
    review_count: 98,
    total_stops: 7,
    duration_label: '1.5 hrs',
    narrator_name: 'Yassine Berrada',
  },
  {
    id: 'athens-marble-01',
    slug: 'athens-marble-and-noise',
    city: 'Athens',
    city_slug: 'athens',
    title_display: 'Athens, marble & noise',
    cover_gradient: 'linear-gradient(160deg,#B7B2A3,#5A5648)',
    rating: 4.9,
    review_count: 127,
    total_stops: 9,
    duration_label: '2.5 hrs',
    narrator_name: 'Sofia P.',
  },
]

export const MOCK_TOUR_DETAIL: TourDetail = {
  ...MOCK_TOURS[0],
  narrator_quote: 'Walk slowly. The stones are patient.',
  description_short: `The Roman Forum is not one place but a thousand conversations overlaid on the same stones. On this three-hour narrated walk, historian Elena Conti — who grew up three streets from the Forum — leads you along the route a Roman senator might have taken from his townhouse to the Curia, pausing where the city still speaks: in worn inscriptions, in cracked paving, in the particular way the late afternoon light falls across the Palatine.

This is not a list of dates read aloud by a stranger. Each of the twelve stops carries one or more short chapters — two minutes here, a minute there — written to be heard exactly where you're standing. You'll learn why the Arch of Titus outlived the empire that built it, what the Vestal Virgins guarded for a thousand years, and how a single hill named the word "palace."

The full tour works completely offline — download it before you land and walk without a signal, a roaming bill, or a screen demanding your attention. Just a knowledgeable voice in your ear and two thousand years of stone underfoot.`,
  city_context: 'Rome is a city where every street corner holds a layer of history. Founded, according to legend, in 753 BC, it grew from a small settlement on the Palatine Hill into the capital of an empire that stretched from Scotland to Syria. Today the city wears its past openly — ancient temples stand beside baroque piazzas, medieval churches occupy the shells of Roman basilicas, and the cobblestones beneath your feet were laid when this was the centre of the known world.',
  stops_preview: [
    { order: 1, name: 'Arch of Titus', hint: 'The triumph, the menorah, the stone that remembers.', duration_label: '~25 min' },
    { order: 2, name: 'The Forum Romanum', hint: 'Where the republic argued itself into an empire.', duration_label: '~40 min' },
    { order: 3, name: 'Temple of Vesta', hint: 'A hearth kept alight by six women, for a thousand years.', duration_label: '~15 min' },
    { order: 4, name: 'House of the Vestals', hint: 'Private rooms for public faith.', duration_label: '~10 min' },
    { order: 5, name: 'Palatine Hill', hint: 'The palaces whose word became "palace."', duration_label: '~30 min' },
    { order: 6, name: 'Circus Maximus', hint: 'A long oval of dust, and the roar around it.', duration_label: '~20 min' },
    { order: 7, name: 'Colosseum', hint: 'The machine of spectacle, seen from the outside in.', duration_label: '~30 min' },
  ],
  stops_hidden_count: 5,
  tags: ['🎧 Narrated by a local historian', '⬇️ Works offline', '🌍 EN · IT · FR', '🕐 Walk at your own pace'],
  duration_days: 1,
}
