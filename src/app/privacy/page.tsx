import type { Metadata } from 'next';
import LegalLayout from '../LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — Goldener Pfau',
  description: 'How Goldener Pfau Sp. z o.o. collects, uses and protects personal data across the website, app and concierge services.',
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Legal · Data Protection"
      title="Privacy Policy"
      updated="August 2026"
      intro="This policy explains what personal data Goldener Pfau collects when you use our website, mobile app or concierge services, why we collect it, and the rights you have over it."
    >
      <section>
        <h2><span>1.</span> Who we are</h2>
        <p>
          Goldener Pfau Sp. z o.o. (&ldquo;Goldener Pfau&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), registered in Poland
          under KRS 0001054686, is the data controller for personal data processed through
          goldenerpfau.com, the Goldener Pfau mobile app, and our concierge and partner communications.
        </p>
        <p>
          For any question about this policy or about your data, contact us at{' '}
          <a href="mailto:contact@goldenerpfau.com">contact@goldenerpfau.com</a>.
        </p>
      </section>

      <section>
        <h2><span>2.</span> What we collect, and why</h2>
        <p>We only collect what we need to run the platform and coordinate your requests. Depending on how you use Goldener Pfau, this can include:</p>
        <ul>
          <li><strong>Account data</strong> — name, email address and authentication details, to create and secure your account.</li>
          <li><strong>Request and booking data</strong> — the details you submit for a concierge request or booking (category, dates, destination, preferences), so we and our partners can act on it.</li>
          <li><strong>Communication data</strong> — messages you send us by email, WhatsApp or in-app, to respond to and keep a record of your requests.</li>
          <li><strong>Verification data</strong> — identity or eligibility documents, only where required for a specific category or by law (for example, to confirm eligibility for a property viewing or vehicle rental).</li>
          <li><strong>Device and usage data</strong> — basic technical information (device type, app version, general usage patterns) to keep the app and site working reliably and securely.</li>
          <li><strong>Payment-related data</strong> — where a request involves payment, limited data needed to coordinate that payment; card and bank details are handled by our payment or partner providers directly, not stored by us.</li>
        </ul>
        <p>
          Our legal bases for this processing are: performing our contract with you (handling your account and requests),
          our legitimate interest in operating and securing the platform, your consent where we ask for it specifically
          (for example, marketing communications), and compliance with legal obligations (such as accounting and
          anti-fraud requirements).
        </p>
      </section>

      <section>
        <h2><span>3.</span> Special category data</h2>
        <p>
          We do not intentionally collect special category data (such as health, religious or biometric data). If a
          specific request unavoidably involves such data, we will only process it with your explicit consent or another
          valid legal basis, and only to the extent needed to fulfil that request.
        </p>
      </section>

      <section>
        <h2><span>4.</span> Who we share data with</h2>
        <p>We share personal data only where necessary, and never sell it. This can include:</p>
        <ul>
          <li><strong>Partners and operators</strong> — the property owner, operator, hotel, dealer or agency needed to fulfil your specific request, limited to what they need to act on it.</li>
          <li><strong>Service providers</strong> — infrastructure and processing providers (including our cloud hosting, currently based in the EU), acting as processors under our instructions.</li>
          <li><strong>Professional advisers</strong> — lawyers, auditors and accountants, where needed for our legitimate business purposes.</li>
          <li><strong>Authorities</strong> — where required by law, regulation or a valid legal request.</li>
        </ul>
      </section>

      <section>
        <h2><span>5.</span> International transfers</h2>
        <p>
          Our core infrastructure is hosted within the European Union. Where a request requires sharing data with a
          partner or provider outside the European Economic Area, we take steps to ensure an appropriate safeguard is
          in place, such as standard contractual clauses, before that transfer happens.
        </p>
      </section>

      <section>
        <h2><span>6.</span> How long we keep data</h2>
        <p>
          We keep personal data only for as long as needed for the purpose it was collected. As a general rule: account
          data is kept while your account is active and for a limited period afterwards in case you return; request and
          booking records are kept for as long as needed to resolve any related issue and to meet accounting and tax
          obligations (typically up to the statutory retention period under Polish law); marketing communication
          preferences are kept until you withdraw consent. You can ask us at any time about the specific retention
          period that applies to your data.
        </p>
      </section>

      <section>
        <h2><span>7.</span> Your rights</h2>
        <p>Under the GDPR, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Correct inaccurate or incomplete data.</li>
          <li>Request erasure of your data, subject to legal retention requirements.</li>
          <li>Restrict or object to certain processing.</li>
          <li>Receive your data in a portable format.</li>
          <li>Withdraw consent at any time, where processing is based on consent.</li>
          <li>Lodge a complaint with the Polish data protection authority (UODO — Urząd Ochrony Danych Osobowych) or your local supervisory authority.</li>
        </ul>
        <p>To exercise any of these rights, contact <a href="mailto:contact@goldenerpfau.com">contact@goldenerpfau.com</a>.</p>
      </section>

      <section>
        <h2><span>8.</span> Account deletion</h2>
        <p>
          You can request deletion of your account and associated personal data at any time by contacting{' '}
          <a href="mailto:contact@goldenerpfau.com">contact@goldenerpfau.com</a> from your registered email address.
          We will confirm your request and complete deletion within a reasonable period, except for data we are
          required to retain by law.
        </p>
      </section>

      <section>
        <h2><span>9.</span> Cookies and similar technologies</h2>
        <p>
          Our website uses only the cookies and similar technologies strictly necessary for it to function. We do not
          currently use advertising or third-party tracking cookies. If this changes, we will update this policy and
          request consent where required.
        </p>
      </section>

      <section>
        <h2><span>10.</span> Changes to this policy</h2>
        <p>
          We may update this policy as our services evolve. Material changes will be reflected here with an updated
          date at the top of the page.
        </p>
      </section>
    </LegalLayout>
  );
}
