import type { Metadata } from 'next';
import LegalLayout from '../LegalLayout';
import styles from '../legal-shared.module.scss';

export const metadata: Metadata = {
  title: 'Support — Goldener Pfau',
  description: 'Get help with your Goldener Pfau account, requests and bookings, or contact our team directly.',
};

const faqs = [
  {
    q: 'How does Goldener Pfau work?',
    a: 'Goldener Pfau is a private desk for premium requests across real estate, private cars, yachts, private jets, hotels & stays, concierge and global assistance. You submit a request with your destination, category and preferences, and our team coordinates it with selected partners.',
  },
  {
    q: 'Which categories can I book right now?',
    a: 'Real Estate and Private Cars are available for direct requests today. Every other category — Yachts & Boats, Private Jets, Hotels & Stays, Concierge and Global Assistance — is handled by request while we complete each market’s operational and regulatory requirements. The current status of each category is always shown on the site and in the app.',
  },
  {
    q: 'How do I submit a request?',
    a: 'Write to contact@goldenerpfau.com with your destination, service and dates, or submit a request through the app. We will confirm receipt and next steps.',
  },
  {
    q: 'How long does it take to hear back?',
    a: 'We aim to respond to every request within one business day. Complex or high-value requests may take longer to fully coordinate with partners, and we will keep you updated throughout.',
  },
  {
    q: 'What does membership provide?',
    a: 'Membership provides priority access and dedicated coordination across our private network. It is a concierge service, not an investment or financial product. Contact our desk for current availability and terms.',
  },
  {
    q: 'I’m having trouble logging in to the app.',
    a: 'Try resetting your password from the app’s sign-in screen. If that doesn’t resolve it, email us at contact@goldenerpfau.com with the address you registered with and a short description of the issue.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Email contact@goldenerpfau.com from your registered address asking us to delete your account. We will confirm the request and complete deletion within a reasonable period, other than data we’re required to keep by law. See our Privacy Policy for details.',
  },
  {
    q: 'I represent a property, fleet, hotel or agency — how do we partner with Goldener Pfau?',
    a: 'We welcome selected partners across all our categories. Write to contact@goldenerpfau.com with a short introduction to your business and the markets you cover, and our partnerships team will follow up.',
  },
];

export default function Support() {
  return (
    <LegalLayout
      eyebrow="Help Center"
      title="Support"
      updated="October 2026"
      intro="Answers to common questions, and direct ways to reach the Goldener Pfau team."
    >
      <section>
        <h2><span>—</span> Contact us directly</h2>
        <p>The fastest way to reach us for a request, a booking question, or account help.</p>
        <div className={styles.contactCard}>
          <a className={styles.contactLink} href="mailto:contact@goldenerpfau.com?subject=Support%20request%20-%20Goldener%20Pfau">
            Email contact@goldenerpfau.com
          </a>
        </div>
      </section>

      <section>
        <h2><span>—</span> Frequently asked questions</h2>
        {faqs.map((item) => (
          <div className={styles.faqItem} key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section>
        <h2><span>—</span> More information</h2>
        <p>
          For details on how we handle your data, see our <a href="/privacy">Privacy Policy</a>. For the terms that
          govern use of our website, app and services, see our <a href="/terms">Terms of Use</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
