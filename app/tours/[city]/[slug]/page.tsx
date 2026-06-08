import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StoreBadge from '@/components/StoreBadge'
import TourCard from '@/components/TourCard'
import RevealInit from '@/components/RevealInit'
import { getTour, getTours, getAllTourSlugs } from '@/lib/api'
import { toDisplayName } from '@/lib/utils'

export const revalidate = 3600

interface Props {
  params: Promise<{ city: string; slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllTourSlugs()
  return slugs.map(({ city, slug }) => ({ city, slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, slug } = await params
  const tour = await getTour(city, slug)
  if (!tour) return {}
  return {
    title: `${tour.title_display} — Audio Walking Tour in ${tour.city}`,
    description: `Explore ${tour.city} with ${tour.title_display}, a ${tour.duration_label} audio walking tour narrated by locals. Download raawi.`,
    alternates: { canonical: `https://www.rrawi.com/tours/${city}/${slug}` },
    openGraph: {
      title: `${tour.title_display} — Audio Walking Tour in ${tour.city}`,
      description: `Explore ${tour.city} with ${tour.title_display}, a ${tour.duration_label} audio walking tour narrated by locals. Download raawi.`,
      type: 'website',
      images: tour.cover_image_url ? [{ url: tour.cover_image_url }] : [],
    },
  }
}

export default async function TourPage({ params }: Props) {
  const { city, slug } = await params
  const [tour, allTours] = await Promise.all([getTour(city, slug), getTours()])

  if (!tour) notFound()

  const related = allTours.filter(t => t.city_slug === city && t.slug !== slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title_display,
    description: tour.description_short,
    touristType: 'Walking tour',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: tour.stops_preview.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.name,
      })),
    },
    provider: { '@type': 'Organization', name: 'raawi', url: 'https://www.rrawi.com' },
  }

  const heroStyle: React.CSSProperties = {
    background: tour.cover_image_url
      ? `url(${tour.cover_image_url}) center/cover no-repeat`
      : (tour.cover_gradient ?? 'var(--paper-2)'),
    marginTop: '18px',
  }

  return (
    <>
      <RevealInit />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />

      {/* breadcrumb */}
      <div className="wrap" style={{ padding: '18px 24px 0', fontSize: '14px', color: 'var(--ink-3)' }}>
        <Link href="/" style={{ color: 'var(--ink-3)' }}>Home</Link>
        {' › '}
        <Link href="/#cities" style={{ color: 'var(--ink-3)' }}>{toDisplayName(tour.city)}</Link>
        {' › '}
        <span style={{ color: 'var(--ink-2)' }}>{tour.title_display}</span>
      </div>

      {/* ── HERO ── */}
      <header className="tour-hero" style={heroStyle}>
        <div className="wrap">
          <div className="pill" style={{
            background: 'rgba(246,241,231,0.18)', borderColor: 'rgba(246,241,231,0.3)',
            color: 'var(--paper)', marginBottom: '16px',
          }}>
            {toDisplayName(tour.city)} · Walking Tour
          </div>
          <h1 style={{ color: 'var(--paper)', maxWidth: '620px' }}>{tour.title_display}</h1>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '18px',
            marginTop: '18px', flexWrap: 'wrap', fontSize: '15px', fontWeight: 600,
          }}>
            {tour.rating != null && (
              <>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  ★ {tour.rating}{' '}
                  {tour.review_count != null && (
                    <span style={{ opacity: 0.8, fontWeight: 400 }}>({tour.review_count} reviews)</span>
                  )}
                </span>
                <span style={{ opacity: 0.6 }}>·</span>
              </>
            )}
            <span>{tour.total_stops} stops</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span>{tour.duration_label}</span>
            {tour.distance_label && (
              <>
                <span style={{ opacity: 0.6 }}>·</span>
                <span>{tour.distance_label}</span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ── BODY ── */}
      <section className="section-sm">
        <div className="wrap tour-layout">
          {/* main column */}
          <div>
            <div className="reveal">
              <h2 style={{ marginBottom: '18px' }}>A walk through {tour.city}</h2>
              {tour.description_short.split('\n\n').map((para, i) => (
                <p key={i} style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--ink-2)', margin: '0 0 16px' }}>
                  {para}
                </p>
              ))}
            </div>

            {/* tags */}
            <div className="reveal" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '28px 0 8px' }}>
              {tour.tags.map(tag => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>

            {/* stop list */}
            <div className="reveal" style={{ marginTop: '44px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h2>The route · {tour.total_stops} stops</h2>
                <span className="muted" style={{ fontSize: '14px' }}>Preview below</span>
              </div>
              {tour.stops_preview.map((s, i) => (
                <div className="stop-row" key={s.order}>
                  <div className={`stop-num${i === 0 ? ' first' : ''}`}>
                    {i === 0 ? '▶' : String(s.order).padStart(2, '0')}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '17px', letterSpacing: '-0.01em' }}>{s.name}</div>
                    <div className="muted" style={{ fontSize: '15px', marginTop: '3px', lineHeight: 1.5 }}>{s.hint}</div>
                    <div style={{ fontSize: '12px', color: 'var(--ink-3)', fontWeight: 600, marginTop: '7px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      🕐 {s.duration_label} here
                    </div>
                  </div>
                </div>
              ))}
              {tour.stops_hidden_count > 0 && (
                <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--ink-3)', fontSize: '14px' }}>
                  + {tour.stops_hidden_count} more stops in the app
                </div>
              )}
            </div>

            {/* sample audio teaser */}
            <div className="reveal" style={{
              marginTop: '32px', padding: '22px', background: 'var(--accent-soft)',
              borderRadius: 'var(--r)', display: 'flex', alignItems: 'center', gap: '16px',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="14" height="16" viewBox="0 0 12 14">
                  <path d="M1 1L11 7L1 13Z" fill="#F6F1E7" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '16px' }}>Hear the first chapter free</div>
                <div className="muted" style={{ fontSize: '14px', marginTop: '2px' }}>
                  Get the app to walk the rest.
                </div>
              </div>
            </div>

            {/* city context */}
            {tour.city_context && (
              <div className="reveal" style={{ marginTop: '48px' }}>
                <h2 style={{ marginBottom: '18px' }}>About {tour.city}</h2>
                <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--ink-2)' }}>{tour.city_context}</p>
              </div>
            )}
          </div>

          {/* sticky aside */}
          <aside>
            <div className="card sticky-cta" style={{ padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: tour.cover_gradient ?? 'var(--accent)', flexShrink: 0,
                }} />
                <div>
                  <div className="muted" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Narrated by
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>{tour.narrator_name}</div>
                </div>
              </div>
              {tour.narrator_quote && (
                <div style={{
                  fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.6,
                  paddingBottom: '16px', borderBottom: '0.5px solid var(--hair)',
                  fontStyle: 'italic',
                }}>
                  &ldquo;{tour.narrator_quote}&rdquo;
                </div>
              )}
              <div style={{ fontWeight: 700, fontSize: '18px', margin: '16px 0 4px' }}>Free to walk</div>
              <div className="muted" style={{ fontSize: '14px', marginBottom: '16px' }}>
                Download raawi and start this tour in seconds.
              </div>
              <div className="store-badges" style={{ flexDirection: 'column' }}>
                <StoreBadge platform="ios" />
                <StoreBadge platform="android" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <section className="section-sm" style={{ background: 'var(--paper-2)', borderTop: '0.5px solid var(--hair)' }}>
          <div className="wrap">
            <h2 className="reveal" style={{ marginBottom: '30px' }}>More in {tour.city}</h2>
            <div className="rail">
              {related.map(t => <TourCard key={t.id} tour={t} width={290} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── DOWNLOAD BAND ── */}
      <section className="section-sm" style={{ background: 'var(--accent)', color: 'var(--paper)' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <h2 className="reveal" style={{ color: 'var(--paper)' }}>Ready to walk {tour.city}?</h2>
          <p className="reveal lead" style={{ color: 'rgba(246,241,231,0.85)', margin: '16px auto 28px', maxWidth: '440px' }}>
            Download raawi and let {tour.narrator_name} walk with you.
          </p>
          <div className="reveal store-badges" style={{ justifyContent: 'center' }}>
            <StoreBadge platform="ios" light />
            <StoreBadge platform="android" light />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
