import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  RefreshCw,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Clock,
  Mail,
  MessageSquare,
  Wrench,
  Wifi,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/refund-policy`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Refund & Guarantee Policy',
  `Read the official terms of the ${BRAND} 7-day quality guarantee. Transparent technical guidelines and support procedures for Canadian customers.`,
  '/refund-policy'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const RefundSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Refund & Guarantee Policy | ${BRAND}`,
        description: `${BRAND} refund and 7-day quality guarantee policy — transparent technical guidelines and support procedures.`,
        inLanguage: 'en-CA',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Refund Policy', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `How does the ${BRAND} 7-day money-back guarantee work?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `If you experience a verified technical defect in our server infrastructure within 7 calendar days of purchase, and our 24/7 support team cannot resolve it within 24 hours, we will refund your full purchase amount.`,
            },
          },
          {
            '@type': 'Question',
            name: 'What situations are NOT covered by the refund policy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Refunds are not available for personal preference changes, local Wi-Fi or internet issues under 25 Mbps, device incompatibility with outdated firmware, individual channel changes, or Fair Use policy violations (such as streaming on more devices than purchased).',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does a refund take to process?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'After technical authorization is confirmed, refunds are processed within 1 to 3 business days back to the original payment method (Interac e-Transfer, Credit Card, PayPal, or Crypto).',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="refund-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function RefundPolicyPage() {
  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <RefundSchema />

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
              Verified Server Guarantee 🍁
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Refund & <span className="text-[#D32F2F]">Guarantee</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            {BRAND} delivers unmatched stability. We offer a transparent 7-day technical quality guarantee on all active streaming connections.
          </p>

          <p className="text-xs text-[#FFFFFF]/40 mt-4 font-bold uppercase tracking-wider">
            Last reviewed:{' '}
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

        {/* Trust Banner */}
        <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/15 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-[#D32F2F]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#0a0a0c] uppercase tracking-tight mb-1">
                Our 7-Day Quality Guarantee
              </h2>
              <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                We deliver only high-quality 4K and Full HD streams. To prevent misuse of digital licenses and protect our server integrity, this guarantee takes effect as soon as there is a verified technical defect that our support team cannot resolve within the stated repair window.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              1. Scope of the Technical Guarantee
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              A refund is granted only if the delivered service is structurally and demonstrably non-functional due to causes within our server infrastructure. The following conditions apply cumulatively:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'The report is filed in writing within exactly 7 calendar days of the initial purchase date.',
                'There is sustained, server-related total failure of the channel infrastructure.',
                'Our 24/7 technical support desk has had at least 24 hours to resolve the reported connection issue or set up alternate routing.',
                'The user has completed standard diagnostic verification steps (router restart, app cache clear, DNS check).',
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

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              2. Exceptions & Non-Refundable Situations
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Because digital M3U playlists and Xtream access codes are permanently created on our load balancers immediately after purchase, <strong className="text-[#FFFFFF]">no refund</strong> can be claimed in the following situations:
            </p>

            <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                </div>
                <div>
                  <ul className="space-y-2.5 text-[#0a0a0c] text-xs sm:text-sm font-bold leading-relaxed">
                    <li>
                      • <strong>Personal preference:</strong> Requests based on taste, interface
                      experience, or no longer needing the subscription.
                    </li>
                    <li>
                      • <strong>Local network limitations:</strong> Buffering caused by an unstable
                      Wi-Fi connection, local network congestion, or internet speeds under 25 Mbps.
                    </li>
                    <li>
                      • <strong>Device incompatibility:</strong> Issues caused by outdated Smart TV
                      firmware, unsupported third-party IPTV apps, or incorrect local configuration.
                    </li>
                    <li>
                      • <strong>Channel changes:</strong> Temporary restructuring or changes to
                      individual channels within the tens of thousands of available channels.
                    </li>
                    <li>
                      • <strong>Fair Use violations:</strong> Accounts automatically blocked for
                      illegally streaming on more screens than purchased.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              3. Mandatory Diagnostic & Repair Procedure
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Before a refund can be authorized, our support team completes the following three-step protocol:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#D32F2F] transition-colors">
                <div>
                  <Wrench className="w-6 h-6 text-[#D32F2F] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">1. Line Verification</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    We verify your M3U token on our active server ports.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#D32F2F] transition-colors">
                <div>
                  <Wifi className="w-6 h-6 text-[#D32F2F] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">2. Server Reset</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    We reroute your streaming profile to an alternate Canadian node.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#D32F2F] transition-colors">
                <div>
                  <FileCheck className="w-6 h-6 text-[#D32F2F] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">3. Release</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    If the outage remains unresolvable, immediate refund approval follows.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              4. Request Procedure & Processing Time
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-6">
              If your report meets the technical guarantee conditions, submit your request via one of the channels below, including your order number and a short description of the fault:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mb-3">
                    <MessageSquare className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0a0a0c] uppercase tracking-tight mb-1">
                    WhatsApp Support (Fastest)
                  </h3>
                  <p className="text-[#0a0a0c]/80 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Send your order details and a screenshot of the error message for real-time diagnostics.
                  </p>
                </div>
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent(
                    'Hi, I am experiencing a persistent technical issue with my IPTV account and would like to start the diagnostic procedure.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#9A0007] transition-all"
                >
                  Start Diagnosis on WhatsApp →
                </a>
              </div>

              <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 text-[#D32F2F]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0a0a0c] uppercase tracking-tight mb-1">
                    Written by Email
                  </h3>
                  <p className="text-[#0a0a0c]/80 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Send your transaction receipt and error code to support@{CONSTANTS.DOMAIN}.
                  </p>
                </div>
                <a
                  href={`mailto:support@${CONSTANTS.DOMAIN}?subject=Technical%20Support%20Request`}
                  className="w-full text-center py-3 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-xs uppercase tracking-wider border-2 border-[#D32F2F] hover:bg-[#D32F2F] transition-all"
                >
                  Email Support →
                </a>
              </div>
            </div>

            <p className="text-[#FFFFFF]/60 text-xs leading-relaxed font-medium">
              After official technical authorization, the amount is refunded within 1 to 3 business days via the original payment method (Interac e-Transfer, Credit Card, PayPal, or Crypto).
            </p>
          </section>
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight mb-2">
              Need help with your setup?
            </h3>
            <p className="text-[#D32F2F] font-bold text-sm md:text-base max-w-md mx-auto mb-6">
              In 99% of cases, our streaming experts resolve buffering issues within 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="/support"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#9A0007] transition-all shadow-md"
              >
                Get Instant Help
              </Link>
              <Link
                href="/setup"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-xs uppercase tracking-widest border-2 border-[#D32F2F] hover:bg-[#D32F2F] transition-all"
              >
                Setup Guide
              </Link>
            </div>
          </div>
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