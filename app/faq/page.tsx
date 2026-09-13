'use client';

import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import {
  HelpCircle,
  Tv,
  Zap,
  CreditCard,
  Smartphone,
  Search,
  ChevronDown,
  LifeBuoy,
  Wrench,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/faq`;

// ---------------------------------------------------------------------------
// SVG Flags — CA, US, UK, AU
// ---------------------------------------------------------------------------
const FlagCA = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-ca"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-ca)">
      <path fill="#FFF" d="M0 0h32v32H0z" />
      <path fill="#D80621" d="M0 0h8v32H0zM24 0h8v32h-8z" />
      <path fill="#D80621" d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z" />
    </g>
  </svg>
);

const FlagUS = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-us"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-us)">
      <path fill="#FFF" d="M0 0h32v32H0z" />
      {[0, 4.57, 9.14, 13.71, 18.29, 22.86, 27.43].map((y, i) => (
        <path key={i} fill="#B22234" d={`M0 ${y}h32v2.29H0z`} />
      ))}
      <path fill="#3C3B6E" d="M0 0h13.7v14.86H0z" />
    </g>
  </svg>
);

const FlagUK = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-uk"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-uk)">
      <path fill="#012169" d="M0 0h32v32H0z" />
      <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
      <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
    </g>
  </svg>
);

const FlagAU = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-au"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-au)">
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
// TYPES + FAQ DATA
// ---------------------------------------------------------------------------
interface FAQItem {
  id: string;
  category: 'general' | 'sports' | 'devices' | 'billing';
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  // GENERAL
  { id: 'gen-1', category: 'general', q: 'What is IPTV and how is it different from traditional cable TV?', a: 'IPTV stands for Internet Protocol Television. Instead of a coax cable, fiber receiver, or satellite dish from traditional providers (like Rogers, Bell, or Shaw), the TV signals are streamed directly over your internet connection. This means no physical cable box is needed — you can watch thousands of channels in Full HD and 4K anywhere in Canada with just an internet connection.' },
  { id: 'gen-2', category: 'general', q: 'How fast will I receive my login credentials after payment?', a: 'Our server infrastructure generates your login codes immediately after a successful payment. Within 2 to 5 minutes, you will receive your personal M3U playlist, EPG XML TV guide, and Xtream Codes API parameters via WhatsApp and email.' },
  { id: 'gen-3', category: 'general', q: 'Can I watch on multiple TVs or screens at the same time?', a: 'By default, each basic account is configured for 1 active connection at a time. You can install the login credentials on multiple devices as long as you do not stream simultaneously. Want multiple household members watching at once? Choose our 2-screen or 3-screen Multi-Room option during checkout.' },
  { id: 'gen-4', category: 'general', q: 'How does the 7-day money-back guarantee work?', a: 'We guarantee 99.9% server stability. If within 7 calendar days of purchase you experience ongoing connection problems that our technical support desk cannot resolve within 24 hours, we will refund the full purchase amount directly via your chosen payment method.' },
  { id: 'gen-5', category: 'general', q: 'Am I locked into a contract or auto-renewal?', a: 'No, absolutely not. We offer prepaid subscriptions for 3, 6, or 12 months. When your period ends, the streaming connection stops automatically. There are never any automatic charges or silent renewals.' },
  { id: 'gen-6', category: 'general', q: 'Can I test a free trial first?', a: 'Yes! We offer serious customers a no-obligation 24-hour trial line. Contact our WhatsApp support team to receive a temporary test code and evaluate the picture quality on your own TV before subscribing.' },

  // SPORTS
  { id: 'sport-1', category: 'sports', q: 'Are Sportsnet, TSN, and CBC included in the package?', a: 'Yes — every channel package includes the complete Canadian sports lineup in smooth 60FPS quality. Watch live NHL hockey (Toronto Maple Leafs, Montreal Canadiens, Vancouver Canucks, Edmonton Oilers), NBA, MLB, CFL, Premier League, PSL cricket, and UFC pay-per-view events.' },
  { id: 'sport-2', category: 'sports', q: 'Do I pay extra for UFC or Boxing PPV events?', a: 'No — all worldwide Pay-Per-View events are included by default. This covers numbered UFC Main Cards, Championship Boxing, WWE events, AEW, and major MMA galas at no additional cost.' },
  { id: 'sport-3', category: 'sports', q: 'Do foreign movies and series have English subtitles?', a: 'Over 95% of our complete VOD catalog — more than 50,000 movies and series from Netflix, HBO Max, Disney+, and cinema releases — includes selectable English subtitles and optional original audio tracks.' },
  { id: 'sport-4', category: 'sports', q: 'Does the EPG TV guide and catch-up feature work properly?', a: 'Yes — our interactive EPG TV guide is synced automatically every 6 hours with current programming. For major Canadian, US, UK, and international channels, a 7-day catch-up / replay feature is available.' },
  { id: 'sport-5', category: 'sports', q: 'Can I hide unnecessary foreign channel lists?', a: 'Absolutely. You can easily hide country groups in your IPTV player (like IBO Player Pro or TiviMate). Our support team can also adjust your account on request so you only receive channels you actually watch.' },
  { id: 'sport-6', category: 'sports', q: 'How stable is the picture quality during popular sports events?', a: 'Our servers use dynamic load balancing through dedicated Canadian and Tier-1 North American data centers. Even during peak moments (Stanley Cup Finals, NHL playoffs, UFC title fights), the bitrate stays stable without frame drops.' },

  // DEVICES
  { id: 'dev-1', category: 'devices', q: 'On which TVs and devices can I install IPTV?', a: 'Our service is universally compatible with Smart TVs (Samsung Tizen, LG webOS, Sony Android TV, Philips), Amazon Fire TV Stick, Google Chromecast with Google TV, Apple TV 4K, Nvidia Shield, MAG boxes, Windows PC, Mac, iPhone, iPad, and Android phones.' },
  { id: 'dev-2', category: 'devices', q: 'Which IPTV apps deliver the best viewing experience?', a: 'For Android TV and Fire TV Stick, we recommend IBO Player Pro for the fastest channel zapping. For Samsung and LG Smart TVs, IBO Player Pro or IPTV Smarters Pro work best. For Apple TV users, IPTVX or GSE Smart IPTV are the top choices.' },
  { id: 'dev-3', category: 'devices', q: 'What minimum internet speed do I need for 4K and 60FPS?', a: 'For Full HD channels we recommend at least 15 to 20 Mbps. For 4K Ultra HD and 60FPS sports streams, 25 to 30 Mbps. A wired Ethernet cable (LAN) or 5GHz Wi-Fi network always provides the most stable experience.' },
  { id: 'dev-4', category: 'devices', q: 'What should I do if a channel buffers or freezes?', a: 'Buffering is caused in 99% of cases by temporary Wi-Fi interference or a full app cache. Restart your router and modem, restart your IPTV app, or switch the stream engine between HLS and TS in the player settings.' },
  { id: 'dev-5', category: 'devices', q: 'Do I need technical skills to complete the installation?', a: 'No — installation takes less than 5 minutes on average. You download a player app from your device store, enter the 3 login lines provided (server URL, username, password), and channels load automatically.' },
  { id: 'dev-6', category: 'devices', q: 'Can I use my account while travelling outside Canada?', a: 'Yes! Our streams are accessible worldwide without geographic restrictions. You can use your IPTV Canada account worry-free in your vacation home in Florida, Europe, or anywhere else.' },

  // BILLING
  { id: 'pay-1', category: 'billing', q: 'What secure payment options do you support?', a: 'You can pay safely via Interac e-Transfer (Canada), Credit Card (Visa / Mastercard), PayPal, and cryptocurrencies (Bitcoin, USDT, Ethereum) through a heavily secured 256-bit SSL connection. All prices are in CAD ($).' },
  { id: 'pay-2', category: 'billing', q: 'Is a VPN required?', a: 'No — a VPN is not required because all our streams run through secure, encrypted connections. If you prefer extra privacy, our streaming servers are 100% compatible with all major VPN providers.' },
  { id: 'pay-3', category: 'billing', q: 'How is my personal data protected (PIPEDA)?', a: 'We respect Canadian privacy law (PIPEDA) and international data protection standards. We never store viewing history or channel logs, never sell data to third parties, and never retain credit card or bank account numbers on our local servers.' },
  { id: 'pay-4', category: 'billing', q: 'What happens if I lose my login credentials?', a: 'No problem. Send a message with your order number or registration email to our WhatsApp customer service team, and our support desk will resend your login details within 5 minutes.' },
  { id: 'pay-5', category: 'billing', q: 'Do I receive an invoice or receipt after payment?', a: 'Yes — immediately after completing the transaction, you will receive an automated digital order confirmation and invoice in your inbox.' },
  { id: 'pay-6', category: 'billing', q: 'Are there hidden fees or admin charges?', a: 'No — the prices shown on our pricing page are fully all-in. You pay once for your chosen period with no unexpected surcharges or connection fees.' },
];

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'sports' | 'devices' | 'billing'>('all');
  const [openAccordion, setOpenAccordion] = useState<string | null>('gen-1');

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  // ------------------- JSON-LD SCHEMAS (inline) -------------------
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // FAQPage
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: faqList.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: PAGE_URL },
        ],
      },
      // WebPage
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `${BRAND} FAQ | Help Center`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-CA',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/img/structer.webp`,
          width: '1200',
          height: '630',
        },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF] overflow-hidden">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        id="faq-page-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ==========================================================
          HERO — modern with gradient glow + grid
      ========================================================== */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D32F2F]/15 blur-[140px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(to right, #D32F2F 1px, transparent 1px), linear-gradient(to bottom, #D32F2F 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#D32F2F] px-4 py-2 rounded-full mb-6 shadow-lg">
            <HelpCircle className="w-4 h-4 text-[#FFFFFF]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              Help Center & Answers 🍁
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none">
            FREQUENTLY ASKED <br className="hidden sm:block" />
            <span className="text-[#D32F2F]">QUESTIONS</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/70 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
            Find instant answers about <span className="text-[#D32F2F]">IPTV Canada</span> subscriptions, 4K streaming, Smart TV setup, and secure CAD payments.
          </p>

          {/* Flag row */}
          <div className="w-full flex items-center justify-center mb-8">
            <div className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-full bg-black/60 border border-[#D32F2F]/40 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagCA /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Canada</span>
              </div>
              <span className="text-white/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagUS /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">USA</span>
              </div>
              <span className="text-white/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagUK /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">UK</span>
              </div>
              <span className="text-white/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagAU /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Australia</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="w-full max-w-xl relative mt-2 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D32F2F] to-[#9A0007] rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative">
              <Search className="w-5 h-5 text-[#D32F2F] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search a question (Sportsnet, IBO Player, Interac, buffering)..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-[#f2ebeb] text-[#0a0a0c] placeholder-[#0a0a0c]/50 font-bold border-2 border-transparent focus:border-[#D32F2F] focus:outline-none shadow-2xl transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          FAQ ACCORDION — LIGHT CARD WITH DARK TEXT
      ========================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Questions (24)', icon: HelpCircle },
            { id: 'general', label: 'General & Service', icon: Tv },
            { id: 'sports', label: 'Sports & Channels', icon: Zap },
            { id: 'devices', label: 'Smart TV & Apps', icon: Smartphone },
            { id: 'billing', label: 'Billing & Security', icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md border-2 ${
                  active
                    ? 'bg-[#D32F2F] text-[#FFFFFF] border-[#D32F2F] scale-105 shadow-lg shadow-[#D32F2F]/30'
                    : 'bg-white/5 text-[#FFFFFF]/70 border-white/10 hover:border-[#D32F2F] hover:text-[#FFFFFF] hover:scale-105'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openAccordion === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`group relative bg-[#f2ebeb] rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
                    isOpen
                      ? 'border-[#D32F2F] shadow-[0_20px_50px_rgba(211,47,47,0.2)]'
                      : 'border-[#D32F2F]/20 hover:border-[#D32F2F] hover:shadow-[0_15px_35px_rgba(211,47,47,0.12)]'
                  }`}
                >
                  {/* Left accent bar when open */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${
                      isOpen ? 'bg-[#D32F2F]' : 'bg-transparent'
                    }`}
                  />

                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 pr-2 flex-1">
                      <span
                        className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-[#D32F2F] text-[#FFFFFF]' : 'bg-[#D32F2F]/10 text-[#D32F2F]'
                        }`}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </span>
                      <span className="font-black text-[#0a0a0c] text-base sm:text-lg uppercase tracking-tight leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#D32F2F] text-[#FFFFFF]'
                          : 'bg-[#0a0a0c]/5 text-[#0a0a0c] group-hover:bg-[#D32F2F]/10 group-hover:text-[#D32F2F]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Answer — dark text on light card */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#0a0a0c]/85 text-sm sm:text-base font-medium leading-relaxed px-5 sm:px-6 pl-15 sm:pl-16 border-l-4 border-[#D32F2F] ml-4 sm:ml-5 py-1">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-10 text-center shadow-xl">
            <AlertCircle className="w-10 h-10 text-[#D32F2F] mx-auto mb-3" />
            <p className="font-black text-lg uppercase tracking-tight mb-1 text-[#0a0a0c]">
              No results found
            </p>
            <p className="text-sm font-bold text-[#0a0a0c]/70 mb-6">
              Try a different search term or contact our WhatsApp help desk directly.
            </p>
            <a
              href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi ${BRAND}, I couldn't find an answer to my question.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#9A0007] transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
          </div>
        )}
      </section>

      {/* ==========================================================
          RECOMMENDED DEVICES
      ========================================================== */}
      <section className="py-16 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/30 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#D32F2F]" />
              <span className="text-[#D32F2F] font-black text-xs uppercase tracking-widest">
                Recommended Setup
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
              Best <span className="text-[#D32F2F]">Devices & Apps</span>
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/70 font-bold max-w-xl mx-auto">
              The best IPTV players and minimum internet speeds for a buffer-free viewing experience in Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: 'Android & Firestick',
                desc: 'Highest stability and fastest channel zapping.',
                apps: ['IBO Player Pro (Recommended)', 'TiviMate IPTV Player Pro', 'IPTV Smarters Pro'],
                speed: 'Min. Speed: 20 Mbps',
              },
              {
                icon: Tv,
                title: 'Samsung & LG Smart TV',
                desc: 'Stream directly without an external box.',
                apps: ['IBO Player Pro (webOS / Tizen)', 'Smart IPTV (SIPTV)', 'IPTV Smarters Pro'],
                speed: 'Min. Speed: 25 Mbps',
              },
              {
                icon: Cpu,
                title: 'Apple TV & iOS',
                desc: 'Sharp 4K interface built for Apple devices.',
                apps: ['IPTVX (tvOS)', 'GSE Smart IPTV', 'IPTV Smarters Player Lite'],
                speed: 'Min. Speed: 25 Mbps',
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group bg-[#f2ebeb] border-2 border-[#D32F2F]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#D32F2F] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(211,47,47,0.2)] transition-all duration-500"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mb-4 group-hover:bg-[#D32F2F] transition-colors">
                      <Icon className="w-6 h-6 text-[#D32F2F] group-hover:text-[#FFFFFF] transition-colors" />
                    </div>
                    <h3 className="text-lg font-black text-[#0a0a0c] uppercase mb-1">{card.title}</h3>
                    <p className="text-xs text-[#0a0a0c]/60 font-bold mb-4">{card.desc}</p>
                    <ul className="space-y-2 text-xs font-bold text-[#0a0a0c]/80">
                      {card.apps.map((app) => (
                        <li key={app} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#0a0a0c]/10 text-[11px] font-black text-[#D32F2F]">
                    {card.speed}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================
          TROUBLESHOOTING
      ========================================================== */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-8 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#D32F2F] flex items-center justify-center">
              <Wrench className="w-6 h-6 text-[#FFFFFF]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight">
              Quick Self-Help for Small Glitches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: 1, title: 'Restart Your Router', desc: 'Power off your modem and TV for 30 seconds to clear the DNS cache and network congestion.' },
              { n: 2, title: 'Refresh the Playlist', desc: 'In your IPTV app, choose "Update Playlist" or "Reload Portal" to load new channels and EPG.' },
              { n: 3, title: 'Switch Stream Format', desc: 'In your player settings, switch the stream type from TS to HLS for smoother data delivery.' },
            ].map((step) => (
              <div key={step.n} className="p-5 bg-white rounded-2xl border border-[#0a0a0c]/10 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-sm flex items-center justify-center mb-3">
                  {step.n}
                </span>
                <h3 className="font-black text-sm uppercase mb-1 text-[#0a0a0c]">{step.title}</h3>
                <p className="text-xs font-bold text-[#0a0a0c]/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share */}
      <div className="w-full flex justify-center items-center my-10">
        <ShareButtons />
      </div>

      {/* ==========================================================
          SUPPORT CTA
      ========================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#D32F2F]/40 bg-gradient-to-br from-[#D32F2F] via-[#9A0007] to-[#D32F2F] p-8 md:p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#FFFFFF] text-[#D32F2F] px-4 py-2 rounded-full mb-4 shadow-md">
              <LifeBuoy className="w-4 h-4" />
              <span className="font-black text-xs uppercase tracking-widest">Personal Help</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
              Still Have a Specific Question?
            </h2>

            <p className="text-[#FFFFFF]/90 font-bold text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Our Canadian streaming experts are available 24/7 on WhatsApp for installation help, channel questions, and free 24-hour trial lines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi ${BRAND}, I have a question about the IPTV service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#D32F2F] transition-all hover:scale-105 shadow-xl border-2 border-[#FFFFFF]"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Support
              </a>
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFFFF] text-[#D32F2F] font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#D32F2F] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Back to homepage
          </Link>
        </div>
      </section>
    </div>
  );
}