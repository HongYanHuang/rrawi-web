import Image from 'next/image'

export default function PhoneMockup() {
  return (
    <div
      className="hero-phone"
      style={{
        width: '300px', height: '651px', borderRadius: '46px',
        background: '#000',
        boxShadow: '0 40px 80px rgba(27,25,21,0.22),0 0 0 9px var(--ink),0 0 0 10px rgba(255,255,255,0.05)',
        position: 'relative', overflow: 'hidden', flexShrink: 0,
      }}
    >
      {/* notch */}
      <div style={{
        position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
        width: '104px', height: '30px', borderRadius: '20px', background: '#000', zIndex: 5,
      }} />

      <Image
        src="/screenshot-map.png"
        alt="rrawi app — tour map view"
        fill
        style={{ objectFit: 'cover', objectPosition: 'top' }}
        priority
      />
    </div>
  )
}
