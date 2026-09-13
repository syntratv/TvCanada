'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PricingSection from '../components/PricingSection';
import ShareButtons from '../components/ShareButtons';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  ShieldCheck,
  Zap,
  ChevronDown,
  CreditCard,
  Award,
  Globe,
  Server,
  Trophy,
  Tv,
  Film,
  MonitorPlay,
  Wifi,
  Calendar,
  Lock,
  ThumbsUp,
  LifeBuoy,
  Sparkles,
  Headphones,
  ShoppingCart,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// SVG Flag Badges — CA, US, UK, AU (Canada First 🍁)
// ---------------------------------------------------------------------------
const FlagCA = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-ca"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-ca)">
      <path fill="#FFF" d="M0 0h32v32H0z" />
      <path fill="#D80621" d="M0 0h8v32H0zM24 0h8v32h-8z" />
      <path fill="#D80621" d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z" />
    </g>
  </svg>
);

const FlagUS = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-us"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-us)">
      <path fill="#FFF" d="M0 0h32v32H0z" />
      {[0, 4.57, 9.14, 13.71, 18.29, 22.86, 27.43].map((y, i) => (
        <path key={i} fill="#B22234" d={`M0 ${y}h32v2.29H0z`} />
      ))}
      <path fill="#3C3B6E" d="M0 0h13.7v14.86H0z" />
    </g>
  </svg>
);

const FlagUK = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-uk"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-uk)">
      <path fill="#012169" d="M0 0h32v32H0z" />
      <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
      <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
    </g>
  </svg>
);

const FlagAU = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="p-fl-au"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-au)">
      <path fill="#012169" d="M0 0h32v32H0z" />
      <path stroke="#FFF" strokeWidth="4" d="M0 0l16 16M16 0L0 16" />
      <path stroke="#C8102E" strokeWidth="2" d="M0 0l16 16M16 0L0 16" />
      <path stroke="#FFF" strokeWidth="6" d="M8 0v16M0 8h16" />
      <path stroke="#C8102E" strokeWidth="3" d="M8 0v16M0 8h16" />
      <circle cx="24" cy="8" r="1.5" fill="#FFF" />
      <circle cx="24" cy="24" r="1.5" fill="#FFF" />
      <circle cx="20" cy="18" r="1.5" fill="#FFF" />
      <circle cx="28" cy="18" r="1.5" fill="#FFF" />
      <circle cx="16" cy="26" r="1.5" fill="#FFF" />
    </g>
  </svg>
);

// ---------------------------------------------------------------------------
// FAQ Item — Accordion (Canadian red/obsidian theme)
// ---------------------------------------------------------------------------
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#f2ebeb] border-4 ${
        isOpen ? 'border-[#D32F2F]' : 'border-white/5'
      } rounded-2xl p-6 hover:border-[#D32F2F]/60 transition-all duration-300 group`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#D32F2F]' : 'text-[#0a0a0c] group-hover:text-[#D32F2F]'
          } flex items-center gap-3`}
        >
          <span
            className={`${
              isOpen ? 'text-[#D32F2F]' : 'text-[#0a0a0c]/30'
            } font-black text-2xl`}
          >
            Q.
          </span>
          {question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 text-[#D32F2F]'
              : 'text-[#0a0a0c]/30 group-hover:text-[#D32F2F]/50'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#0a0a0c]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#D32F2F] ml-2 py-2">
          {answer}
        </p>
      </div>
    </button>
  );
}

// ---------------------------------------------------------------------------
// MAIN PRICING PAGE
// ---------------------------------------------------------------------------
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] flex flex-col">

      {/* ==========================================================
          HERO SECTION — Fully Centered
      ========================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt="best iptv canada subscription plans pricing page"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.2]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#0a0a0c]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/0" />
        </div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #D32F2F 1px, transparent 1px),
              linear-gradient(to bottom, #D32F2F 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D32F2F]/10 blur-[150px] rounded-full pointer-events-none z-0" />

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#D32F2F] px-4 py-2 rounded-full mb-6 shadow-md">
                <Sparkles className="w-4 h-4 text-[#f2ebeb]" />
                <span className="text-[#f2ebeb] font-black text-xs uppercase tracking-widest">
                  Best Value IPTV Canada Plans 2026 🍁
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#f2ebeb] tracking-tighter uppercase mb-6 leading-none text-center">
                IPTV CANADA PLANS & <br />
                <span className="text-[#D32F2F]">BEST PRICING</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-lg md:text-xl text-[#f2ebeb]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Enjoy live TV, movies, and sports anywhere with our fast, reliable 4K & 60FPS Canadian IPTV streaming service.
              </p>
            </FadeInItem>

            {/* ONE-LINE FLAGS ROW — Canada First */}
            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
                <div className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-full bg-black/60 border border-[#D32F2F]/40 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagCA />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#f2ebeb]">Canada</span>
                  </div>

                  <span className="text-white/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagUS />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#f2ebeb]">USA</span>
                  </div>

                  <span className="text-white/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagUK />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#f2ebeb]">UK</span>
                  </div>

                  <span className="text-white/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagAU />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#f2ebeb]">Australia</span>
                  </div>
                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 text-[#f2ebeb]/50 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#D32F2F]" /> No Contract
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#D32F2F]" /> Instant Activation
                </span>
                <span className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-[#D32F2F]" /> 7-Day Guarantee
                </span>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          MAIN PRICING CARDS
      ========================================================== */}
      <div className="w-full relative z-20 bg-[#0a0a0c] py-12" id="pricing-section">
        <PricingSection />
      </div>

      {/* ==========================================================
          FEATURES GRID — Everything Included
      ========================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] w-full">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-4 uppercase tracking-tighter leading-none">
            Everything Included In <span className="text-[#D32F2F]">Every Plan</span>
          </h2>
          <p className="text-[#f2ebeb]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
            All {CONSTANTS.BRAND_NAME} subscriptions come with these premium features and specifications as standard.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Tv,
              title: '20,000+ Live Channels',
              desc: `Sports, news, entertainment, and local Canadian broadcasters from over 50 countries with ${CONSTANTS.BRAND_NAME}.`,
            },
            {
              icon: Film,
              title: '60,000+ VOD Library',
              desc: `The latest movies, series, and documentaries updated automatically every day on ${CONSTANTS.BRAND_NAME}.`,
            },
            {
              icon: MonitorPlay,
              title: '4K & 60FPS Quality',
              desc: `Crystal-clear streaming on compatible channels and devices without buffering through ${CONSTANTS.BRAND_NAME}.`,
            },
            {
              icon: Wifi,
              title: 'Anti-Freeze Technology',
              desc: 'Buffer-free viewing thanks to advanced stream optimization and dedicated Canadian load balancers.',
            },
            {
              icon: Calendar,
              title: 'Full EPG TV Guide',
              desc: '7-day interactive electronic program guide for all Canadian, US, and international channels.',
            },
            {
              icon: Trophy,
              title: 'PPV Events Included',
              desc: 'All major UFC, boxing, and WWE Pay-Per-View events at no extra cost with your Canadian subscription.',
            },
            {
              icon: Globe,
              title: 'Canada-Wide Coverage',
              desc: 'Dedicated servers in Canadian data centers for minimal latency on live sports broadcasts.',
            },
            {
              icon: Server,
              title: '99.9% Server Uptime',
              desc: 'Enterprise infrastructure with redundant backup servers for guaranteed streaming stability.',
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <FadeInItem
                key={idx}
                className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-2xl p-6 hover:border-[#D32F2F]/60 shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mb-4 group-hover:bg-[#D32F2F]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#D32F2F]" />
                </div>
                <h3 className="font-black text-[#0a0a0c] uppercase tracking-wide text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#0a0a0c]/70 text-sm font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* ==========================================================
          COMPARISON TABLE — Plans Side-by-Side
      ========================================================== */}
      <section className="py-24 bg-[#0a0a0c] border-y border-white/5 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-4 uppercase tracking-tighter">
              Compare <span className="text-[#D32F2F]">{CONSTANTS.BRAND_NAME} Plans</span>
            </h2>
            <p className="text-[#f2ebeb]/60 text-base font-bold uppercase tracking-widest mt-2">
              Find the perfect subscription that matches your streaming needs
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-4 md:p-6 shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-black/10">
                  <th className="text-left p-4 text-[#0a0a0c] font-black uppercase tracking-wider text-base md:text-lg">
                    Specification
                  </th>
                  <th className="text-center p-4 text-[#D32F2F] font-black uppercase tracking-wider text-base md:text-lg">
                    3 Months
                  </th>
                  <th className="text-center p-4 text-[#D32F2F] font-black uppercase tracking-wider text-base md:text-lg bg-black/5 rounded-t-xl">
                    12 Months (VIP)
                  </th>
                  <th className="text-center p-4 text-[#D32F2F] font-black uppercase tracking-wider text-base md:text-lg">
                    6 Months
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { feature: 'Live Channels', basic: '20,000+', pro: '20,000+ VIP', premium: '20,000+' },
                  { feature: 'VOD Movies & Series', basic: '60,000+', pro: '60,000+ (Daily Updates)', premium: '60,000+' },
                  { feature: '4K & 60FPS Streaming', basic: 'Yes', pro: 'Yes (Ultra Bitrate)', premium: 'Yes' },
                  { feature: 'Live Sports & PPV', basic: 'Included', pro: 'All PPV + VIP Feeds', premium: 'Included' },
                  { feature: 'EPG & Catch-Up', basic: 'Standard EPG', pro: '7-Day Catch-Up + EPG', premium: 'Full EPG' },
                  { feature: 'Anti-Freeze Technology', basic: 'Standard', pro: 'VIP Priority Routing', premium: 'Advanced' },
                  { feature: 'VPN Compatible', basic: 'Yes (Not Required)', pro: '100% Compatible', premium: 'Yes' },
                  { feature: 'Number of Screens', basic: '1 or 2 Screens', pro: '1, 2, or 3 Screens', premium: '1 or 2 Screens' },
                  { feature: 'Customer Support', basic: 'WhatsApp Support', pro: '24/7 VIP Priority', premium: 'Priority Support' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-black/[0.02] transition-colors">
                    <td className="p-4 text-[#0a0a0c] font-black uppercase text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-[#0a0a0c]/70 font-bold text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#D32F2F] font-black text-sm bg-black/[0.02]">{row.pro}</td>
                    <td className="p-4 text-center text-[#0a0a0c]/70 font-bold text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TRUST BADGES — Why Choose Us
      ========================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] w-full">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-4 uppercase tracking-tighter">
            Why Choose <span className="text-[#D32F2F]">{CONSTANTS.BRAND_NAME}</span>
          </h2>
          <p className="text-[#f2ebeb]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
            Trusted by over 25,000 satisfied Canadian customers from coast to coast.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-[#D32F2F]" />
            </div>
            <h4 className="text-xl font-black text-[#0a0a0c] mb-2 uppercase tracking-wide">
              Secure Payments
            </h4>
            <p className="text-[#0a0a0c]/70 text-sm font-medium">
              Encrypted transactions via Interac e-Transfer, Credit Card, PayPal & Crypto with 256-bit SSL protection.
            </p>
          </FadeInItem>

          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-[#D32F2F]" />
            </div>
            <h4 className="text-xl font-black text-[#0a0a0c] mb-2 uppercase tracking-wide">
              Instant Activation
            </h4>
            <p className="text-[#0a0a0c]/70 text-sm font-medium">
              Receive your login credentials and setup instructions within 5 minutes via email and WhatsApp.
            </p>
          </FadeInItem>

          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8 text-[#D32F2F]" />
            </div>
            <h4 className="text-xl font-black text-[#0a0a0c] mb-2 uppercase tracking-wide">
              Money-Back Guarantee
            </h4>
            <p className="text-[#0a0a0c]/70 text-sm font-medium">
              7-day money-back guarantee on all active Canadian streaming subscriptions — risk-free.
            </p>
          </FadeInItem>

          <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mb-4">
              <Headphones className="w-8 h-8 text-[#D32F2F]" />
            </div>
            <h4 className="text-xl font-black text-[#0a0a0c] mb-2 uppercase tracking-wide">
              24/7 Canadian Support
            </h4>
            <p className="text-[#0a0a0c]/70 text-sm font-medium">
              Our knowledgeable Canadian support team is always ready to assist you via WhatsApp.
            </p>
          </FadeInItem>
        </FadeInStagger>
      </section>

      {/* ==========================================================
          MONEY-BACK GUARANTEE BANNER
      ========================================================== */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] w-full">
        <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-8 md:p-10 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#D32F2F] px-4 py-2 rounded-full mb-4 shadow-md">
            <Award className="w-4 h-4 text-[#f2ebeb]" />
            <span className="text-[#f2ebeb] font-black text-xs uppercase tracking-widest">
              100% Risk-Free 🍁
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight mb-3">
            7-Day Quality Guarantee
          </h3>
          <p className="text-[#0a0a0c]/80 max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed">
            Try {CONSTANTS.BRAND_NAME} for 7 days risk-free. If you experience ongoing buffering issues we cannot resolve, you'll receive a full refund immediately.
          </p>
        </div>
      </section>

      {/* ==========================================================
          FAQ — Accordion
      ========================================================== */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 bg-[#0a0a0c] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#D32F2F]/5 blur-[120px] rounded-full pointer-events-none" />

        <FadeIn className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-6 uppercase tracking-tighter">
            Frequently Asked <span className="text-[#D32F2F]">Questions</span>
          </h2>
          <p className="text-[#f2ebeb]/70 font-bold text-lg">
            Everything you need to know about our Canadian IPTV subscriptions, pricing, and features.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-4 relative z-10">
          <FAQItem
            question={`Which payment methods does ${CONSTANTS.BRAND_NAME} accept?`}
            answer={`${CONSTANTS.BRAND_NAME} accepts Interac e-Transfer, all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrencies (Bitcoin, Ethereum, USDT). All payments are processed securely via encrypted 256-bit SSL connections.`}
          />
          <FAQItem
            question="Can I upgrade or modify my subscription later?"
            answer={`Yes, you can upgrade your streaming subscription at any time to multiple screens or a longer period. Simply contact our WhatsApp help desk and we'll adjust your account instantly.`}
          />
          <FAQItem
            question="Am I tied to a contract or automatic renewal?"
            answer={`No, absolutely not. There are no long-term contracts or automatic renewals. All plans are prepaid one-time payments and stop automatically after your chosen period ends.`}
          />
          <FAQItem
            question="What happens when my subscription expires?"
            answer={`We'll send you a reminder before your subscription expires. You can then easily renew it yourself. If you don't renew, the service stops automatically with no further obligation.`}
          />
          <FAQItem
            question="Do you offer a money-back guarantee?"
            answer={`Yes, we offer a full 7-day money-back guarantee on all plans. If you experience ongoing server issues that we cannot resolve, we'll refund your full purchase amount immediately.`}
          />
          <FAQItem
            question="Can I use the service on multiple devices simultaneously?"
            answer={`Yes, depending on your chosen plan. Our standard subscription is for 1 simultaneous stream, but you can select a 2- or 3-screen multi-room option during checkout to watch in multiple rooms at once.`}
          />
          <FAQItem
            question="Are there discounts for longer subscriptions?"
            answer={`Yes, our 12-month plans offer the highest savings (up to 50% off compared to monthly contracts) including VIP server routing and priority support across Canada.`}
          />
        </FadeInStagger>
      </div>

      {/* ==========================================================
          SHARE BUTTONS
      ========================================================== */}
      <div className="w-full flex justify-center items-center mb-16">
        <ShareButtons />
      </div>

      {/* ==========================================================
          BOTTOM CTA
      ========================================================== */}
      <section className="py-20 bg-[#0a0a0c] border-t border-white/5 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-[#f2ebeb] mb-4 uppercase tracking-tight">
              Ready to Start Streaming?
            </h2>
            <p className="text-[#f2ebeb]/70 font-bold text-lg mb-8 max-w-2xl mx-auto">
              Join over 25,000 satisfied Canadian customers and enjoy premium digital television today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="#pricing-section"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#D32F2F] text-[#f2ebeb] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shadow-[0_0_30px_rgba(211,47,47,0.3)]"
              >
                Choose Your Plan
              </Link>
              <Link
                href="/setup"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#f2ebeb] text-[#D32F2F] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 border-2 border-[#D32F2F]"
              >
                Setup Guide
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-[#f2ebeb]/40 text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#D32F2F]" /> Instant Activation
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#D32F2F]" /> Secure Checkout
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#D32F2F]" /> Interac, Card & Crypto
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}