import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import {
  Award,
  Globe,
  Users,
  Server,
  Zap,
  ShieldCheck,
  Trophy,
  Headphones,
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Tv,
  Film,
  Activity,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/about`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'About Us',
  `Discover the story behind ${BRAND}: Canada's trusted IPTV provider with 30,000+ live channels in 4K Ultra HD and 99.9% uptime.`,
  '/about'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const AboutPageSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${PAGE_URL}/#about`,
        url: PAGE_URL,
        name: `About ${BRAND}`,
        description: `Learn about ${BRAND} — Canada's trusted IPTV provider with 30,000+ live channels, 50,000+ VOD titles, and 25,000+ satisfied customers across Canada, the US, UK, and Australia.`,
        inLanguage: 'en-CA',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="about-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <AboutPageSchema />

      {/* ==========================================================
          HERO
      ========================================================== */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
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
            <Sparkles className="w-4 h-4 text-[#FFFFFF]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              Our Story & Mission 🍁
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            About <span className="text-[#D32F2F]">{BRAND}</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Canada's #1 premium IPTV provider — experience unlimited streaming in 4K quality without buffering, contracts, or hidden fees.
          </p>
        </div>
      </section>

      {/* ==========================================================
          STATS
      ========================================================== */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-label="Company statistics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '25,000+', label: 'Happy Customers' },
            { icon: Globe, value: '100+', label: 'Countries Available' },
            { icon: Server, value: '99.9%', label: 'Server Uptime' },
            { icon: Trophy, value: '4.9/5', label: 'Average Rating' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl shadow-xl hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(211,47,47,0.2)] transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-[#D32F2F] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[#0a0a0c]/70 text-xs font-black uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================================
          PROMO BANNER
      ========================================================== */}
      <section className="w-full bg-gradient-to-r from-[#D32F2F] via-[#9A0007] to-[#D32F2F] py-10 px-4 sm:px-6 border-y-4 border-[#f2ebeb]/20 shadow-[0_0_50px_rgba(211,47,47,0.4)] relative z-20 overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#f2ebeb] text-[#D32F2F] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
            SAVE BIG ON CABLE TV
          </div>
          <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            READY FOR THE BEST IPTV EXPERIENCE?
          </h2>
          <p className="text-[#FFFFFF]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Stop overpaying for separate subscriptions. Get all your sports, movies, and Canadian channels in one complete package.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#f2ebeb] text-[#0a0a0c] hover:bg-[#0a0a0c] hover:text-[#FFFFFF] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <span>View Subscriptions</span>
              <ArrowRight className="w-5 h-5 text-[#D32F2F]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Intro Card */}
        <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#D32F2F]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#0a0a0c] uppercase tracking-tight mb-2">
                Welcome to {BRAND}
              </h2>
              <p className="text-[#0a0a0c]/90 font-bold text-base leading-relaxed">
                We were founded with one clear goal: making premium live television and on-demand media accessible and affordable for every household in Canada — and now the US, UK, and Australia — without compromising on picture quality or stability.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-12">

          {/* Mission */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#D32F2F] rounded-full inline-block" />
              Our Mission & Vision
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-4">
              Traditional cable subscriptions get more expensive every year while channel selection stays limited. Canadian households are forced to bundle multiple services just to get hockey, Formula 1, and movies — often paying $120+ per month for a fraction of the content.
            </p>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium">
              At {BRAND}, we bundle everything into one intuitive platform: live sports, Canadian national networks, and the latest cinema releases in 4K Ultra HD. We continuously invest in advanced server capacity to make buffering a thing of the past — even during Stanley Cup Finals.
            </p>
          </section>

          {/* Feature Grid */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#D32F2F] rounded-full inline-block" />
              Why {BRAND} Is the Best Choice
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: '99.9% Uptime Guarantee',
                  desc: 'Our redundant server clusters ensure your favourite broadcasts are always live and interruption-free.',
                },
                {
                  icon: Zap,
                  title: 'Anti-Freeze Technology',
                  desc: 'Advanced load balancers prevent buffering during peak hours and high-traffic live sports events.',
                },
                {
                  icon: Server,
                  title: 'High-Speed Canadian Servers',
                  desc: 'Directly connected to major Canadian and North American internet exchanges for minimal latency and instant channel zapping.',
                },
                {
                  icon: Headphones,
                  title: '24/7 WhatsApp Customer Support',
                  desc: 'Expert help for installation, app selection, and channel configuration — usually within minutes.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-6 bg-[#f2ebeb] rounded-3xl border-4 border-[#D32F2F] shadow-lg hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(211,47,47,0.2)] transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-black text-[#0a0a0c] text-base uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-[#0a0a0c]/80 text-xs font-bold mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Infrastructure */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#D32F2F] rounded-full inline-block" />
              Our Technical Server Infrastructure
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-6">
              Unlike standard IPTV resellers, we manage our own streaming servers with dedicated 10 Gbps fibre connections. Our servers automatically route the video signal through the closest node, so you always enjoy smooth 50/60 FPS streaming quality — whether you're in Toronto, Vancouver, Montreal, or Halifax.
            </p>
            <div className="bg-[#0a0a0c] border border-white/10 rounded-3xl p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/5 rounded-2xl hover:border hover:border-[#D32F2F] transition-all">
                  <Activity className="w-8 h-8 text-[#D32F2F] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">Low Latency</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Minimal delay during live sports
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl hover:border hover:border-[#D32F2F] transition-all">
                  <Film className="w-8 h-8 text-[#D32F2F] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">H.265 / HEVC</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Optimal data usage at 4K
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl hover:border hover:border-[#D32F2F] transition-all">
                  <Tv className="w-8 h-8 text-[#D32F2F] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">Universal</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Works on every Smart TV system
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Content Catalog */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#D32F2F] rounded-full inline-block" />
              The Most Complete Channel Lineup
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-6">
              With over <strong className="text-[#FFFFFF]">30,000 live TV channels</strong> and a video library of{' '}
              <strong className="text-[#FFFFFF]">50,000+ movies and series</strong>, we offer the widest channel package in Canada:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'All Canadian networks (CBC, CTV, Global, Citytv, TVA, Radio-Canada) in 4K & Full HD',
                'Live sports channels including Sportsnet, TSN, CBC Sports, NHL Center Ice, and UFC PPV',
                'Formula 1, NHL hockey, NBA, MLB, CFL, Premier League, and PSL cricket',
                'Full international lineup from the US, UK, Australia, France, Germany, Italy, India, and China',
                'Daily-updated VOD catalog with English subtitles for cinema releases and top series',
                'Electronic Program Guide (EPG) and 7-day catch-up / replay functionality',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <Star className="w-5 h-5 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Guarantee */}
          <section>
            <div className="bg-[#f2ebeb] border-4 border-green-600 rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-green-600 font-black text-lg md:text-xl uppercase tracking-tight mb-2">
                    Our 7-Day Satisfaction Guarantee
                  </h3>
                  <p className="text-[#0a0a0c] text-sm md:text-base font-bold leading-relaxed">
                    We are 100% confident in the quality of our platform. If within 7 days of purchase you are not satisfied with the streams or channels for any reason, we will refund your full purchase amount immediately. No hassle, no fine print — just the best IPTV Canada experience or your money back.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0c] uppercase tracking-tight mb-3">
              Experience It Yourself — Risk-Free
            </h2>
            <p className="text-[#D32F2F] font-bold text-base max-w-lg mx-auto mb-8">
              Join thousands of satisfied households across Canada, the US, UK, and Australia. Installed and activated within 5 minutes of ordering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
              <Link
                href="/pricing"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-md"
              >
                Choose Your Plan
              </Link>
              <Link
                href="/setup"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-sm uppercase tracking-widest border-2 border-[#D32F2F] transition-transform hover:scale-105"
              >
                Setup Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Back Link */}
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