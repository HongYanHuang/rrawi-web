import Link from 'next/link'
import NavCta from './NavCta'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="wordmark">
          rrawi<span className="dot" />
        </Link>
        <div className="nav-links">
          <Link href="/#how">How it works</Link>
          <Link href="/#tours">Tours</Link>
          <Link href="/#cities">Cities</Link>
          <Link href="/#story">Our story</Link>
        </div>
        <div className="nav-cta">
          <NavCta />
        </div>
      </div>
    </nav>
  )
}
