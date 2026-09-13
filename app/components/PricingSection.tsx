'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  CheckCircle2,
  Zap,
  Crown,
  MonitorPlay,
  Gift,
  Sparkles,
  Flame,
  ShieldCheck,
  Lock,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Payment Method SVG Icons — clean, properly sized, no distortion
// ---------------------------------------------------------------------------
const PaymentIcons = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const isDark = variant === 'dark';
  const shellBg = isDark ? '#09090B' : '#FFFFFF';
  const shellBorder = isDark ? 'rgba(239,191,4,0.35)' : '#E4E4E7';

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <div
      className="flex items-center justify-center h-8 w-12 rounded-md overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: shellBg, border: `1px solid ${shellBorder}` }}
    >
      {children}
    </div>
  );

  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      {/* Visa */}
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text
            x="24"
            y="22"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="14"
            fontWeight="900"
            fontStyle="italic"
            fill={isDark ? '#FFFFFF' : '#1434CB'}
            letterSpacing="-0.5"
          >
            VISA
          </text>
        </svg>
      </Shell>

      {/* Mastercard */}
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="16" r="9" fill="#EB001B" />
          <circle cx="29" cy="16" r="9" fill="#F79E1B" />
          <path d="M24 8.5a9 9 0 000 15 9 9 0 000-15z" fill="#FF5F00" />
        </svg>
      </Shell>

      {/* PayPal */}
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text
            x="24"
            y="21"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            fontWeight="900"
            fontStyle="italic"
            fill="#003087"
          >
            Pay
          </text>
          <text
            x="24"
            y="27"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="9"
            fontWeight="800"
            fontStyle="italic"
            fill="#0079C1"
          >
            Pal
          </text>
        </svg>
      </Shell>

      {/* Bitcoin */}
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="10" fill="#F7931A" />
          <text
            x="24"
            y="21"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="14"
            fontWeight="900"
            fill="#FFFFFF"
          >
            ₿
          </text>
        </svg>
      </Shell>

      {/* Google Pay */}
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text
            x="24"
            y="21"
            textAnchor="middle"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="11"
            fontWeight="800"
            fill={isDark ? '#FFFFFF' : '#5F6368'}
          >
            GPay
          </text>
        </svg>
      </Shell>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------
export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  const pricing = {
    1: {
      3: { total: 50, mo: (50 / 3).toFixed(2) },
      6: { total: 75, mo: (75 / 6).toFixed(2) },
      12: { total: 99, mo: (99 / 12).toFixed(2) },
    },
    2: {
      3: { total: 85, mo: (85 / 3).toFixed(2) },
      6: { total: 115, mo: (115 / 6).toFixed(2) },
      12: { total: 175, mo: (175 / 12).toFixed(2) },
    },
    3: {
      3: { total: 115, mo: (115 / 3).toFixed(2) },
      6: { total: 150, mo: (150 / 6).toFixed(2) },
      12: { total: 250, mo: (250 / 12).toFixed(2) },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];

  const handleWhatsAppRedirect = (months: number) => {
    const selectedPrice = currentPricing[months as 3 | 6 | 12]?.total;
    const message = `Hello ${CONSTANTS.BRAND_NAME}, I would like to order a ${months}-month subscription for ${devices} ${
      devices > 1 ? 'screens' : 'screen'
    } for CA$${selectedPrice}.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Hello ${CONSTANTS.BRAND_NAME}, I would like to request a free 24-hour trial period (IPTV Test) to test the channels.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="pricing-section"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-20 bg-[#09090B] text-[#FFFFFF] overflow-hidden"
    >
      {/* Ambient Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D32F2F]/10 blur-[140px] rounded-full pointer-events-none" />
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:40px_40px] pointer-events-none" />

      {/* Section Header */}
      <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 md:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#EFBF04] bg-[#09090B] px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#EFBF04]/10">
          <Crown className="w-4 h-4 text-[#EFBF04]" />
          <span className="text-[#EFBF04] font-black text-xs uppercase tracking-widest">
            Premium Entertainment Pass 🍁
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight leading-tight">
          CHOOSE YOUR <span className="text-[#D32F2F]">IPTV PLAN</span>
        </h2>
        <p className="text-base sm:text-lg text-[#A1A1AA] mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Unlock instant 4K Ultra HD access. Save up to{' '}
          <span className="text-[#EFBF04] font-bold">50% off</span> on 12-month passes with simultaneous multi-screen support.
        </p>

        {/* Device Switcher */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-[#EFBF04]" />
            <span className="text-xs text-[#A1A1AA] font-black uppercase tracking-widest">
              Select Simultaneous Screens
            </span>
          </div>
          <div className="inline-flex bg-[#121215] border border-[#FFFFFF]/10 rounded-2xl p-1.5 shadow-2xl relative">
            {[1, 2, 3].map((d) => (
              <button
                key={d}
                onClick={() => setDevices(d as 1 | 2 | 3)}
                className={`px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 relative ${
                  devices === d
                    ? 'bg-[#D32F2F] text-[#FFFFFF] shadow-lg shadow-[#D32F2F]/40 scale-[1.03] ring-2 ring-[#D32F2F]/40'
                    : 'text-[#A1A1AA] hover:text-[#FFFFFF]'
                }`}
              >
                {d} {d > 1 ? 'Screens' : 'Screen'}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Pricing Cards Grid */}
      <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-stretch max-w-6xl mx-auto mt-12 relative z-10">

        {/* ============================================================
            CARD 1: 3 MONTHS PLAN — WHITE CARD + RED BORDER
        ============================================================ */}
        <FadeInItem className="relative bg-[#FFFFFF] text-[#09090B] border-2 border-[#D32F2F]/40 rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-xl transition-all duration-500 hover:border-[#D32F2F] hover:shadow-[0_25px_60px_rgba(211,47,47,0.35)] hover:-translate-y-3">
          {/* Hover red glow — appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F]/0 via-[#D32F2F]/0 to-[#D32F2F]/0 group-hover:from-[#D32F2F]/5 group-hover:to-[#D32F2F]/10 transition-all duration-500 pointer-events-none" />
          {/* Red corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D32F2F]/10 to-transparent rounded-bl-[3rem] pointer-events-none transition-all duration-500 group-hover:from-[#D32F2F]/20 group-hover:w-32 group-hover:h-32" />
          {/* Top red highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#D32F2F] uppercase tracking-[0.2em]">Starter Pass</h3>
              <MonitorPlay className="w-5 h-5 text-[#D32F2F] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </div>
            <div className="text-3xl font-black text-[#09090B] mb-2 tracking-tighter uppercase">3 Months</div>

            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-[#09090B] tracking-tighter transition-all duration-500 group-hover:text-[#D32F2F]">
                CA${currentPricing[3]?.total || 0}
              </span>
            </div>
            <div className="text-[11px] font-black text-[#D32F2F] mb-8 uppercase tracking-widest border border-[#D32F2F]/30 self-start px-3 py-1 rounded-full inline-block bg-[#D32F2F]/10">
              CA${currentPricing[3]?.mo || 0} / month
            </div>

            <ul className="w-full space-y-3.5 flex-grow relative mb-6">
              {[
                `${devices} Simultaneous ${devices > 1 ? 'Screens' : 'Connection'}`,
                'Ultra HD 4K & Full HD Quality',
                '20,000+ Live Channels (CA, US, UK)',
                '60,000+ Movies & TV Series (VOD)',
                'Canadian Sports (TSN, Sportsnet)',
                '7-Day Replay & Electronic Program Guide',
                'Anti-Freeze Buffer-Free Technology',
                'Smart TV, Firestick, iOS, Android',
                '24/7 Canadian Customer Support',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#52525B] text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#D32F2F] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6 p-3 bg-[#F4F4F5] rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#D32F2F]/10">
              <Zap className="w-4 h-4 text-[#D32F2F] shrink-0" />
              <span className="text-[11px] font-black text-[#09090B] uppercase tracking-wider">
                Instant Activation • 99.9% Uptime Guarantee
              </span>
            </div>

            {/* Payment Icons */}
            <div className="mb-6 pt-4 border-t border-[#E4E4E7]">
              <div className="flex items-center justify-between text-[10px] font-black text-[#71717A] uppercase tracking-widest mb-3">
                <span>Accepted Payments</span>
                <Lock className="w-3 h-3 text-[#71717A]" />
              </div>
              <PaymentIcons variant="light" />
            </div>

            <button
              onClick={() => handleWhatsAppRedirect(3)}
              className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#9A0007] transition-all shadow-lg shadow-[#D32F2F]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_35px_rgba(211,47,47,0.5)]"
            >
              Select 3 Months
            </button>
          </div>
        </FadeInItem>

        {/* ============================================================
            CARD 2: 12 MONTHS VIP — GOLD (UNCHANGED)
        ============================================================ */}
        <FadeInItem className="relative bg-[#1A1608] border-2 border-[#EFBF04] rounded-3xl p-6 sm:p-9 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(239,191,4,0.25)] z-20 group transition-all duration-500 hover:shadow-[0_0_70px_rgba(239,191,4,0.5)] hover:-translate-y-6">

          {/* Ribbon: Most Popular */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-auto whitespace-nowrap">
            <div className="bg-[#EFBF04] text-[#09090B] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full flex items-center gap-1.5 shadow-xl border border-[#09090B]">
              <Flame className="w-3.5 h-3.5 fill-current text-[#09090B]" /> Most Popular
            </div>
          </div>

          {/* Gold hover sheen */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#EFBF04]/0 via-[#EFBF04]/0 to-[#EFBF04]/0 group-hover:from-[#EFBF04]/5 group-hover:to-[#EFBF04]/10 transition-all duration-500 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full pt-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#EFBF04] uppercase tracking-[0.2em] flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-[#EFBF04]" /> Ultimate VIP Pass
              </h3>
              <Sparkles className="w-4 h-4 text-[#EFBF04] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </div>

            {/* Save 50% badge — inline, responsive */}
            <div className="mb-4 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#D32F2F] text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#D32F2F]/40">
              <Flame className="w-3 h-3 fill-current" /> Save 50% Today
            </div>

            <div className="text-3xl font-black text-[#EFBF04] mb-2 tracking-tighter uppercase">
              12 Months
            </div>

            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-6xl font-black text-[#EFBF04] tracking-tighter drop-shadow-[0_0_20px_rgba(239,191,4,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(239,191,4,0.7)]">
                CA${currentPricing[12]?.total || 0}
              </span>
            </div>

            <div className="text-[11px] font-black text-[#EFBF04] mb-8 uppercase tracking-widest border border-[#EFBF04] self-start px-4 py-1.5 rounded-full inline-block bg-[#EFBF04]/10 shadow-sm">
              BEST VALUE: CA${currentPricing[12]?.mo || 0} / mo
            </div>

            <ul className="w-full space-y-3.5 flex-grow relative mb-6">
              {[
                `${devices} Simultaneous ${devices > 1 ? 'Screens' : 'Connection'}`,
                'Ultra HD 4K & Pure Full HD Quality',
                '20,000+ Premium Live Channels',
                '60,000+ Movies & Series (Updated Daily)',
                'All Sports (TSN, Sportsnet, PPV Events)',
                '7-Day Catch-Up & Electronic Program Guide',
                'Dedicated High-Speed VIP Servers',
                'Smart TV, Firestick, Apple TV, iOS, Android',
                '24/7 VIP Priority Support via WhatsApp',
              ].map((feature, idx) => (
                <li key={feature} className="flex items-center gap-3 text-[#FFFFFF] font-semibold text-sm">
                  <div className="bg-[#EFBF04]/20 p-0.5 rounded-full border border-[#EFBF04]/40">
                    <CheckCircle2 className="w-4 h-4 text-[#EFBF04] flex-shrink-0" />
                  </div>
                  <span className="text-[#FFFFFF]">{feature}</span>
                  {idx === 4 && (
                    <span className="bg-[#EFBF04]/20 text-[#EFBF04] text-[9px] font-black uppercase px-2 py-0.5 rounded ml-auto border border-[#EFBF04]/40">
                      All PPV
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mb-6 p-3 bg-[#EFBF04]/10 border border-[#EFBF04]/30 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#EFBF04]/20">
              <Crown className="w-4 h-4 text-[#EFBF04] shrink-0" />
              <span className="text-[11px] font-black text-[#EFBF04] uppercase tracking-wider">
                Priority Dedicated Server Line Included
              </span>
            </div>

            {/* Payment Icons */}
            <div className="mb-6 pt-4 border-t border-[#EFBF04]/20">
              <div className="flex items-center justify-between text-[10px] font-black text-[#EFBF04]/80 uppercase tracking-widest mb-3">
                <span>Accepted Payments</span>
                <Lock className="w-3 h-3 text-[#EFBF04]" />
              </div>
              <PaymentIcons variant="dark" />
            </div>

            <button
              onClick={() => handleWhatsAppRedirect(12)}
              className="w-full text-center whitespace-nowrap px-6 py-4 sm:py-5 rounded-full bg-[#EFBF04] text-[#09090B] font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#d4a803] transition-all shadow-xl shadow-[#EFBF04]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_40px_rgba(239,191,4,0.5)]"
            >
              Get 12 Months VIP
            </button>
          </div>
        </FadeInItem>

        {/* ============================================================
            CARD 3: 6 MONTHS PLAN — WHITE CARD + RED BORDER
        ============================================================ */}
        <FadeInItem className="relative bg-[#FFFFFF] text-[#09090B] border-2 border-[#D32F2F]/40 rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-xl transition-all duration-500 hover:border-[#D32F2F] hover:shadow-[0_25px_60px_rgba(211,47,47,0.35)] hover:-translate-y-3">
          {/* Hover red glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F]/0 via-[#D32F2F]/0 to-[#D32F2F]/0 group-hover:from-[#D32F2F]/5 group-hover:to-[#D32F2F]/10 transition-all duration-500 pointer-events-none" />
          {/* Red corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D32F2F]/10 to-transparent rounded-bl-[3rem] pointer-events-none transition-all duration-500 group-hover:from-[#D32F2F]/20 group-hover:w-32 group-hover:h-32" />
          {/* Top red highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D32F2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#D32F2F] uppercase tracking-[0.2em]">Standard Pass</h3>
              <MonitorPlay className="w-5 h-5 text-[#D32F2F] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </div>
            <div className="text-3xl font-black text-[#09090B] mb-2 tracking-tighter uppercase">6 Months</div>

            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-[#09090B] tracking-tighter transition-all duration-500 group-hover:text-[#D32F2F]">
                CA${currentPricing[6]?.total || 0}
              </span>
            </div>
            <div className="text-[11px] font-black text-[#D32F2F] mb-8 uppercase tracking-widest border border-[#D32F2F]/30 self-start px-3 py-1 rounded-full inline-block bg-[#D32F2F]/10">
              CA${currentPricing[6]?.mo || 0} / month
            </div>

            <ul className="w-full space-y-3.5 flex-grow relative mb-6">
              {[
                `${devices} Simultaneous ${devices > 1 ? 'Screens' : 'Connection'}`,
                'Ultra HD 4K & Full HD Quality',
                '20,000+ Live Channels (CA, US, UK)',
                '60,000+ Movies & TV Series (VOD)',
                'Canadian Sports (TSN, Sportsnet)',
                '7-Day Replay & Electronic Program Guide',
                'Anti-Freeze Buffer-Free Technology',
                'Smart TV, Firestick, iOS, Android',
                '24/7 Canadian Customer Support',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#52525B] text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#D32F2F] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6 p-3 bg-[#F4F4F5] rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#D32F2F]/10">
              <Zap className="w-4 h-4 text-[#D32F2F] shrink-0" />
              <span className="text-[11px] font-black text-[#09090B] uppercase tracking-wider">
                Instant Activation • 99.9% Uptime Guarantee
              </span>
            </div>

            {/* Payment Icons */}
            <div className="mb-6 pt-4 border-t border-[#E4E4E7]">
              <div className="flex items-center justify-between text-[10px] font-black text-[#71717A] uppercase tracking-widest mb-3">
                <span>Accepted Payments</span>
                <Lock className="w-3 h-3 text-[#71717A]" />
              </div>
              <PaymentIcons variant="light" />
            </div>

            <button
              onClick={() => handleWhatsAppRedirect(6)}
              className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#9A0007] transition-all shadow-lg shadow-[#D32F2F]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_35px_rgba(211,47,47,0.5)]"
            >
              Select 6 Months
            </button>
          </div>
        </FadeInItem>

      </FadeInStagger>

      {/* Free Trial Banner */}
      <FadeIn className="max-w-2xl mx-auto mt-16 relative z-30">
        <div className="bg-[#121215] border border-[#EFBF04]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden group hover:border-[#EFBF04] transition-all duration-500">
          {/* subtle gold glow */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#EFBF04]/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="flex items-center gap-4 text-left relative z-10">
            <div className="bg-[#EFBF04]/10 border border-[#EFBF04]/30 p-3 rounded-xl text-[#EFBF04] shrink-0 hidden sm:block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#EFBF04]" />
                <h4 className="text-base font-black text-[#FFFFFF] uppercase tracking-tight">
                  Free 24-Hour IPTV Test 🍁
                </h4>
              </div>
              <p className="text-xs text-[#A1A1AA] font-medium">
                Test 4K streaming performance risk-free before placing an order.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto shrink-0 relative z-10">
            <button
              onClick={handleFreeTrialRedirect}
              className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-3 rounded-full bg-[#EFBF04] text-[#09090B] font-black text-xs uppercase tracking-widest hover:bg-[#d4a803] transition-all shadow-lg active:scale-95 hover:scale-105"
            >
              Request Free Trial
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}