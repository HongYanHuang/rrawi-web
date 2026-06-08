import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'rrawi Terms & Conditions — the rules that govern your use of the rrawi app and website.',
  alternates: { canonical: 'https://www.rrawi.com/terms' },
}

export default function TermsPage() {
  return (
    <>
      <Nav />

      <header style={{ background: 'var(--paper-2)', borderBottom: '0.5px solid var(--hair)' }}>
        <div className="wrap" style={{ padding: '56px 24px 48px', maxWidth: '760px' }}>
          <div className="eyebrow" style={{ marginBottom: '14px' }}>Legal</div>
          <h1 style={{ fontSize: 'clamp(34px,5vw,52px)' }}>Terms &amp; Conditions</h1>
          <p className="muted" style={{ marginTop: '14px', fontSize: '15px' }}>
            Effective date: [DATE] — replace before publishing
          </p>
        </div>
      </header>

      <section className="section-sm">
        <div className="wrap prose">

          <h2>1. Agreement to terms</h2>
          <p>These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the rrawi mobile
            application, website, and related services (collectively, the &ldquo;Service&rdquo;) provided by [COMPANY
            LEGAL NAME] (&ldquo;rrawi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By creating an account or using the Service,
            you agree to be bound by these Terms.</p>

          <h2>2. Eligibility &amp; accounts</h2>
          <p>You must be at least 13 years old to use the Service. You may sign in using a third-party provider
            (such as Apple or Google). You are responsible for maintaining the security of your account and for all
            activity that occurs under it.</p>

          <h2>3. License to use the Service</h2>
          <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to
            use the Service for your personal, non-commercial use.</p>
          <h3>3.1 Restrictions</h3>
          <ul>
            <li>You may not copy, redistribute, or resell tour content, audio, or written narration.</li>
            <li>You may not reverse-engineer or attempt to extract source content from the Service.</li>
            <li>You may not use the Service for any unlawful purpose.</li>
          </ul>

          <h2>4. Content &amp; intellectual property</h2>
          <p>All tours, audio narration, written descriptions, imagery, trademarks, and software are owned by rrawi
            or its licensors and are protected by intellectual-property laws.</p>

          <h2>5. Personalised &amp; user-created tours</h2>
          <p>The Service may allow you to generate personalised tours using AI. You retain ownership of the
            preferences and prompts you provide. rrawi retains a licence to store and process those inputs and
            outputs to operate and improve the Service.</p>

          <h2>6. Location services</h2>
          <p>The Service uses your device location to deliver tour navigation and trigger audio at points of
            interest. You can control location permissions at any time through your device settings.</p>

          <h2>7. Disclaimers</h2>
          <p>The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind. Walking
            tours involve moving through public spaces; you are responsible for your own safety and for obeying
            local laws and traffic.</p>

          <h2>8. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, rrawi shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of the Service.</p>

          <h2>9. Termination</h2>
          <p>We may suspend or terminate your access to the Service at any time for any breach of these Terms. You
            may stop using the Service and delete your account at any time from within the app.</p>

          <h2>10. Changes to these Terms</h2>
          <p>We may update these Terms from time to time. When we do, we will revise the effective date above and,
            where appropriate, notify you. Continued use of the Service constitutes acceptance of the revised Terms.</p>

          <h2>11. Governing law</h2>
          <p>These Terms are governed by the laws of [JURISDICTION]. [Add dispute resolution clause.]</p>

          <h2>12. Contact</h2>
          <p>Questions about these Terms? Contact us at{' '}
            <a href="mailto:legal@rrawi.com">legal@rrawi.com</a>.
          </p>

        </div>
      </section>

      <Footer />
    </>
  )
}
