import {
  channelsData,
  getChannelCategoryBySlug,
  getAllCategorySlugs,
  type CountryCode,
} from '@/lib/channels-data';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Tv,
  ShieldCheck,
  Zap,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  Activity,
  Cpu,
  MonitorSmartphone,
  MessageCircle,
  Users,
  Globe,
  Film,
  Trophy,
  Baby,
  Star,
} from 'lucide-react';
import ShareButtons from '../../components/ShareButtons';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;

// ---------------------------------------------------------------------------
// COUNTRY FLAG — unique clipPath IDs prevent SVG conflicts on repeated cards
// ---------------------------------------------------------------------------
function CountryFlag({
  country,
  size = 'md',
  uid = '0',
}: {
  country: CountryCode;
  size?: 'sm' | 'md' | 'lg';
  uid?: string | number;
}) {
  const dim = size === 'lg' ? 'w-7 h-7' : size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';
  const cls = `${dim} rounded-full shadow-md shrink-0 border-2 border-white/20 overflow-hidden`;
  const cid = `cf-${country}-${uid}`;

  const wrap = (children: React.ReactNode) => (
    <svg className={cls} viewBox="0 0 32 32" aria-label={`${country} flag`}>
      <clipPath id={cid}>
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath={`url(#${cid})`}>{children}</g>
    </svg>
  );

  switch (country) {
    case 'CA':
      return wrap(
        <>
          <path fill="#FFF" d="M0 0h32v32H0z" />
          <path fill="#D80621" d="M0 0h8v32H0zM24 0h8v32h-8z" />
          <path
            fill="#D80621"
            d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z"
          />
        </>
      );
    case 'US':
      return wrap(
        <>
          <path fill="#FFF" d="M0 0h32v32H0z" />
          {[0, 4.57, 9.14, 13.71, 18.29, 22.86, 27.43].map((y, i) => (
            <path key={i} fill="#B22234" d={`M0 ${y}h32v2.29H0z`} />
          ))}
          <path fill="#3C3B6E" d="M0 0h13.7v14.86H0z" />
        </>
      );
    case 'UK':
      return wrap(
        <>
          <path fill="#012169" d="M0 0h32v32H0z" />
          <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
          <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
          <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
          <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
        </>
      );
    case 'AU':
      return wrap(
        <>
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
        </>
      );
    case 'CN':
      return wrap(
        <>
          <path fill="#DE2910" d="M0 0h32v32H0z" />
          <path
            fill="#FFDE00"
            d="M6 5l1.6 4.9 5.1 0-4.1 3 1.6 4.9-4.2-3-4.2 3 1.6-4.9-4.1-3 5.1 0z"
          />
          <circle cx="15" cy="5" r="1.2" fill="#FFDE00" />
          <circle cx="19" cy="8" r="1.2" fill="#FFDE00" />
          <circle cx="19" cy="13" r="1.2" fill="#FFDE00" />
          <circle cx="15" cy="16" r="1.2" fill="#FFDE00" />
        </>
      );
    case 'IN':
      return wrap(
        <>
          <path fill="#FF9933" d="M0 0h32v10.7H0z" />
          <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
          <path fill="#138808" d="M0 21.3h32V32H0z" />
          <circle cx="16" cy="16" r="3" fill="none" stroke="#000080" strokeWidth="0.8" />
          <circle cx="16" cy="16" r="1" fill="#000080" />
        </>
      );
    case 'DE':
      return wrap(
        <>
          <path fill="#000" d="M0 0h32v10.7H0z" />
          <path fill="#D00" d="M0 10.7h32v10.6H0z" />
          <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
        </>
      );
    case 'FR':
      return wrap(
        <>
          <path fill="#0055A4" d="M0 0h10.7v32H0z" />
          <path fill="#FFF" d="M10.7 0h10.6v32H10.7z" />
          <path fill="#EF4135" d="M21.3 0H32v32H21.3z" />
        </>
      );
    case 'JP':
      return wrap(
        <>
          <path fill="#FFF" d="M0 0h32v32H0z" />
          <circle cx="16" cy="16" r="8" fill="#BC002D" />
        </>
      );
    case 'KR':
      return wrap(
        <>
          <path fill="#FFF" d="M0 0h32v32H0z" />
          <circle cx="16" cy="16" r="7" fill="#CD2E3A" />
          <path fill="#0047A0" d="M16 9a3.5 3.5 0 000 7 3.5 3.5 0 000-7z" />
        </>
      );
    default:
      return wrap(<path fill="#888" d="M0 0h32v32H0z" />);
  }
}

// ---------------------------------------------------------------------------
// CATEGORY ICONS
// ---------------------------------------------------------------------------
const categoryIcons: Record<string, any> = {
  sports: Trophy,
  canadian: Users,
  usa: Globe,
  'movies-vod': Film,
  'kids-family': Baby,
  international: Globe,
};

const HERO_FLAGS: CountryCode[] = ['CA', 'US', 'UK', 'AU'];

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------
type Props = { params: Promise<{ slug: string }> };

// ---------------------------------------------------------------------------
// STATIC PARAMS
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getChannelCategoryBySlug(resolvedParams.slug);

  if (!category) {
    return generateSEOMetadata('Channel Category Not Found');
  }

  const title = `${category.name} | IPTV Canada 4K Streaming 2026`;
  const description = `Watch ${category.name.toLowerCase()} on IPTV Canada — ${category.totalChannels.toLocaleString('en-CA')}+ live channels including ${category.channels.slice(0, 3).map((c) => c.name).join(', ')}.`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, absolute: title },
    description,
    keywords: category.keywords.join(', '),
    alternates: {
      canonical: `${SITE_URL}/channels/${category.slug}`,
      languages: {
        'en-CA': `${SITE_URL}/channels/${category.slug}`,
        'en-US': `${SITE_URL}/channels/${category.slug}`,
        'x-default': `${SITE_URL}/channels/${category.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/channels/${category.slug}`,
      type: 'website',
      locale: 'en_CA',
      siteName: BRAND,
      images: [
        {
          url: `${SITE_URL}/img/background.webp`,
          width: 1200,
          height: 630,
          alt: `${category.name} - ${BRAND} Channels`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/img/background.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default async function ChannelCategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = getChannelCategoryBySlug(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;
  const Icon = categoryIcons[category.slug] || Tv;

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/channels/${category.slug}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Channels', item: `${SITE_URL}/#channels` },
          { '@type': 'ListItem', position: 3, name: category.name, item: `${SITE_URL}/channels/${category.slug}` },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/channels/${category.slug}/#collection`,
        url: `${SITE_URL}/channels/${category.slug}`,
        name: `${category.name} | ${BRAND}`,
        description: category.description,
        inLanguage: 'en-CA',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'ItemList',
        name: `${category.name} Channels`,
        numberOfItems: category.channels.length,
        itemListElement: category.channels.map((ch, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: ch.name,
          description: ch.description,
        })),
      },
      {
        '@type': 'Product',
        name: `${BRAND} — ${category.name}`,
        image: `${SITE_URL}/img/background.webp`,
        description: category.description,
        brand: { '@type': 'Brand', name: BRAND },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'CAD',
          lowPrice: '50.00',
          highPrice: '250.00',
          offerCount: '7',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/pricing`,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/channels/${category.slug}/#faq`,
        mainEntity: category.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF] overflow-hidden">

      <script
        type="application/ld+json"
        id="channel-category-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* ==========================================================
          HERO
      ========================================================== */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D32F2F]/10 blur-[140px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(to right, #D32F2F 1px, transparent 1px), linear-gradient(to bottom, #D32F2F 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FFFFFF]/50 flex-wrap">
            <Link href="/" className="hover:text-[#D32F2F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#FFFFFF]/80">Channels</span>
            <span>/</span>
            <span className="text-[#D32F2F]">{category.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#D32F2F] px-4 py-2 rounded-full mb-6 shadow-lg">
            <Icon className="w-4 h-4 text-[#FFFFFF]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
              Live Stream Hub 🍁
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none whitespace-normal break-words">
            {category.name} <br className="hidden sm:block" />
            <span className="text-[#D32F2F]">Channels</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/75 font-bold max-w-3xl mx-auto leading-relaxed mb-6">
            {category.description}
          </p>

          {/* Hero flags */}
          <div className="w-full max-w-2xl mx-auto my-6 px-3 py-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center gap-3 sm:gap-6 overflow-x-auto shadow-inner">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#FFFFFF]/60 shrink-0">
              Available in:
            </span>
            <div className="flex items-center gap-3 sm:gap-5 shrink-0">
              {HERO_FLAGS.map((code, i) => (
                <div
                  key={code}
                  className="flex items-center gap-1.5 group cursor-default transition-transform hover:scale-105"
                >
                  <CountryFlag country={code} size="md" uid={`hero-${i}`} />
                  <span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF] group-hover:text-[#D32F2F] transition-colors">
                    {code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-[#FFFFFF]/70 font-black uppercase tracking-widest mt-6">
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Zap className="w-4 h-4 text-[#D32F2F]" /> {category.totalChannels.toLocaleString('en-CA')}+ Channels
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#D32F2F]" /> Anti-Freeze 60FPS
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Activity className="w-4 h-4 text-[#D32F2F]" /> 99.9% Server Uptime
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:bg-[#9A0007] transition-transform hover:scale-105 shadow-xl"
            >
              Choose a Plan
            </Link>
            <a
              href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi ${BRAND}, I'd like a free 24-hour trial for the ${category.name} package.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#f2ebeb] text-[#D32F2F] font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
            >
              Free 24h Trial
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================
          CHANNELS GRID
      ========================================================== */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight">
              Available <span className="text-[#D32F2F]">{category.name}</span>
            </h2>
            <p className="text-[#FFFFFF]/70 font-bold text-sm sm:text-base mt-2">
              Every channel below streams in FHD or 4K with low latency and 7-day catch-up.
            </p>
          </div>
          <div className="text-xs uppercase font-black tracking-widest text-[#FFFFFF]/60 bg-white/5 px-4 py-2 rounded-xl border border-white/10 w-fit">
            Automatic EPG TV Guide Included
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.channels.map((channel, idx) => (
            <div
              key={idx}
              className="group relative bg-[#f2ebeb] border-2 border-[#D32F2F]/20 rounded-2xl overflow-hidden hover:border-[#D32F2F] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(211,47,47,0.2)] transition-all duration-500 flex flex-col"
            >
              {/* Top row — Quality + Popular + Country flag */}
              <div className="flex items-start justify-between gap-2 p-4 pb-2">
                <div className="flex flex-col items-start gap-1.5">
                  <span className="px-2.5 py-1 bg-[#D32F2F] text-[#FFFFFF] text-[10px] font-black uppercase tracking-wider rounded-md shadow-sm">
                    {channel.quality}
                  </span>
                  {channel.popular && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#0a0a0c] text-[#FFFFFF] text-[9px] font-black uppercase tracking-wider rounded-md shadow-sm">
                      <Star className="w-2.5 h-2.5 fill-[#D32F2F] text-[#D32F2F]" />
                      Popular
                    </span>
                  )}
                </div>
                <CountryFlag country={channel.country} size="md" uid={`card-${idx}`} />
              </div>

              {/* Icon + Name */}
              <div className="px-4 flex items-start gap-3 mb-2">
                <div className="w-11 h-11 rounded-xl bg-[#0a0a0c] flex items-center justify-center shrink-0 group-hover:bg-[#D32F2F] transition-colors shadow-md">
                  <Tv className="w-5 h-5 text-[#FFFFFF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-[#0a0a0c] text-base uppercase tracking-tight leading-tight">
                    {channel.name}
                  </h3>
                  {channel.genre && (
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#D32F2F] mt-0.5">
                      {channel.genre}
                    </p>
                  )}
                </div>
              </div>

              {/* Description + Why watch */}
              <div className="px-4 pb-4 flex flex-col flex-1">
                <p className="text-[#0a0a0c]/80 text-xs font-bold leading-relaxed mb-3">
                  {channel.description}
                </p>

                {channel.whyWatch && (
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#D32F2F]/5 border border-[#D32F2F]/20 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#D32F2F] shrink-0 mt-0.5" />
                    <p className="text-[11px] font-black text-[#D32F2F] leading-snug">
                      {channel.whyWatch}
                    </p>
                  </div>
                )}

                <div className="mt-auto pt-3 border-t border-[#0a0a0c]/10 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-[#D32F2F]">
                  <span>✓ 50/60 FPS Smooth</span>
                  <span>7-Day Catch-Up</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================================
          WHY + TRUST + FAQ + CTA
      ========================================================== */}
      <section className="py-16 bg-[#0a0a0c] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight mb-4">
              Why stream {category.name} with {BRAND}?
            </h2>
            <div className="text-[#0a0a0c]/85 font-medium text-sm sm:text-base leading-relaxed space-y-4">
              <p>{category.longDescription}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-[#D32F2F] transition-colors">
              <Cpu className="w-8 h-8 text-[#D32F2F] mx-auto mb-2" />
              <h3 className="font-black text-sm uppercase text-[#FFFFFF]">H.265 / HEVC</h3>
              <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                Sharp 4K picture with minimal data usage
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-[#D32F2F] transition-colors">
              <MonitorSmartphone className="w-8 h-8 text-[#D32F2F] mx-auto mb-2" />
              <h3 className="font-black text-sm uppercase text-[#FFFFFF]">Universal Compatibility</h3>
              <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                Smart TV, Firestick, Android, Apple TV & PC
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-[#D32F2F] transition-colors">
              <ShieldCheck className="w-8 h-8 text-[#D32F2F] mx-auto mb-2" />
              <h3 className="font-black text-sm uppercase text-[#FFFFFF]">Anti-Freeze Load Balancing</h3>
              <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                No buffering during peak viewing hours
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-8 text-center">
              Frequently Asked Questions about <span className="text-[#D32F2F]">{category.name}</span>
            </h2>

            <div className="space-y-4">
              {category.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-2xl p-6 shadow-xl">
                  <h3 className="text-base sm:text-lg font-black text-[#0a0a0c] uppercase tracking-tight mb-3 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-[#0a0a0c]/85 text-sm font-medium leading-relaxed pl-7 border-l-4 border-[#D32F2F] ml-1 py-1">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border-2 border-[#D32F2F]/30 bg-gradient-to-br from-[#D32F2F] via-[#9A0007] to-[#D32F2F] p-8 md:p-10 text-center shadow-2xl mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-4">
                Ready to Watch {category.name}?
              </h3>
              <p className="text-[#FFFFFF]/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
                Message our Canadian team on WhatsApp — we'll activate IBO Player Pro for you and set up your subscription in under 10 minutes.
              </p>
              <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hi ${BRAND}, I'd like to subscribe to the ${category.name} package.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#f2ebeb]"
              >
                <MessageCircle className="w-5 h-5 text-[#D32F2F]" />
                Get Started on WhatsApp
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center items-center my-10">
            <ShareButtons
              title={`${category.name} - ${BRAND}`}
              url={`${SITE_URL}/channels/${category.slug}`}
            />
          </div>

          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="text-xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 text-center">
              Explore Other Channel Packages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {channelsData
                .filter((c) => c.slug !== category.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/channels/${cat.slug}`}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#D32F2F] hover:bg-white/10 transition-all text-center group"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase text-[#FFFFFF] group-hover:text-[#D32F2F] transition-colors block">
                      {cat.name}
                    </span>
                    <span className="text-[10px] text-[#FFFFFF]/50 font-bold mt-1 block">
                      {cat.totalChannels.toLocaleString('en-CA')}+ Channels
                    </span>
                  </Link>
                ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#D32F2F] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}