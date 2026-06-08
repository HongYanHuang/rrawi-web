import Link from 'next/link'
import type { TourSummary } from '@/lib/api'
import { toDisplayName } from '@/lib/utils'

interface Props {
  tour: TourSummary
  width?: number
}

export default function TourCard({ tour, width = 300 }: Props) {
  const href = `/tours/${tour.city_slug}/${tour.slug}`
  return (
    <Link className="card card-link" href={href} style={{ width: `${width}px` }}>
      <div
        className="ph"
        style={{ height: '200px', background: tour.cover_gradient ?? 'var(--paper-2)', position: 'relative' }}
      >
        <span style={{
          position: 'absolute', top: '12px', left: '12px',
          background: 'rgba(246,241,231,0.92)', borderRadius: '99px',
          padding: '5px 12px', fontSize: '12px', fontWeight: 600,
        }}>
          {toDisplayName(tour.city)}
        </span>
      </div>
      <div style={{ padding: '16px 18px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
          <h3 style={{ fontSize: '19px' }}>{tour.title_display}</h3>
          {tour.rating != null && (
            <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '14px', whiteSpace: 'nowrap' }}>
              ★ {tour.rating}
            </span>
          )}
        </div>
        <div className="muted" style={{ fontSize: '14px', marginTop: '8px' }}>
          {tour.total_stops} stops · {tour.duration_label}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          marginTop: '14px', paddingTop: '14px', borderTop: '0.5px solid var(--hair)',
        }}>
          <div style={{
            width: '26px', height: '26px', borderRadius: '50%',
            background: tour.cover_gradient ?? 'var(--accent)', flexShrink: 0,
          }} />
          <span style={{ fontSize: '13px', color: 'var(--ink-2)' }}>Narrated by {tour.narrator_name}</span>
        </div>
      </div>
    </Link>
  )
}
