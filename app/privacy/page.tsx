import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Eye,
  Mail,
  CheckCircle,
  Server,
  FileText,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/privacy`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Privacy Policy & Data Protection',
  `Read how ${BRAND} safeguards your privacy and personal data in compliance with PIPEDA (Canada), GDPR (EU), and CCPA (California). 100% confidential.`,
  '/privacy'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const PrivacySchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Privacy Policy | ${BRAND}`,
        description: `${BRAND} privacy policy — how we collect, protect, and manage your personal data in compliance with PIPEDA, GDPR, and CCPA.`,
        inLanguage: 'en-CA',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="privacy-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <PrivacySchema />

      {/* ==========================================================
          HERO
      ========================================================== */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(211,47,47,0.15),_transparent_50%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #D32F2F08 1px, transparent 1px), linear-gradient(to bottom, #D32F2F08 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#D32F2F] px-4 py-2 rounded-full mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#FFFFFF]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              PIPEDA & Privacy Guarantee 🍁
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Privacy <span className="text-[#D32F2F]">Policy</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            At {BRAND}, we place the highest value on your privacy. Learn how we confidentially collect, protect, and manage your personal data.
          </p>

          <p className="text-xs text-[#FFFFFF]/40 mt-4 font-bold uppercase tracking-wider">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-CA', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* ==========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Commitment Card */}
        <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#D32F2F]" />
              </div>
            </div>
            <div>
              <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#D32F2F] font-black uppercase tracking-wide block mb-1">
                  Our Privacy Promise:
                </span>
                We treat your data with strict confidentiality in full compliance with PIPEDA (Canadian privacy law), GDPR (EU), and CCPA (California). We never store viewing history, and we never sell your data to third parties under any circumstances.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Body */}
        <div className="space-y-10">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              1. Data We Collect
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              When you use {BRAND}'s services, we process only the minimum data necessary to deliver your IPTV subscription:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Email address and/or WhatsApp number (used to send your login credentials and subscription status).',
                'Payment verification (securely and encrypted through licensed payment processors; we do not store credit card or bank details).',
                'IP address and device type (temporary, for server connection, load balancing, and fraud prevention).',
                'Selected subscription duration and number of active streams/screens.',
                'Customer support communication history for fast assistance.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-[#D32F2F] font-black uppercase tracking-wide block mb-0.5">
                      What We Never Collect:
                    </span>
                    We do not record viewing behavior, channel selections, searches, or specific stream logs. Your streaming activity is and remains 100% private.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              2. How We Use Your Data
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              We use the information we collect exclusively for the following purposes:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Instantly activating and configuring your M3U URL and Xtream Codes credentials.',
                'Securely processing transactions and billing.',
                'Providing technical support and setup assistance via WhatsApp and email.',
                'Informing you about important server maintenance or channel updates.',
                'Maintaining server stability and preventing unauthorized misuse.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              3. Data Security
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              {BRAND} employs advanced technical and organizational security measures to protect your data:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                '256-bit SSL/TLS end-to-end encryption for all web and account connections.',
                'Isolated servers and firewalls to prevent data leaks and DDoS attacks.',
                'Strict access controls: only authorized technical staff have access to support data.',
                'No local storage of sensitive banking or credit card details.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f2ebeb] border-4 border-green-600 rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center">
                    <Server className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">
                      No Data Sales:
                    </span>
                    We never sell, rent, or share your personal data with marketing agencies, ad networks, or data brokers — ever.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              4. Cookies & Functional Storage
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              We use only functional and anonymized analytical cookies to optimize website loading speed and remember your language preference. You can disable cookies at any time through your web browser settings.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              5. Your Rights Under PIPEDA, GDPR & CCPA
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Depending on your jurisdiction (Canada, EU, or California), you have the following legal privacy rights:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Right of access: You may request a copy of the data we hold about you.',
                'Right to rectification: The right to correct inaccurate contact details.',
                'Right to erasure (Right to be Forgotten): The right to request permanent deletion of all your account data.',
                'Right to restrict processing and data portability.',
                'Right to opt out of any data "sale" (we never sell data, so this right is inherently respected).',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              6. Third-Party Service Providers
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              We work with a small number of trusted third-party service providers (payment processors such as Interac, Stripe, PayPal, and communications tools such as WhatsApp Business) that strictly comply with data protection standards. These providers process data only as necessary to deliver their services and are prohibited from using your data for any other purpose.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              7. Children's Privacy
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Our services are not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can promptly delete it.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              8. Data Retention
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              We retain your account and contact information only for as long as your subscription remains active, plus a reasonable period thereafter for legal, tax, and accounting purposes. After that period, all personal data is securely deleted or anonymized.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              9. Contact Regarding Privacy
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Do you have questions about our privacy policy, or wish to submit a data removal request? Contact our Data Protection Officer directly:
            </p>
            <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#D32F2F] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#0a0a0c]/60 tracking-widest mb-1">
                Privacy & Data Protection Department
              </p>
              <a
                href={`mailto:privacy@${CONSTANTS.DOMAIN}`}
                className="text-[#0a0a0c] font-black text-xl md:text-2xl hover:text-[#D32F2F] transition-colors break-all"
              >
                privacy@{CONSTANTS.DOMAIN}
              </a>
            </div>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              For general customer support, use our 24/7{' '}
              <Link href="/support" className="text-[#D32F2F] font-black hover:underline">
                WhatsApp support team
              </Link>{' '}
              instead.
            </p>
          </section>

          {/* Section 10 — Updates */}
          <section>
            <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#D32F2F]" />
                </div>
                <div>
                  <p className="text-[#D32F2F] font-black uppercase tracking-wider text-sm mb-1">
                    Policy Updates
                  </p>
                  <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                    We reserve the right to update this Privacy Policy at any time. Material changes will be announced on our homepage or via WhatsApp to active subscribers. Continued use of our services after any changes constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#D32F2F] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Back to homepage
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-[#FFFFFF]/40 text-xs font-bold">
            © {new Date().getFullYear()} {BRAND}. All rights reserved. Made in Canada 🍁
          </p>
        </div>
      </div>
    </div>
  );
}