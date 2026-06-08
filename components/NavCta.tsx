'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function NavCtaInner() {
  const params = useSearchParams()
  if (params.get('source') === 'rrawi-app') return null
  return (
    <Link className="btn btn-primary" href="/#download" style={{ padding: '10px 18px', fontSize: '15px' }}>
      Get the app
    </Link>
  )
}

export default function NavCta() {
  return (
    <Suspense fallback={null}>
      <NavCtaInner />
    </Suspense>
  )
}
