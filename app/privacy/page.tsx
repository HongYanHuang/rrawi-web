import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'raawi Privacy Policy — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://www.rrawi.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <header style={{ background: 'var(--paper-2)', borderBottom: '0.5px solid var(--hair)' }}>
        <div className="wrap" style={{ padding: '56px 24px 48px', maxWidth: '760px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>Legal</div>
          <h1 style={{ fontSize: 'clamp(34px,5vw,52px)' }}>Privacy Policy</h1>
          <p className="muted" style={{ marginTop: '14px', fontSize: '15px' }}>
            Effective date: [DATE] — replace before publishing
          </p>
        </div>
      </header>

      <section className="section-sm">
        <div className="wrap prose">

          <h2>1. Introduction</h2>
          <p>This Privacy Policy explains how [COMPANY LEGAL NAME] (&ldquo;raawi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects,
            uses, and shares information when you use the raawi app, website, and related services
            (the &ldquo;Service&rdquo;).</p>

          <h2>2. Information we collect</h2>
          <h3>2.1 Information you provide</h3>
          <ul>
            <li><strong>Account information</strong> — your name and the identifier from your sign-in provider
              (Apple or Google).</li>
            <li><strong>Personalised tour inputs</strong> — the preferences and prompts you provide to generate
              custom tours.</li>
          </ul>
          <h3>2.2 Information collected automatically</h3>
          <ul>
            <li><strong>Location data</strong> — used to deliver navigation and trigger audio at points of
              interest while a tour is active. Not collected in the background.</li>
            <li><strong>Usage &amp; device data</strong> — app interactions, device type, OS version, and
              crash diagnostics.</li>
          </ul>

          <h2>3. How we use information</h2>
          <ul>
            <li>To provide, maintain, and improve the Service and your tours.</li>
            <li>To generate and store your personalised tours.</li>
            <li>To deliver location-based audio and navigation during a tour.</li>
            <li>To communicate with you about the Service.</li>
            <li>To analyse aggregate usage and improve product quality.</li>
          </ul>

          <h2>4. How we share information</h2>
          <p>We do not sell your personal information. We may share information with service providers who help us
            operate the Service (such as hosting, analytics, and authentication providers), subject to appropriate
            data-processing agreements.</p>

          <h2>5. Location data</h2>
          <p>raawi uses your device location to power live tour navigation. You can control location permissions at
            any time through your device settings. If permission is denied, navigation features will not work but
            you can still listen to tour audio manually.</p>

          <h2>6. Data retention</h2>
          <p>We retain your information for as long as your account is active or as needed to provide the Service.
            You can delete your account at any time (see Section 7).</p>

          <h2>7. Your rights &amp; account deletion</h2>
          <p>You can <strong>delete your account</strong> at any time from within the app
            (Account → Account settings → Delete account), which permanently removes your profile,
            history, and personalised tours. Depending on your location, you may also have rights to
            access, correct, or export your personal information — contact us at{' '}
            <a href="mailto:privacy@raawi.app">privacy@raawi.app</a> to make a request.</p>

          <h2>8. Children&apos;s privacy</h2>
          <p>The Service is not directed to children under 13, and we do not knowingly collect their personal
            information. If you believe a child has provided us with personal information, please contact us.</p>

          <h2>9. International transfers</h2>
          <p>Your information may be processed in countries other than your own. We apply appropriate safeguards
            for any such transfers in accordance with applicable law.</p>

          <h2>10. Security</h2>
          <p>We use reasonable technical and organisational measures to protect your information. No method of
            transmission or storage is completely secure.</p>

          <h2>11. Changes to this policy</h2>
          <p>We may update this Privacy Policy from time to time. We will revise the effective date above and,
            where appropriate, notify you of material changes.</p>

          <h2>12. Contact</h2>
          <p>Questions about your privacy? Contact us at{' '}
            <a href="mailto:privacy@raawi.app">privacy@raawi.app</a>.
          </p>

        </div>
      </section>

      <Footer />
    </>
  )
}
