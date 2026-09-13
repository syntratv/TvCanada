// app/reseller/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// ✅ MATCHES seo.ts — SITE_URL already includes https://
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const YEAR = new Date().getFullYear();
const PAGE_URL = `${SITE_URL}/reseller`;

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// ---------------------------------------------------------------------------
// SEO STRINGS — locked to safe SERP lengths
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `IPTV Reseller Canada | Start at US$300 | ${BRAND}`
);

const PAGE_DESCRIPTION = clampDescription(
  `Become an IPTV reseller in Canada from US$300. Buy wholesale credits, sell yearly at US$50–90, earn up to US$60 profit per sale. Instant panel access.`
);

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'iptv reseller canada',
    'become iptv reseller',
    'iptv reseller panel canada',
    'iptv reseller program',
    'best iptv reseller canada',
    'iptv credits canada',
    'iptv wholesale canada',
    'iptv reseller business',
    'iptv reseller panel',
    'reseller iptv subscription',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-CA': PAGE_URL,
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: CONSTANTS.LOCALE,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/blog/article-reseller/cover.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} IPTV Reseller Program Canada ${YEAR}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/blog/article-reseller/cover.webp`],
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
  category: 'business',
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMAS
// ---------------------------------------------------------------------------
const ResellerSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ---------------------------------------------------------
      // WEBPAGE
      // ---------------------------------------------------------
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `IPTV Reseller Program Canada | ${BRAND}`,
        description: PAGE_DESCRIPTION,
        // ✅ FIXED: LANG → LANGUAGE
        inLanguage: CONSTANTS.LANGUAGE,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
        primaryImageOfPage: { '@id': `${PAGE_URL}/#primaryimage` },
      },

      // ---------------------------------------------------------
      // PRIMARY IMAGE
      // ---------------------------------------------------------
      {
        '@type': 'ImageObject',
        '@id': `${PAGE_URL}/#primaryimage`,
        url: `${SITE_URL}/img/blog/article-reseller/cover.webp`,
        contentUrl: `${SITE_URL}/img/blog/article-reseller/cover.webp`,
        width: 1200,
        height: 630,
        caption: `${BRAND} IPTV Reseller Program Canada ${YEAR}`,
      },

      // ---------------------------------------------------------
      // BREADCRUMB
      // ---------------------------------------------------------
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Reseller Program',
            item: PAGE_URL,
          },
        ],
      },

      // ---------------------------------------------------------
      // SERVICE — semantically correct for B2B offering
      // ---------------------------------------------------------
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}/#service`,
        name: `IPTV Reseller Program Canada ${YEAR}`,
        description: `Become an IPTV reseller in Canada. Buy wholesale credits, sell yearly subscriptions at US$50 to US$90, and earn up to US$60 profit per customer.`,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: {
          '@type': 'Country',
          name: 'Canada',
        },
        serviceType: 'IPTV Reseller Panel',
        offers: [
          {
            '@type': 'Offer',
            name: 'Starter Reseller Package (10 Credits)',
            price: '300.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            validFrom: new Date().toISOString().split('T')[0],
            description:
              '10 reseller credits, full panel access, 24/7 WhatsApp support. Credits never expire.',
          },
          {
            '@type': 'Offer',
            name: 'Growth Reseller Package (20 Credits)',
            price: '550.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            validFrom: new Date().toISOString().split('T')[0],
            description:
              '20 reseller credits, priority support, API access, credits never expire.',
          },
          {
            '@type': 'Offer',
            name: 'Pro Reseller Package (30 Credits)',
            price: '750.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            validFrom: new Date().toISOString().split('T')[0],
            description:
              '30 reseller credits, dedicated support, white label option, full API access.',
          },
        ],
      },

      // ---------------------------------------------------------
      // PRODUCT + AGGREGATEOFFER — enables rich results
      // ---------------------------------------------------------
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: `IPTV Reseller Program Canada`,
        description: `Wholesale IPTV reseller credits for Canada. Buy in bulk, resell at your own price.`,
        brand: {
          '@type': 'Brand',
          '@id': `${SITE_URL}/#brand`,
          name: BRAND,
        },
        category: 'Business Service',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '300.00',
          highPrice: '750.00',
          offerCount: '3',
          availability: 'https://schema.org/InStock',
          url: PAGE_URL,
        },
      },

      // ---------------------------------------------------------
      // FAQ
      // ---------------------------------------------------------
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What exactly is an IPTV reseller panel?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A reseller panel is a private dashboard that lets you create and manage IPTV subscriptions for your own customers. You buy credits from us in bulk, then use those credits to activate yearly, monthly, or trial subscriptions for anyone you sell to.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much can I realistically earn as an IPTV reseller in Canada?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Customers typically pay between US$50 and US$90 per year. Your wholesale cost starts around US$30 per credit, so your profit per sale ranges from US$20 to US$60. Sell 10 subscriptions at US$70 and you have earned roughly US$400 profit from a US$300 investment.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need technical skills to become a reseller?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The reseller panel is designed to be simple. If you can use WhatsApp and a web browser, you can run a reseller business. We provide onboarding guidance over WhatsApp any time you get stuck.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do the reseller credits expire?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Your credits stay in your account indefinitely. There is no expiration date, no monthly minimum, and no pressure to sell quickly.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which currencies can I sell in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can sell to your customers in any currency you prefer. Your wholesale cost with us is fixed in USD. Your retail price is completely up to you, so you control your margin.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="reseller-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// RESELLER LAYOUT
// ---------------------------------------------------------------------------
export default function ResellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResellerSchema />
      {children}
    </>
  );
}