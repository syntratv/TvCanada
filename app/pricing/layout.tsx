// app/pricing/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS — enforce char limits
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// SEO CONSTANTS
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/pricing`;

// ---------------------------------------------------------------------------
// SEO STRINGS
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `IPTV Canada Pricing & Plans — 4K Streaming from CA$50`
);

const PAGE_DESCRIPTION = clampDescription(
  `Compare IPTV Canada plans from CA$50. 3, 6, or 12-month subscriptions. 20,000+ live channels in 4K, no contract, instant activation.`
);

// ---------------------------------------------------------------------------
// METADATA CONFIGURATION
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
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
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} Pricing — 4K IPTV Subscription Plans`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  category: 'entertainment',
  keywords: [
    CONSTANTS.FOCUS_KEYWORD,
    CONSTANTS.SECONDARY_FOCUS_KEYWORD,
    'iptv canada pricing',
    'iptv canada plans',
    'iptv canada subscription',
    'iptv canada cost',
    'buy iptv canada',
    'iptv subscription canada',
    '4k iptv canada',
    'iptv free trial canada',
    'iptv firestick canada',
    'sportsnet iptv canada',
    'tsn iptv canada',
    'nhl live streaming iptv',
    'smart tv iptv app canada',
  ],
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMAS — Includes Instant Digital Shipping Specs
// ---------------------------------------------------------------------------
const PricingPageSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  // Common Digital Delivery Schema Specs
  const digitalDeliveryDetails = {
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: CONSTANTS.CURRENCY,
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
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'CA',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 7,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn',
    },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: BRAND,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        email: CONSTANTS.CONTACT?.email || '',
        telephone: CONSTANTS.CONTACT?.phone || '',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT?.phone || '',
          email: CONSTANTS.CONTACT?.email || '',
          contactType: 'customer service',
          availableLanguage: ['English', 'French'],
          areaServed: 'CA',
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: Object.values(CONSTANTS.SOCIALS ?? {}),
      },

      // PRODUCT - Pricing Offers with Shipping/Delivery Added
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: `${BRAND} IPTV Subscription Plans`,
        alternateName: CONSTANTS.FOCUS_KEYWORD,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} offers premium Canadian IPTV plans starting at CA$50 with 20,000+ live channels, 60,000+ VOD titles in 4K Ultra HD, and instant activation.`,
        brand: {
          '@type': 'Brand',
          '@id': `${SITE_URL}/#brand`,
          name: BRAND,
        },
        sku: 'IPTV-CA-PRICING',
        category: 'Streaming Service',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '1255',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: '1 Screen - 3 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '50.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `3-month ${BRAND} subscription on 1 device with 20,000+ live channels and 60,000+ VODs.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 6 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '75.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6-month ${BRAND} subscription on 1 device with 20,000+ live channels and 60,000+ VODs.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '1 Screen - 12 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '99.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12-month ${BRAND} subscription on 1 device with 20,000+ live channels and 60,000+ VODs.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 6 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '115.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6-month ${BRAND} subscription on 2 devices with 20,000+ live channels and 60,000+ VODs.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Screens - 12 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '175.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12-month ${BRAND} subscription on 2 devices with 20,000+ live channels and 60,000+ VODs.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 6 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '150.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6-month ${BRAND} subscription on 3 devices with 20,000+ live channels and 60,000+ VODs.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Screens - 12 Months',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '250.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12-month ${BRAND} subscription on 3 devices with 20,000+ live channels and 60,000+ VODs.`,
            ...digitalDeliveryDetails,
          },
        ],
      },

      // FAQ SECTION
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Which payment methods does ${BRAND} accept?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${BRAND} accepts Interac e-Transfer, all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrencies (Bitcoin, Ethereum, USDT). All payments are processed securely via encrypted 256-bit SSL connections.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Can I upgrade or modify my subscription later?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, you can upgrade your streaming subscription at any time to multiple screens or a longer period. Simply contact our WhatsApp help desk and we'll adjust your account instantly.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Am I tied to a contract or automatic renewal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `No, absolutely not. There are no long-term contracts or automatic renewals. All plans are prepaid one-time payments and stop automatically after your chosen period ends.`,
            },
          },
          {
            '@type': 'Question',
            name: 'What happens when my subscription expires?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `We'll send you a reminder before your subscription expires. You can then easily renew it yourself. If you don't renew, the service stops automatically with no further obligation.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer a money-back guarantee?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, we offer a full 7-day money-back guarantee on all plans. If you experience ongoing server issues that we cannot resolve, we'll refund your full purchase amount immediately.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use the service on multiple devices simultaneously?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, depending on your chosen plan. Our standard subscription is for 1 simultaneous stream, but you can select a 2- or 3-screen multi-room option during checkout to watch in multiple rooms at once.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Are there discounts for longer subscriptions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, our 12-month plans offer the highest savings (up to 50% off compared to monthly contracts) including VIP server routing and priority support across Canada.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="pricing-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// RESPONSIVE PRICING LAYOUT
// ---------------------------------------------------------------------------
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <PricingPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}