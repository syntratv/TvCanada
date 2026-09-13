import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  ShieldCheck,
  Mail,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Copyright,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/dmca`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'DMCA & Copyright Policy',
  `Read the official DMCA and copyright policy of ${BRAND}. Information on copyright protection and the procedure for filing takedown requests.`,
  '/dmca'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const DMCASchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `DMCA Policy | ${BRAND}`,
        description: `${BRAND} respects the intellectual property rights of third parties and strictly complies with the Digital Millennium Copyright Act (DMCA).`,
        inLanguage: 'en-CA',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'DMCA Policy', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="dmca-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function DMCAPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <DMCASchema />

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
              Copyright & Intellectual Property 🍁
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            DMCA <span className="text-[#D32F2F]">Policy</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            {BRAND} respects the intellectual property rights of third parties and strictly complies with the Digital Millennium Copyright Act (DMCA).
          </p>
        </div>
      </section>

      {/* ==========================================================
          PROMO BANNER
      ========================================================== */}
      <section className="w-full bg-gradient-to-r from-[#D32F2F] via-[#9A0007] to-[#D32F2F] py-10 px-4 sm:px-6 border-y-4 border-[#f2ebeb]/20 shadow-[0_0_50px_rgba(211,47,47,0.4)] relative z-20 overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#f2ebeb] text-[#D32F2F] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
            OFFICIAL NOTICE
          </div>
          <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            PREMIUM STREAMING WITH INTEGRITY
          </h2>
          <p className="text-[#FFFFFF]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Have questions about our services, subscriptions, or support? Our team is happy to assist you.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#f2ebeb] text-[#0a0a0c] hover:bg-[#0a0a0c] hover:text-[#FFFFFF] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <span>View Plans</span>
              <ArrowRight className="w-5 h-5 text-[#D32F2F]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Important Notice */}
        <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-[#D32F2F]" />
              </div>
            </div>
            <div>
              <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#D32F2F] font-black uppercase tracking-wide block mb-1">
                  Important Notice:
                </span>
                {BRAND} does not host, upload, or manage any media files on its own servers. Our software exclusively indexes and organizes publicly available streams and playlists on the internet.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Body */}
        <div className="space-y-10">

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              1. Copyright Compliance
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              {BRAND} ("we," "us," or "our") is committed to respecting the rights of copyright holders worldwide and strictly complying with the provisions of the Digital Millennium Copyright Act (DMCA) as well as applicable Canadian and international intellectual property laws. We expect all of our users and partners to adhere to the same standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              2. What We Do Not Host
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              It is essential to emphasize that <strong className="text-[#FFFFFF]">{BRAND}</strong> does not broadcast, store, or host any streaming media, video files, or TV broadcasts on its own hardware.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Our service functions strictly as a technical interface and directory that indexes publicly available stream links. We have no ownership of, control over, or editorial influence on the content of streams published by external providers on the internet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              3. Notice of Infringement (Takedown Notice)
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              If you are the legitimate owner of a copyrighted work, or are authorized to act on behalf of an owner, and you believe that content within our directory infringes on your rights, you may file an official takedown request (DMCA Notice). Upon receipt of a valid notification, we will deactivate the affected stream references as promptly as possible — typically within 48 hours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              4. Procedure for Filing a Request
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-6">
              To file a formal DMCA request with {BRAND}, please contact us through our official copyright email address:
            </p>

            {/* Email card */}
            <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#D32F2F] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#0a0a0c]/60 tracking-widest mb-1">
                Copyright Department
              </p>
              <a
                href={`mailto:dmca@${CONSTANTS.DOMAIN}`}
                className="text-[#0a0a0c] font-black text-xl md:text-2xl hover:text-[#D32F2F] transition-colors break-all"
              >
                dmca@{CONSTANTS.DOMAIN}
              </a>
            </div>

            <p className="text-[#FFFFFF]/80 text-base font-bold mb-4">
              Your notice must include the following information:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                'A physical or electronic signature of the copyright owner or their authorized representative.',
                'A clear description of the copyrighted work that is alleged to have been infringed.',
                'The exact links or stream references that should be removed.',
                'Your full contact information: legal name, address, telephone number, and email address.',
                'A good-faith statement that the disputed use is not authorized by the copyright owner, its agent, or the law.',
                'A statement that the information provided is accurate, made under penalty of perjury.',
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

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              5. Repeat Infringers
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              {BRAND} maintains a strict policy under which the accounts and access of resellers or users who repeatedly infringe upon intellectual property rights will be immediately and permanently terminated without notice or refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              6. Counter-Notification
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              If you believe that your content was removed in error or misidentification, you may submit a counter-notification to our copyright department at <a href={`mailto:dmca@${CONSTANTS.DOMAIN}`} className="text-[#D32F2F] font-black hover:underline">dmca@{CONSTANTS.DOMAIN}</a>. Your counter-notice must comply with the requirements of 17 U.S.C. § 512(g)(3) and applicable Canadian law, and must include your consent to the jurisdiction of the appropriate court.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#D32F2F] rounded-full inline-block" />
              7. Contact & Legal Notices
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              For all copyright and DMCA-related matters, please contact us at <a href={`mailto:dmca@${CONSTANTS.DOMAIN}`} className="text-[#D32F2F] font-black hover:underline">dmca@{CONSTANTS.DOMAIN}</a>. For general customer support, use our 24/7 <Link href="/support" className="text-[#D32F2F] font-black hover:underline">WhatsApp support team</Link>.
            </p>
          </section>

          <section>
            <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center flex-shrink-0">
                  <Copyright className="w-6 h-6 text-[#D32F2F]" />
                </div>
                <div>
                  <p className="text-[#D32F2F] font-black uppercase tracking-wider text-sm mb-1">
                    Last Updated
                  </p>
                  <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                    This DMCA Policy was last updated on January 1, {new Date().getFullYear()}. We reserve the right to modify this policy at any time. Continued use of our services after changes constitutes acceptance of the updated policy.
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