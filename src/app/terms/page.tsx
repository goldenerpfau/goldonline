import type { Metadata } from 'next';
import LegalLayout from '../LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Use — Goldener Pfau',
  description: 'The terms that govern use of the Goldener Pfau website, app and concierge marketplace.',
};

export default function TermsOfUse() {
  return (
    <LegalLayout
      eyebrow="Legal · Terms"
      title="Terms of Use"
      updated="October 2026"
      intro="These terms govern your use of the Goldener Pfau website, mobile app and concierge services, operated by Goldener Pfau Sp. z o.o. (KRS 0001054686). By using our platform, you agree to these terms."
    >
      <section>
        <h2><span>1.</span> What Goldener Pfau is</h2>
        <p>
          Goldener Pfau is a private marketplace and concierge desk connecting clients with selected partners across
          real estate, private cars, yachts, private jets, hotels &amp; stays, concierge services and global
          assistance. Some categories are bookable directly today; others are coordinated by request while we complete
          each market&apos;s operational and regulatory requirements — the current status of each category is shown
          on the site and in the app.
        </p>
      </section>

      <section>
        <h2><span>2.</span> Not an investment offering</h2>
        <p>
          Membership provides private access and concierge coordination. It is not an investment or financial
          product. Goldener Pfau does not currently accept capital, manage investments, or offer financial products.
          Nothing on this platform is an offer of securities, a solicitation to invest, or investment advice.
        </p>
      </section>

      <section>
        <h2><span>3.</span> Requests, bookings and coordination</h2>
        <p>
          When you submit a request through the platform, we forward it to the relevant partner or coordinate it
          directly. A request is not automatically a confirmed booking: confirmation depends on availability, partner
          acceptance, and — for some categories — verification steps. We will communicate clearly once a request
          moves from &ldquo;submitted&rdquo; to &ldquo;confirmed.&rdquo;
        </p>
        <p>
          Pricing, currency, cancellation terms and any deposit requirements are specific to each category and each
          partner, and are confirmed to you in writing (by email or in-app) before you are asked to commit to a
          booking. Where the platform does not yet process payments directly, payment is arranged directly with the
          relevant partner under the terms confirmed for that booking.
        </p>
      </section>

      <section>
        <h2><span>4.</span> Cancellations and changes</h2>
        <p>
          Because Goldener Pfau spans very different categories — from short-term hospitality to high-value asset
          transactions — cancellation and change terms are set out at the time of confirmation for each request rather
          than as a single blanket policy. If you need to cancel or change a confirmed booking, contact us as early as
          possible at <a href="mailto:contact@goldenerpfau.com">contact@goldenerpfau.com</a> and we will apply the
          terms agreed for that booking.
        </p>
      </section>

      <section>
        <h2><span>5.</span> If something goes wrong</h2>
        <p>
          We select our partners carefully, but the underlying service (a stay, a rental, a property viewing, a
          charter) is ultimately provided by that partner, not by Goldener Pfau directly, unless stated otherwise. If
          something goes wrong with a confirmed arrangement, tell us as soon as possible — we will work with you and
          the partner to resolve it. Our liability for any claim relating to the platform is limited to the amount you
          paid to Goldener Pfau for the specific request giving rise to the claim, except where liability cannot be
          limited by law (for example, in cases of gross negligence, wilful misconduct, or death or personal injury
          caused by our negligence).
        </p>
      </section>

      <section>
        <h2><span>6.</span> Your account</h2>
        <p>
          You are responsible for keeping your account credentials secure and for the accuracy of the information you
          provide. You can request deletion of your account at any time — see our{' '}
          <a href="/privacy">Privacy Policy</a> for how.
        </p>
      </section>

      <section>
        <h2><span>7.</span> Intellectual property</h2>
        <p>
          The Goldener Pfau name, logo, and the content of our website and app (excluding partner and client content)
          belong to Goldener Pfau Sp. z o.o. or its licensors. You may not copy, reproduce or use them without our
          prior written consent.
        </p>
      </section>

      <section>
        <h2><span>8.</span> Reviews and content you submit</h2>
        <p>
          If you submit reviews, feedback or other content to us, you confirm it is accurate and that you have the
          right to share it, and you grant us a licence to use it in connection with operating and promoting the
          platform.
        </p>
      </section>

      <section>
        <h2><span>9.</span> Changes to these terms</h2>
        <p>
          We may update these terms as the platform evolves — for example, as more categories move from &ldquo;by
          request&rdquo; to directly bookable, or as in-platform payments are introduced. Material changes will be
          reflected here with an updated date. Continued use of the platform after a change means you accept the
          updated terms.
        </p>
      </section>

      <section>
        <h2><span>10.</span> Governing law</h2>
        <p>
          These terms are governed by the laws of Poland. Any dispute arising from these terms or your use of the
          platform will be subject to the exclusive jurisdiction of the competent courts of Poland, without prejudice
          to any mandatory consumer-protection rights you may have in your country of residence.
        </p>
      </section>

      <section>
        <h2><span>11.</span> Contact</h2>
        <p>
          Questions about these terms can be sent to{' '}
          <a href="mailto:contact@goldenerpfau.com">contact@goldenerpfau.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
