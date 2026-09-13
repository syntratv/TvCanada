import type { Metadata, Viewport } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { CONSTANTS } from '@/lib/seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import Loading from './components/loading';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// ---------------------------------------------------------------------------
// SEO STRINGS
// ---------------------------------------------------------------------------
const BRAND = CONSTANTS.BRAND_NAME; // "IPTV Canada"

// Title = 56 chars
const SEO_TITLE = clampTitle(
  `${BRAND} | Premium 4K Ultra HD Streaming Service 2026`
);

// Meta description = 127 chars
const SEO_DESCRIPTION = clampDescription(
  `Get ${BRAND} - 20,000+ live channels & VOD movies in 4K with anti-freeze servers. Watch live sports & premium TV instantly!`
);

const SEO_OG_TITLE = SEO_TITLE;
const SEO_OG_DESCRIPTION = SEO_DESCRIPTION;
const SEO_TWITTER_TITLE = clampTitle(SEO_TITLE, 70);
const SEO_TWITTER_DESCRIPTION = clampDescription(SEO_DESCRIPTION, 200);

// ---------------------------------------------------------------------------
// FAQ DATA
// ---------------------------------------------------------------------------
const FAQ_DATA = [
  {
    q: 'What is IPTV and how does it work?',
    a: `IPTV stands for Internet Protocol Television. It allows you to stream live TV channels, sports, and on-demand movies over your internet connection rather than traditional cable or satellite. With ${BRAND}, you can stream directly in 4K resolution on your favourite Smart TV or mobile devices.`,
  },
  {
    q: `What makes ${BRAND} the top IPTV provider in Canada?`,
    a: `${BRAND} delivers maximum streaming stability with over 20,000 live channels and 60,000+ movies & TV series. Powered by anti-freeze server technology, you can enjoy live sports, news, and entertainment programmes in Ultra HD without buffering or interruptions.`,
  },
  {
    q: 'Which devices are compatible with your IPTV service?',
    a: 'Our IPTV service is compatible with virtually any streaming device: Samsung & LG Smart TVs, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, Windows PC, Mac, as well as MAG and Formuler set-top boxes.',
  },
  {
    q: 'How fast is my IPTV subscription activated?',
    a: 'Instantly after completing your order, your M3U playlist link and Xtream Codes credentials are generated automatically. You will receive your login details within 5 minutes via WhatsApp and email, complete with step-by-step setup instructions.',
  },
  {
    q: 'Can I request a free 24-hour IPTV trial first?',
    a: 'Yes, absolutely! You can contact us directly via WhatsApp on our website to request a free, no-obligation 24-hour trial to test our 4K channel quality, customised playlists, and server stability firsthand.',
  },
  {
    q: 'How do I install the IPTV app on my Smart TV?',
    a: 'Simply download an officially supported IPTV app such as IBO Player, TiviMate, Smart IPTV, or IPTV Smarters from your TV app store. Enter your M3U playlist URL or Xtream Codes credentials to start watching immediately.',
  },
];

// ---------------------------------------------------------------------------
// VIEWPORT
// ---------------------------------------------------------------------------
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0c',
};

// ---------------------------------------------------------------------------
// GLOBAL METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s | ${BRAND}`,
  },
  description: SEO_DESCRIPTION,
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  alternates: {
    canonical: './',
    languages: {
      'en-CA': SITE_URL,
      'en-US': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    title: SEO_OG_TITLE,
    description: SEO_OG_DESCRIPTION,
    url: SITE_URL,
    siteName: BRAND,
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} - Premium 4K HD Streaming Service`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TWITTER_TITLE,
    description: SEO_TWITTER_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/img/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon.ico',
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/img/favicons/safari-pinned-tab.svg',
        color: '#D32F2F',
      },
    ],
  },
  manifest: '/img/favicons/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: BRAND,
    statusBarStyle: 'black-translucent',
  },
  other: {
    'msapplication-TileColor': '#0a0a0c',
    'msapplication-TileImage': '/img/favicons/mstile-144x144.png',
    'msapplication-config': '/img/favicons/browserconfig.xml',
  },
  category: 'entertainment',
  keywords: [
    'best iptv canada',
    'iptv canada',
    `${BRAND} Canada`,
    'buy iptv canada',
    'iptv subscription canada',
    'iptv provider toronto',
    'iptv provider vancouver',
    'iptv provider montreal',
    'canadian iptv server',
    '4k iptv canada',
    'free iptv trial canada',
    'sportsnet iptv canada',
    'tsn iptv canada',
    'nhl live streaming iptv',
    'smart tv iptv app canada',
  ],
};

// ---------------------------------------------------------------------------
// UNIFIED JSON-LD SCHEMA
// ---------------------------------------------------------------------------
const CombinedSchema = () => {
  // -------------------------------------------------------------------------
  // Shared offer fields — applied to every Offer to satisfy Google's
  // recommendations and prevent GSC warnings.
  // -------------------------------------------------------------------------
  const sharedOfferFields = {
    priceCurrency: 'CAD',
    priceValidUntil: '2027-12-31',
    validFrom: '2026-01-01',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/pricing`,
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'CA',
      returnPolicyCategory:
        'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 7,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'CAD',
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'CA',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
    },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ---------------------------------------------------------
      // ORGANIZATION
      // ---------------------------------------------------------
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: { '@id': `${SITE_URL}/#primaryimage` },
        description: `${BRAND} is Canada's leading IPTV provider offering over 20,000 live channels and 60,000+ VOD titles in 4K Ultra HD with zero buffering.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['English', 'French'],
          areaServed: 'CA',
          contactOption: 'TollFree',
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      },

      // ---------------------------------------------------------
      // PRIMARY IMAGE
      // ---------------------------------------------------------
      {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#primaryimage`,
        url: `${SITE_URL}/img/structer.webp`,
        contentUrl: `${SITE_URL}/img/structer.webp`,
        width: { '@type': 'QuantitativeValue', value: 1200 },
        height: { '@type': 'QuantitativeValue', value: 630 },
        caption: `${BRAND} - 4K Ultra HD Streaming Service`,
        representativeOfPage: true,
      },

      // ---------------------------------------------------------
      // WEBSITE
      // ---------------------------------------------------------
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Premium 4K HD Streaming Service`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-CA',
      },

      // ---------------------------------------------------------
      // WEBPAGE
      // ---------------------------------------------------------
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: SEO_TITLE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        description: SEO_DESCRIPTION,
        inLanguage: 'en-CA',
        primaryImageOfPage: { '@id': `${SITE_URL}/#primaryimage` },
      },

      // ---------------------------------------------------------
      // PRODUCT — FIXED: brand is now a proper Brand object
      // ---------------------------------------------------------
      {
        '@type': 'Product',
        '@id': `${SITE_URL}/#product`,
        name: `${BRAND} Premium Subscription`,
        image: { '@id': `${SITE_URL}/#primaryimage` },
        description: `${BRAND} delivers premium 4K live TV and on-demand media across Canada with 99.9% server uptime and instant 5-minute activation.`,
        sku: 'IPTV-CA-PREMIUM',
        category: 'Streaming Service',
        brand: {
          '@type': 'Brand',
          name: BRAND,
          url: SITE_URL,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '2500',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: '1 Screen - 3 Months',
            price: '50.00',
            ...sharedOfferFields,
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 6 Months',
            price: '75.00',
            ...sharedOfferFields,
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 12 Months',
            price: '99.00',
            ...sharedOfferFields,
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 6 Months',
            price: '115.00',
            ...sharedOfferFields,
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 12 Months',
            price: '175.00',
            ...sharedOfferFields,
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 6 Months',
            price: '150.00',
            ...sharedOfferFields,
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 12 Months',
            price: '250.00',
            ...sharedOfferFields,
          },
        ],
      },

      // ---------------------------------------------------------
      // FAQ
      // ---------------------------------------------------------
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        isPartOf: { '@id': `${SITE_URL}/#webpage` },
        mainEntity: FAQ_DATA.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="unified-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// ROOT LAYOUT
// ---------------------------------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-[#0a0a0c] text-[#f2ebeb] selection:bg-[#D32F2F] selection:text-white`}
        suppressHydrationWarning
      >
        <CombinedSchema />

        <Loading />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />

        <GoogleAnalytics gaId="G-XKHJ5EK4VW" />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}