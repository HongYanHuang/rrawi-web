export default function PhoneMockup() {
  return (
    <div
      className="hero-phone"
      style={{
        width: '300px', height: '610px', borderRadius: '46px',
        background: 'var(--paper)',
        boxShadow: '0 40px 80px rgba(27,25,21,0.22),0 0 0 9px var(--ink),0 0 0 10px rgba(255,255,255,0.05)',
        position: 'relative', overflow: 'hidden', flexShrink: 0,
      }}
    >
      {/* notch */}
      <div style={{
        position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
        width: '104px', height: '30px', borderRadius: '20px', background: '#000', zIndex: 5,
      }} />

      <div style={{ padding: '54px 18px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <span className="wordmark" style={{ fontSize: '20px' }}>raawi<span className="dot" /></span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'var(--ink)', color: 'var(--paper)',
            borderRadius: '99px', padding: '6px 12px', fontSize: '13px', fontWeight: 600,
          }}>
            🏛️ Rome ▾
          </span>
        </div>

        <div className="ph" style={{ height: '200px', borderRadius: '18px' }} data-label="Rome · Forum" />

        <div style={{ padding: '14px 2px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 700, fontSize: '16px' }}>Ancient Rome, on foot</span>
            <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '14px' }}>★ 4.9</span>
          </div>
          <div style={{ color: 'var(--ink-3)', fontSize: '13px', marginTop: '2px' }}>
            12 stops · 3 hrs · narrated by Elena
          </div>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '11px',
          background: 'var(--paper-2)', border: '0.5px solid var(--hair)',
          borderRadius: '14px', padding: '11px', marginTop: '4px',
        }}>
          <div style={{
            width: '42px', height: '42px', borderRadius: '50%',
            background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="13" height="15" viewBox="0 0 12 14">
              <path d="M1 1L11 7L1 13Z" fill="#F6F1E7" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 600 }}>The fire that could not die</div>
            <div style={{ height: '3px', background: 'var(--hair)', borderRadius: '9px', marginTop: '7px', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, width: '38%', background: 'var(--accent)', borderRadius: '9px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
