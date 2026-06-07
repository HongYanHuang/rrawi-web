interface Props {
  platform?: 'ios' | 'android'
  light?: boolean
  href?: string
}

export default function StoreBadge({ platform = 'ios', light = false, href = '#' }: Props) {
  const cls = `store-badge${light ? ' light' : ''}`
  if (platform === 'android') {
    return (
      <a className={cls} href={href} aria-label="Get it on Google Play">
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
          <path d="M2 1.5C1.7 1.8 1.5 2.3 1.5 2.9v18.2c0 .6.2 1.1.5 1.4l.1.1L12 12.3v-.2L2 1.5z" fill="currentColor" opacity="0.9" />
          <path d="M15.5 15.8L12 12.3v-.2l3.5-3.5.1.1 4.2 2.4c1.2.7 1.2 1.8 0 2.5l-4.2 2.4-.1-.2z" fill="currentColor" opacity="0.6" />
          <path d="M15.6 15.7L12 12.1 2 22.1c.4.4 1 .5 1.8.1l11.8-6.5z" fill="currentColor" opacity="0.75" />
          <path d="M15.6 8.5L3.8 1.9C3 1.5 2.4 1.6 2 2l10 10 3.6-3.5z" fill="currentColor" />
        </svg>
        <span className="sb-text">
          <span className="sb-small">Get it on</span>
          <span className="sb-big">Google Play</span>
        </span>
      </a>
    )
  }
  return (
    <a className={cls} href={href} aria-label="Download on the App Store">
      <svg width="22" height="26" viewBox="0 0 17 20" fill="currentColor">
        <path d="M13.6 10.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.1-2.8.9-3.6.9-.7 0-1.8-.8-3-.8-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.7 1.1 1.6 2.4 2.8 2.4 1.1 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2 1-1.3 1.3-2.5 1.4-2.6-.1 0-2.4-1-2.4-3zM11.1 4c.6-.7 1-1.7.9-2.7-.8 0-1.9.5-2.5 1.2-.6.6-1.1 1.7-1 2.6.9.1 1.9-.4 2.6-1.1z" />
      </svg>
      <span className="sb-text">
        <span className="sb-small">Download on the</span>
        <span className="sb-big">App Store</span>
      </span>
    </a>
  )
}
