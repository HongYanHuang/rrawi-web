import Link from 'next/link'
import StoreBadge from './StoreBadge'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div className="footer-col">
            <Link href="/" className="wordmark inv lg">
              rrawi<span className="dot" />
            </Link>
            <p style={{ margin: '16px 0 22px', color: 'rgba(246,241,231,0.6)', fontSize: '15px', maxWidth: '300px', lineHeight: '1.6' }}>
              Audio walking tours, narrated by people who actually know the place. Walk slowly. Listen longer.
            </p>
            <div className="store-badges">
              <StoreBadge platform="ios" />
              <StoreBadge platform="android" />
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/#tours">Featured tours</Link></li>
              <li><Link href="/#cities">Cities</Link></li>
              <li><Link href="/#how">How it works</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/#story">Our story</Link></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 rrawi. Inspired by ♥️ over 🗺️ &amp; Edward Gibbon.</span>
          <span>Made for walking.</span>
        </div>
      </div>
    </footer>
  )
}
