'use client'
import { useEffect } from 'react'

export default function RevealInit() {
  useEffect(() => {
    document.documentElement.classList.add('js')

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (!els.length) return

    const revealEl = (e: HTMLElement) => e.classList.add('in')
    const inView = (e: HTMLElement) => {
      const r = e.getBoundingClientRect()
      return r.top < (window.innerHeight || 800) + 80 && r.bottom > -80
    }

    els.forEach(e => { if (inView(e)) revealEl(e) })

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            revealEl(en.target as HTMLElement)
            io.unobserve(en.target)
          }
        })
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
      els.forEach(e => { if (!e.classList.contains('in')) io.observe(e) })
    } else {
      els.forEach(revealEl)
    }

    setTimeout(() => els.forEach(revealEl), 1500)

    const onScroll = () => {
      let remaining = false
      els.forEach(e => {
        if (!e.classList.contains('in')) {
          if (inView(e)) revealEl(e); else remaining = true
        }
      })
      if (!remaining) window.removeEventListener('scroll', onScroll)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
  }, [])

  return null
}
