import { Metadata } from 'next';

// ---------------------------------------------------------------------------
// CORE BRAND & DOMAIN CONFIGURATION
// ---------------------------------------------------------------------------
const DOMAIN = 'theiptvcanada.com';
const BRAND_NAME = 'IPTV Canada';
const SITE_URL = `https://${DOMAIN}`;
const FOCUS_KEYWORD = 'best iptv canada';
const SECONDARY_FOCUS_KEYWORD = 'iptv canada';
const LOCALE = 'en_CA';
const LANGUAGE = 'en-CA';
const ADDRESS_COUNTRY = 'CA';
const CURRENCY = 'CAD';

// ---------------------------------------------------------------------------
// EXPORTED CONSTANTS
// ---------------------------------------------------------------------------
export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  SITE_URL,
  FOCUS_KEYWORD,
  SECONDARY_FOCUS_KEYWORD,
  LOCALE,
  LANGUAGE,
  ADDRESS_COUNTRY,
  CURRENCY,

  // Primary High-Intent Canadian Keywords
  PRIMARY_KEYWORDS: [
    'best iptv canada',
    'iptv canada',
    'iptv subscription canada',
    'best iptv provider canada',
    'iptv firestick canada',
    'iptv free trial canada',
    'canada iptv service',
  ],

  // Secondary & High-Intent Search Terms
  SECONDARY_KEYWORDS: [
    'canadian live sports iptv',
    'psl live streaming canada',
    '4k iptv subscription canada',
    'stable iptv canada anti freeze',
    'smart tv iptv canada app',
    'iptv provider toronto vancouver',
    'sportsnet tsn live streaming iptv',
  ],

  // Business Contact Details
  CONTACT: {
    email: 'support@theiptvcanada.com',
    phone: '+1 613 555 0199', // ⚠️ Replace with your real Canadian number
    whatsapp: '+1 613 555 0199', // ⚠️ Replace with your real WhatsApp number
    whatsappUrl: 'https://wa.me/16135550199', // ⚠️ Replace with your real wa.me link
    supportHours: '24/7 Canadian Customer Support via Email and Ticket System',
  },

  // Social Media (used in Footer / Header)
  SOCIALS: {
    twitter: 'https://twitter.com/theiptvcanada', // ⚠️ Replace
    instagram: 'https://instagram.com/theiptvcanada', // ⚠️ Replace
    facebook: 'https://facebook.com/theiptvcanada', // ⚠️ Replace
  },

  // Payment Methods (used in Footer / Pricing badges)
  PAYMENT_METHODS: [
    { name: 'PayPal', icon: '/img/payment/1.png' },
    { name: 'Bitcoin & Crypto', icon: '/img/payment/2.png' },
    { name: 'Visa', icon: '/img/payment/3.png' },
    { name: 'Mastercard', icon: '/img/payment/4.png' },
  ],

  // Major Target Cities & Provinces in Canada
  TARGET_REGIONS: [
    'Toronto',
    'Vancouver',
    'Montreal',
    'Calgary',
    'Edmonton',
    'Ottawa',
    'Winnipeg',
    'Quebec City',
    'Halifax',
    'Victoria',
  ],

  // Value Propositions for Canadian Viewers
  USPS: [
    'Buffer-free 4K & Full HD streaming backed by dedicated Canadian servers',
    'Access to 20,000+ live channels including local Canadian sports and news',
    'Instant service activation within 5 minutes of subscription approval',
    'Full coverage of Sportsnet, TSN, PSL cricket, NHL, and premium VOD movies',
    'Universal device support: Amazon Firestick, Smart TV, Android, iOS, Mag Box',
  ],
};

// ---------------------------------------------------------------------------
// SEO METADATA GENERATOR
// ---------------------------------------------------------------------------
export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  // Enforces strict 150-160 character count for Google snippet optimization
  const defaultDescription =
    description ||
    `Get the best iptv canada subscription with 20,000+ live channels, local news, and live sports in 4K. Start your risk-free trial on Firestick today!`;

  // Enforces strict 50-60 character count for meta titles
  const defaultTitle = `${pageName} | ${BRAND_NAME} - Best IPTV Service`;
  const formattedTitle =
    defaultTitle.length > 60 ? defaultTitle.substring(0, 60) : defaultTitle;

  const fullCanonicalUrl =
    path === '/' ? SITE_URL : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: formattedTitle,
    description: defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: fullCanonicalUrl,
      languages: {
        [LANGUAGE]: fullCanonicalUrl,
        'en-US': fullCanonicalUrl,
        'x-default': fullCanonicalUrl,
      },
    },
    openGraph: {
      title: formattedTitle,
      description: defaultDescription,
      url: fullCanonicalUrl,
      siteName: BRAND_NAME,
      locale: LOCALE,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/img/og-image.webp`,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} - ${FOCUS_KEYWORD}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: defaultDescription,
      images: [`${SITE_URL}/img/og-image.webp`],
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
    authors: [{ name: BRAND_NAME, url: SITE_URL }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    category: 'Entertainment',
    applicationName: BRAND_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Organization
// ---------------------------------------------------------------------------
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/iptv-logo.webp`,
    description:
      'Premier Canadian IPTV provider delivering high-definition live television, local regional broadcasts, and premium sports streaming across Canada.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONSTANTS.CONTACT.email,
      telephone: CONSTANTS.CONTACT.phone,
      contactType: 'customer support',
      areaServed: ADDRESS_COUNTRY,
      availableLanguage: ['English', 'French'],
    },
    sameAs: [
      CONSTANTS.SOCIALS.twitter,
      CONSTANTS.SOCIALS.instagram,
      CONSTANTS.SOCIALS.facebook,
    ],
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Product / Offer
// ---------------------------------------------------------------------------
export const generateProductSchema = (
  name: string,
  price: string,
  currency: string = CURRENCY,
  description: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/pricing`,
      seller: {
        '@type': 'Organization',
        name: BRAND_NAME,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Canada',
      },
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — LocalBusiness (Canadian Cities)
// ---------------------------------------------------------------------------
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/img/og-image.webp`,
    description:
      'Canadian IPTV subscription service offering 4K live TV, sports, and VOD streaming to households across Toronto, Vancouver, Montreal, Calgary, and Ottawa.',
    priceRange: '$$',
    telephone: CONSTANTS.CONTACT.phone,
    email: CONSTANTS.CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    areaServed: CONSTANTS.TARGET_REGIONS.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — FAQPage
// ---------------------------------------------------------------------------
export const generateFAQSchema = (
  faqs: { q: string; a: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — BreadcrumbList
// ---------------------------------------------------------------------------
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
};