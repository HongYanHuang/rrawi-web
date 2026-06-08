import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StoreBadge from '@/components/StoreBadge'
import PhoneMockup from '@/components/PhoneMockup'
import TourCard from '@/components/TourCard'
import RevealInit from '@/components/RevealInit'
import { getTours, getCities } from '@/lib/api'
import { toDisplayName } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'raawi — Audio walking tours, narrated by people who know the place',
  description:
    'raawi turns a city walk into a story. Narrated audio tours that unfold step by step, made by people who actually know the place. Available in Rome, Kyoto, Lisbon, and more.',
  alternates: { canonical: 'https://www.rrawi.com' },
}

const HOW_STEPS = [
  {
    n: '01',
    title: 'Pick a city',
    body: 'Choose where you are — or where you\'re dreaming of. Each city holds tours written by locals.',
  },
  {
    n: '02',
    title: 'Press play, start walking',
    body: 'The story follows your steps. Arrive at a stop and the next chapter begins — hands in your pockets.',
  },
  {
    n: '03',
    title: 'Listen, look, linger',
    body: 'Download for offline, walk at your own pace, and let the place speak before you move on.',
  },
]

const TESTIMONIALS = [
  {
    text: 'I stood at the Forum for twenty minutes just listening. It never felt like a tour — it felt like a friend who happened to know everything.',
    name: 'Farida M.',
    city: 'Rome',
    gradient: 'linear-gradient(135deg,#B8742A,#6E3D18)',
  },
  {
    text: 'The pacing matches a real walk. Nothing rushed. By the third stop I forgot I was holding my phone at all.',
    name: 'Oliver K.',
    city: 'Kyoto',
    gradient: 'linear-gradient(135deg,#5B6E5A,#2F3E33)',
  },
  {
    text: "Downloaded it before a trip with no signal and it just worked. Elena's voice is the reason I'll go back to Rome.",
    name: 'Mei L.',
    city: 'Lisbon',
    gradient: 'linear-gradient(135deg,#D9A27A,#7A3E2A)',
  },
]

export default async function HomePage() {
  const [tours, cities] = await Promise.all([getTours(), getCities()])

  return (
    <>
      <RevealInit />
      <Nav />

      {/* ── HERO ── */}
      <header className="section" style={{ paddingTop: '72px', paddingBottom: '72px', overflow: 'hidden' }}>
        <div className="wrap hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div className="pill pill-accent reveal" style={{ marginBottom: '22px' }}>
              🧭 Now in {cities.length} cities
            </div>
            <h1 className="reveal">
              The city has<br />a story.<br />
              <span style={{ color: 'var(--accent)' }}>Walk into it.</span>
            </h1>
            <p className="lead reveal" style={{ margin: '24px 0 32px', maxWidth: '480px' }}>
              raawi turns a walk into a told tale — narrated audio tours that unfold step by step,
              made by people who actually know the place.
            </p>
            <div className="store-badges reveal">
              <StoreBadge platform="ios" />
              <StoreBadge platform="android" />
            </div>
          </div>

          <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <PhoneMockup />
          </div>
        </div>
      </header>

      {/* ── HOW IT WORKS ── */}
      <section className="section" id="how">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 56px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>How it works</div>
            <h2>Three steps, then just walk.</h2>
          </div>
          <div className="how-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }}>
            {HOW_STEPS.map(s => (
              <div className="reveal" key={s.n}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em' }}>{s.n}</div>
                <h3 style={{ margin: '14px 0 10px' }}>{s.title}</h3>
                <p className="muted" style={{ fontSize: '16px', lineHeight: 1.6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOURS CAROUSEL ── */}
      <section className="section" id="tours" style={{ background: 'var(--paper-2)', borderTop: '0.5px solid var(--hair)', borderBottom: '0.5px solid var(--hair)' }}>
        <div className="wrap">
          <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '36px' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '12px' }}>Featured tours</div>
              <h2>Where will you walk?</h2>
            </div>
            <a className="btn btn-ghost" href="#cities" style={{ whiteSpace: 'nowrap' }}>All cities →</a>
          </div>
          <div className="rail">
            {tours.map(t => <TourCard key={t.id} tour={t} />)}
          </div>
        </div>
      </section>

      {/* ── NARRATOR STORY ── */}
      <section className="section" id="story">
        <div className="wrap story-grid" style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: '52px', alignItems: 'center' }}>
          <div className="reveal" style={{ order: 2 }}>
            <div className="eyebrow" style={{ marginBottom: '16px' }}>The one who narrates</div>
            <h2 style={{ marginBottom: '20px' }}>Rawi means<br />&ldquo;the storyteller.&rdquo;</h2>
            <p className="lead" style={{ marginBottom: '18px' }}>
              In the old tradition, the <em>rawi</em> was the one who carried a story and told it aloud —
              keeping a place alive by speaking it.
            </p>
            <p className="muted" style={{ fontSize: '17px', lineHeight: 1.7, marginBottom: '24px' }}>
              Every raawi tour is voiced by someone who belongs to the place: a historian who grew up three
              streets from the Forum, a poet who knows which Lisbon staircase catches the last of the light.
              No scripts read by strangers. No facts without feeling. Just a knowledgeable voice, walking
              beside you, turning a route into a story you&apos;ll remember long after your feet stop aching.
            </p>
            <a className="btn btn-primary" href="#download">Walk your first tour</a>
          </div>
          <div className="reveal" style={{ order: 1 }}>
            <div className="ph" data-label="Narrator · Elena Conti, Rome" style={{ aspectRatio: '4/5', borderRadius: 'var(--r)' }} />
          </div>
        </div>
      </section>

      {/* ── CITIES ── */}
      <section className="section-sm" id="cities" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 40px' }}>
            <div className="eyebrow" style={{ color: '#A9BFA0', marginBottom: '12px' }}>Cities available</div>
            <h2 style={{ color: 'var(--paper)' }}>
              {cities.length === 8 ? 'Eight' : cities.length} cities. More each season.
            </h2>
          </div>
          <div
            className="cities-grid reveal"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px' }}
          >
            {cities.map(c => (
              <a key={c.slug} href="#tours" className="city-item">
                <span style={{ fontSize: '24px' }}>{c.icon}</span>
                <span style={{ fontWeight: 600, fontSize: '16px' }}>{toDisplayName(c.name)}</span>
              </a>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '30px', color: 'rgba(246,241,231,0.6)', fontSize: '15px' }}>
            Don&apos;t see your city?{' '}
            <a href="#download" style={{ color: '#A9BFA0', fontWeight: 600 }}>Tell us where to walk next →</a>
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>From the walkers</div>
            <h2>Quietly, completely loved.</h2>
          </div>
          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
            {TESTIMONIALS.map(r => (
              <div className="card reveal" key={r.name} style={{ padding: '26px 24px' }}>
                <div style={{ color: 'var(--accent)', fontSize: '15px', marginBottom: '14px' }}>★★★★★</div>
                <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--ink)', margin: '0 0 20px', fontStyle: 'italic' }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: r.gradient, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px' }}>{r.name}</div>
                    <div className="muted" style={{ fontSize: '13px' }}>Walked in {r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ── */}
      <section className="section" id="download" style={{ background: 'var(--accent)', color: 'var(--paper)' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 className="reveal" style={{ color: 'var(--paper)' }}>
            Your next walk is<br />already a story.
          </h2>
          <p className="reveal lead" style={{ color: 'rgba(246,241,231,0.85)', margin: '20px auto 32px', maxWidth: '480px' }}>
            Download raawi and let the city tell you what it remembers.
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
