'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Globe,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  Package,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const YEAR = new Date().getFullYear();

// ===========================================================================
// CURRENCY SYSTEM
// Base prices are in USD. Rates convert USD to other currencies.
// ===========================================================================
type CurrencyCode = 'CAD' | 'USD' | 'EUR';

const CURRENCIES: Record<
  CurrencyCode,
  { code: CurrencyCode; label: string; symbol: string; usdRate: number }
> = {
  CAD: { code: 'CAD', label: 'CAD', symbol: 'CA$', usdRate: 1.36 },
  USD: { code: 'USD', label: 'USD', symbol: 'US$', usdRate: 1 },
  EUR: { code: 'EUR', label: 'EUR', symbol: '€', usdRate: 0.92 },
};

const CURRENCY_ORDER: CurrencyCode[] = ['CAD', 'USD', 'EUR'];

const formatPrice = (usdAmount: number, currency: CurrencyCode): string => {
  const { symbol, usdRate } = CURRENCIES[currency];
  const converted = Math.round(usdAmount * usdRate);
  return `${symbol}${converted.toLocaleString('en-CA')}`;
};

// ===========================================================================
// PRICING TIERS
// Wholesale = USD. Retail range = USD $50-$90 per year, average $70.
// ===========================================================================
interface PricingTier {
  name: string;
  tag: string;
  years: number;
  credits: number;
  wholesaleUSD: number;
  perYearUSD: number;
  retailMinUSD: number;
  retailMaxUSD: number;
  highlighted: boolean;
  features: string[];
  waMessage: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    tag: '10 Years',
    years: 10,
    credits: 10,
    wholesaleUSD: 300,
    perYearUSD: 30,
    retailMinUSD: 50,
    retailMaxUSD: 90,
    highlighted: false,
    features: [
      '10 reseller credits (10 years)',
      'Full reseller panel access',
      'Instant per-customer activation',
      '24/7 WhatsApp support',
      'Credits never expire',
      'Free trial line generator',
      'Payment integration ready',
    ],
    waMessage: 'Hi, I want the Starter Reseller package (10 years / US$300).',
  },
  {
    name: 'Growth',
    tag: '20 Years',
    years: 20,
    credits: 20,
    wholesaleUSD: 550,
    perYearUSD: 27.5,
    retailMinUSD: 50,
    retailMaxUSD: 90,
    highlighted: true,
    features: [
      '20 reseller credits (20 years)',
      'Full reseller panel access',
      'Instant per-customer activation',
      'Priority WhatsApp support',
      'Credits never expire',
      'Free trial line generator',
      'Custom pricing per customer',
      'API access included',
    ],
    waMessage: 'Hi, I want the Growth Reseller package (20 years / US$550).',
  },
  {
    name: 'Pro',
    tag: '30 Years',
    years: 30,
    credits: 30,
    wholesaleUSD: 750,
    perYearUSD: 25,
    retailMinUSD: 50,
    retailMaxUSD: 90,
    highlighted: false,
    features: [
      '30 reseller credits (30 years)',
      'Full reseller panel access',
      'Instant per-customer activation',
      'Dedicated WhatsApp support',
      'Credits never expire',
      'Free trial line generator',
      'Custom pricing per customer',
      'Full API access included',
      'White label branding option',
    ],
    waMessage: 'Hi, I want the Pro Reseller package (30 years / US$750).',
  },
];

// ===========================================================================
// FAQS
// ===========================================================================
const faqs = [
  {
    q: 'What exactly is an IPTV reseller panel?',
    a: 'A reseller panel is a private dashboard that lets you create and manage IPTV subscriptions for your own customers. You buy credits from us in bulk, then use those credits to activate yearly, monthly, or trial subscriptions for anyone you sell to. You keep the full retail price minus your wholesale cost, and your customers never see that we exist behind the scenes.',
  },
  {
    q: 'How much can I realistically earn as an IPTV reseller in Canada?',
    a: `It depends on how many customers you bring in. Canadian and international customers typically pay between US$50 and US$90 per year, with US$70 being the average. Your wholesale cost per credit starts around US$30 per year, so your profit per sale ranges from US$20 to US$60 depending on your selling price. Sell 10 subscriptions at US$70 and you have earned roughly US$400 in profit from a US$300 investment.`,
  },
  {
    q: 'Do I need technical skills to become a reseller?',
    a: 'No. The reseller panel is designed to be simple. If you can use WhatsApp and a web browser, you can run a reseller business. We also provide onboarding guidance over WhatsApp, so any time you get stuck, our team walks you through it directly.',
  },
  {
    q: 'Do the reseller credits expire?',
    a: 'No. Your credits stay in your account indefinitely. You can activate them at your own pace, whether that means selling several subscriptions in a week or spreading them across months. There is no monthly minimum, no expiration date, and no pressure to sell quickly.',
  },
  {
    q: 'Which currencies can I sell in?',
    a: `You can sell to your customers in any currency you prefer: Canadian dollars, US dollars, euros, or anything else. Your wholesale cost with us is fixed in USD. Your retail price is completely up to you, so you control your margin. Use the currency toggle at the top of the pricing section to see all prices in CAD, USD, or EUR.`,
  },
  {
    q: 'What kind of support do I get as a reseller?',
    a: `Every reseller, regardless of tier, gets direct WhatsApp support from our Canadian team. The Growth plan adds priority response times, and the Pro plan includes a dedicated support channel plus white-label setup assistance.`,
  },
];

// ===========================================================================
// STEPS
// ===========================================================================
const steps = [
  {
    icon: Wallet,
    number: '01',
    title: 'Buy Your Credits',
    description: 'Choose a package and receive your credits instantly. Starter, Growth, and Pro all activate within minutes of payment confirmation.',
  },
  {
    icon: LayoutDashboard,
    number: '02',
    title: 'Access Your Panel',
    description: 'Log into your private reseller dashboard. Create subscriptions, generate trial lines, and manage every customer account from one clean interface.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Sell to Customers',
    description: 'Set your own prices and sell yearly, monthly, or trial subscriptions. You keep the full retail amount and only spend credits when you activate a customer.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Scale Your Profit',
    description: 'Buy more credits at lower per-credit prices as your customer base grows. Every new tier improves your margin and increases your recurring income.',
  },
];

// ===========================================================================
// VALUE CARDS
// ===========================================================================
const valueCards = [
  {
    icon: BadgeDollarSign,
    title: 'Low Entry Cost',
    description: 'Start your IPTV reseller business with a single US$300 package. No contracts, no monthly fees, no hidden charges. Just buy credits and start selling.',
  },
  {
    icon: Users,
    title: 'Global Demand',
    description: 'Millions of viewers look for cable alternatives every year. The IPTV reseller market keeps growing with room for new sellers in every region.',
  },
  {
    icon: Wallet,
    title: 'High Margins',
    description: 'Your cost per yearly subscription starts at US$25 to US$30. Customers happily pay US$50 to US$90 per year. That is a strong margin on every sale.',
  },
  {
    icon: Server,
    title: 'Real Infrastructure',
    description: 'You resell on our dedicated bare-metal servers. No overloaded shared hosting, no downtime during peak hours, no technical issues to explain.',
  },
];

// ===========================================================================
// PANEL FEATURES
// ===========================================================================
const panelFeatures = [
  { icon: LayoutDashboard, label: 'Reseller Dashboard' },
  { icon: Zap, label: 'Instant Activation' },
  { icon: Package, label: 'No Expiry Credits' },
  { icon: Bot, label: 'Trial Generator' },
  { icon: BarChart3, label: 'Sales Tracking' },
  { icon: CreditCard, label: 'Payment Ready' },
  { icon: Globe, label: 'Multi Currency' },
  { icon: Headphones, label: '24/7 Support' },
  { icon: ShieldCheck, label: 'Encrypted Panel' },
  { icon: Rocket, label: 'API Automation' },
];

// ===========================================================================
// PRICING CARD
// ===========================================================================
function PricingCard({ tier, currency }: { tier: PricingTier; currency: CurrencyCode }) {
  const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(tier.waMessage)}`;

  const wholesalePrice = formatPrice(tier.wholesaleUSD, currency);
  const perYearPrice = formatPrice(tier.perYearUSD, currency);
  const retailMin = formatPrice(tier.retailMinUSD, currency);
  const retailMax = formatPrice(tier.retailMaxUSD, currency);

  return (
    <div
      className={`relative flex flex-col rounded-3xl p-6 md:p-8 transition-all duration-500 ${
        tier.highlighted
          ? 'bg-gradient-to-br from-[#D32F2F] via-[#9A0007] to-[#D32F2F] border-4 border-[#f2ebeb] shadow-[0_25px_60px_rgba(211,47,47,0.4)] lg:-translate-y-4 z-20'
          : 'bg-[#f2ebeb] border-2 border-[#D32F2F]/20 hover:border-[#D32F2F] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(211,47,47,0.2)]'
      }`}
    >
      {/* Tag */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
        <div
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border-2 whitespace-nowrap ${
            tier.highlighted
              ? 'bg-[#f2ebeb] text-[#D32F2F] border-[#f2ebeb]'
              : 'bg-[#D32F2F] text-[#FFFFFF] border-[#9A0007]'
          }`}
        >
          {tier.highlighted && <Sparkles className="w-3 h-3 shrink-0" />}
          {tier.tag}
        </div>
      </div>

      <div className="pt-4">
        <h3
          className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${
            tier.highlighted ? 'text-[#f2ebeb]/90' : 'text-[#D32F2F]'
          }`}
        >
          {tier.name}
        </h3>

        {/* Years */}
        <div
          className={`text-2xl font-black uppercase tracking-tight mb-4 ${
            tier.highlighted ? 'text-[#FFFFFF]' : 'text-[#0a0a0c]'
          }`}
        >
          {tier.years} Years
        </div>

        {/* Price */}
        <div className="mb-4">
          <div
            className={`text-5xl md:text-6xl font-black tracking-tighter mb-2 ${
              tier.highlighted ? 'text-[#FFFFFF]' : 'text-[#0a0a0c]'
            }`}
          >
            {wholesalePrice}
          </div>
          <div
            className={`text-xs font-bold tracking-wide ${
              tier.highlighted ? 'text-[#f2ebeb]/80' : 'text-[#0a0a0c]/60'
            }`}
          >
            {tier.credits} credits total
          </div>
        </div>

        {/* Per year */}
        <div
          className={`text-[11px] font-black uppercase tracking-widest mb-6 inline-block px-3 py-1 rounded-full border whitespace-nowrap ${
            tier.highlighted
              ? 'text-[#f2ebeb] border-[#f2ebeb]/40 bg-[#f2ebeb]/10'
              : 'text-[#D32F2F] border-[#D32F2F]/30 bg-[#D32F2F]/10'
          }`}
        >
          {perYearPrice} per year
        </div>

        {/* Profit box */}
        <div
          className={`rounded-2xl p-4 mb-6 ${
            tier.highlighted
              ? 'bg-[#0a0a0c]/40 border border-[#f2ebeb]/30'
              : 'bg-white border border-[#D32F2F]/20'
          }`}
        >
          <div
            className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
              tier.highlighted ? 'text-[#f2ebeb]/70' : 'text-[#0a0a0c]/60'
            }`}
          >
            Your Profit Potential
          </div>
          <div
            className={`text-xs font-bold mb-1 ${
              tier.highlighted ? 'text-[#f2ebeb]' : 'text-[#0a0a0c]'
            }`}
          >
            Sell at {retailMin} to {retailMax} / year
          </div>
          <div
            className={`text-base font-black uppercase mt-2 ${
              tier.highlighted ? 'text-[#FFFFFF]' : 'text-[#D32F2F]'
            }`}
          >
            Up to {formatPrice((tier.retailMaxUSD - tier.perYearUSD) * tier.years, currency)} total
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2.5 mb-8 flex-1">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-2.5 text-xs font-bold ${
                tier.highlighted ? 'text-[#f2ebeb]' : 'text-[#0a0a0c]/85'
              }`}
            >
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  tier.highlighted ? 'text-[#f2ebeb]' : 'text-[#D32F2F]'
                }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 whitespace-nowrap ${
            tier.highlighted
              ? 'bg-[#f2ebeb] text-[#D32F2F] hover:bg-[#FFFFFF] shadow-2xl'
              : 'bg-[#D32F2F] text-[#FFFFFF] hover:bg-[#9A0007] shadow-lg'
          }`}
        >
          <span>Get This Package</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
}

// ===========================================================================
// FAQ ITEM
// ===========================================================================
function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
        isOpen
          ? 'border-[#D32F2F] shadow-[0_20px_50px_rgba(211,47,47,0.15)]'
          : 'border-[#D32F2F]/20 hover:border-[#D32F2F]'
      } ${
        index % 3 === 0
          ? 'bg-[#FFFFFF]'
          : index % 3 === 1
          ? 'bg-[#f2ebeb]'
          : 'bg-gradient-to-br from-[#fff5f5] to-[#FFFFFF]'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-7 flex items-start gap-5 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D32F2F] to-[#9A0007] flex items-center justify-center text-[#FFFFFF] font-black text-lg shadow-lg shadow-[#D32F2F]/30">
          {num}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-black text-[#0a0a0c] text-base md:text-lg uppercase tracking-tight leading-snug mb-1">
            {faq.q}
          </h3>
          {isOpen && (
            <p className="text-[#0a0a0c]/85 font-medium leading-relaxed text-sm md:text-base mt-3 pl-4 border-l-4 border-[#D32F2F]">
              {faq.a}
            </p>
          )}
        </div>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-[#D32F2F] transition-transform duration-300 mt-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
}

// ===========================================================================
// MAIN PAGE
// ===========================================================================
export default function ResellerPage() {
  const [currency, setCurrency] = useState<CurrencyCode>('CAD');

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D32F2F]/12 blur-[150px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #D32F2F 1px, transparent 1px), linear-gradient(to bottom, #D32F2F 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#D32F2F] px-5 py-2.5 rounded-full mb-8 shadow-lg shadow-[#D32F2F]/30">
              <BadgeDollarSign className="w-4 h-4 text-[#FFFFFF] shrink-0" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                IPTV Reseller Canada {YEAR} 🍁
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] text-[#FFFFFF] mb-6 max-w-4xl mx-auto">
              BECOME AN <br className="hidden sm:block" />
              <span className="text-[#D32F2F]">IPTV RESELLER</span> <br className="hidden sm:block" />
              IN CANADA
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/75 font-bold max-w-3xl mx-auto leading-relaxed mb-10">
              Start your own IPTV reseller business with a single US$300 package. Buy credits in bulk, sell yearly subscriptions at US$50 to US$90, and earn up to US$60 profit per customer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-12">
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(211,47,47,0.4)] hover:scale-105 transition-transform whitespace-nowrap"
              >
                See Pricing
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  'Hi, I want to learn more about becoming an IPTV reseller in Canada.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f2ebeb] text-[#D32F2F] font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Talk to Us
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <Zap className="w-3.5 h-3.5 text-[#D32F2F] shrink-0" />
                Instant Access
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D32F2F] shrink-0" />
                No Expiry
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <Headphones className="w-3.5 h-3.5 text-[#D32F2F] shrink-0" />
                24/7 Support
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/30 px-4 py-1.5 rounded-full mb-5">
            <TrendingUp className="w-4 h-4 text-[#D32F2F] shrink-0" />
            <span className="text-[#D32F2F] font-black text-xs uppercase tracking-widest whitespace-nowrap">
              Why Join Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
            WHY RESELL IPTV <span className="text-[#D32F2F]">TODAY</span>?
          </h2>
          <p className="text-base md:text-lg text-[#FFFFFF]/70 font-bold leading-relaxed">
            The IPTV reseller market has never been easier to enter. Low upfront costs, massive demand, and full profit control make it one of the most accessible side businesses today.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueCards.map((card) => {
            const Icon = card.icon;
            return (
              <FadeInItem
                key={card.title}
                className="group bg-[#f2ebeb] border-2 border-[#D32F2F]/20 rounded-3xl p-6 md:p-7 hover:border-[#D32F2F] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(211,47,47,0.2)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D32F2F]/10 group-hover:bg-[#D32F2F] flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-7 h-7 text-[#D32F2F] group-hover:text-[#FFFFFF] transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-[#0a0a0c] uppercase tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-[#0a0a0c]/75 text-sm font-medium leading-relaxed">
                  {card.description}
                </p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* PROFIT MATH */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/30 px-4 py-1.5 rounded-full mb-5">
              <BarChart3 className="w-4 h-4 text-[#D32F2F] shrink-0" />
              <span className="text-[#D32F2F] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                The Real Math
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
              HOW MUCH CAN YOU <span className="text-[#D32F2F]">EARN</span>?
            </h2>
            <p className="text-base md:text-lg text-[#FFFFFF]/70 font-bold max-w-3xl mx-auto">
              A concrete example. This is what happens when you buy a reseller package and sell to customers at normal retail pricing.
            </p>
          </FadeIn>

          <FadeIn className="bg-[#f2ebeb] text-[#0a0a0c] border-4 border-[#D32F2F] rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#0a0a0c]/50 mb-3">
                  Starter Package
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#D32F2F] tracking-tighter mb-2">
                  {formatPrice(300, currency)}
                </div>
                <div className="text-xs font-bold text-[#0a0a0c]/70">
                  10 credits (10 years)
                </div>
              </div>
              <div className="md:border-x-2 border-[#0a0a0c]/10 md:px-8">
                <div className="text-xs font-black uppercase tracking-widest text-[#0a0a0c]/50 mb-3">
                  Sell Per Year At
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0a0a0c] tracking-tighter mb-2">
                  {formatPrice(70, currency)}
                </div>
                <div className="text-xs font-bold text-[#0a0a0c]/70">
                  average retail price
                </div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#0a0a0c]/50 mb-3">
                  Total Revenue
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#D32F2F] tracking-tighter mb-2">
                  {formatPrice(700, currency)}
                </div>
                <div className="text-xs font-bold text-[#0a0a0c]/70">
                  from 10 customers
                </div>
              </div>
            </div>

            <div className="pt-6 md:pt-8 border-t-2 border-[#0a0a0c]/10 mt-6 md:mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-black uppercase tracking-widest text-[#0a0a0c]/60 mb-2">
                    Revenue minus Cost
                  </div>
                  <div className="text-sm font-bold text-[#0a0a0c]/80">
                    Net profit from your first 10 customers
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xs font-black uppercase tracking-widest text-[#D32F2F] mb-1">
                    Your Profit
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-[#D32F2F] tracking-tighter">
                    {formatPrice(400, currency)}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="text-[#FFFFFF]/75 font-bold text-base md:text-lg leading-relaxed">
              Sell at the higher end of the range and profit climbs even further. At US$90 per sale, your profit from 10 customers reaches <span className="text-[#D32F2F] font-black">{formatPrice(600, currency)}</span>. The Growth and Pro packages lower your per-year cost, so your total profit scales with every additional customer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
        <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/30 px-4 py-1.5 rounded-full mb-5">
            <Package className="w-4 h-4 text-[#D32F2F] shrink-0" />
            <span className="text-[#D32F2F] font-black text-xs uppercase tracking-widest whitespace-nowrap">
              Reseller Packages
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
            CHOOSE YOUR <span className="text-[#D32F2F]">PACKAGE</span>
          </h2>
          <p className="text-base md:text-lg text-[#FFFFFF]/70 font-bold max-w-3xl mx-auto">
            Every package includes full reseller panel access, instant activation per customer, and 24/7 WhatsApp support. Credits never expire.
          </p>
        </FadeIn>

        {/* CURRENCY SWITCHER */}
        <FadeIn className="flex justify-center mb-12">
          <div className="inline-flex bg-[#121214] border border-white/10 rounded-2xl p-1.5 shadow-2xl">
            {CURRENCY_ORDER.map((code) => {
              const active = currency === code;
              return (
                <button
                  key={code}
                  onClick={() => setCurrency(code)}
                  className={`px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                    active
                      ? 'bg-[#D32F2F] text-[#FFFFFF] shadow-lg shadow-[#D32F2F]/30'
                      : 'text-[#FFFFFF]/60 hover:text-[#FFFFFF]'
                  }`}
                  aria-pressed={active}
                >
                  {CURRENCIES[code].label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch max-w-6xl mx-auto mt-8">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} currency={currency} />
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-[#FFFFFF]/60 text-sm font-bold">
            Need larger volume? Message our team on WhatsApp for wholesale pricing on 100+ credits.
          </p>
        </FadeIn>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/30 px-4 py-1.5 rounded-full mb-5">
              <Rocket className="w-4 h-4 text-[#D32F2F] shrink-0" />
              <span className="text-[#D32F2F] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
              START IN <span className="text-[#D32F2F]">FOUR STEPS</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <FadeInItem
                  key={step.number}
                  className="relative bg-[#f2ebeb] border-2 border-[#D32F2F]/20 rounded-3xl p-6 md:p-7 hover:border-[#D32F2F] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(211,47,47,0.2)] transition-all duration-500"
                >
                  <div className="absolute -top-4 -right-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D32F2F] to-[#9A0007] flex items-center justify-center text-[#FFFFFF] font-black text-sm shadow-lg shadow-[#D32F2F]/40">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#D32F2F]/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-[#D32F2F]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-[#0a0a0c] uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#0a0a0c]/75 text-sm font-medium leading-relaxed">
                    {step.description}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* PANEL FEATURES */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/30 px-4 py-1.5 rounded-full mb-5">
            <LayoutDashboard className="w-4 h-4 text-[#D32F2F] shrink-0" />
            <span className="text-[#D32F2F] font-black text-xs uppercase tracking-widest whitespace-nowrap">
              Panel Features
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
            EVERYTHING IN <span className="text-[#D32F2F]">ONE DASHBOARD</span>
          </h2>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {panelFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <FadeInItem
                key={feature.label}
                className="bg-[#f2ebeb] border-2 border-[#D32F2F]/15 rounded-2xl p-4 flex flex-col items-center text-center hover:border-[#D32F2F] transition-colors duration-300"
              >
                <Icon className="w-6 h-6 text-[#D32F2F] mb-2" />
                <span className="text-[#0a0a0c] font-black text-[11px] md:text-xs uppercase tracking-wide leading-tight">
                  {feature.label}
                </span>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-white/5">
        <FadeIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/30 px-4 py-1.5 rounded-full mb-5">
            <MessageCircle className="w-4 h-4 text-[#D32F2F] shrink-0" />
            <span className="text-[#D32F2F] font-black text-xs uppercase tracking-widest whitespace-nowrap">
              Reseller FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
            COMMON <span className="text-[#D32F2F]">QUESTIONS</span>
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#D32F2F]/40 bg-gradient-to-br from-[#D32F2F] via-[#9A0007] to-[#D32F2F] p-8 md:p-14 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFFFFF] text-[#D32F2F] px-5 py-2 rounded-full mb-6 shadow-lg">
                <UserPlus className="w-4 h-4 shrink-0" />
                <span className="font-black text-xs uppercase tracking-widest whitespace-nowrap">
                  Ready to Start
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5 max-w-3xl mx-auto">
                LAUNCH YOUR RESELLER BUSINESS TODAY
              </h2>

              <p className="text-[#FFFFFF]/90 font-bold text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Message our team on WhatsApp and we will have your reseller panel active within 10 minutes. Pick your package, log in, and start selling to your first customer the same day.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                    'Hi, I want to become an IPTV reseller. Please help me get started.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#f2ebeb] whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 text-[#D32F2F] shrink-0" />
                  Start on WhatsApp
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f2ebeb] text-[#D32F2F] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl whitespace-nowrap"
                >
                  Customer Plans
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}