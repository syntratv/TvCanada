// app/setup/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/setup`;

// ---------------------------------------------------------------------------
// SEO STRINGS — locked (Title 50–59, Desc 120–130, no duplicates)
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `Setup Guide | ${BRAND} Firestick, Smart TV & Mobile`
); // = 53 chars ✅

const PAGE_DESCRIPTION = clampDescription(
  `IPTV Canada setup guide for Firestick, Smart TV, Android & iOS. Install IBO Player Pro in 10 min with free WhatsApp support.`
); // = 127 chars ✅

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLE,
    // Prevent parent template from appending "| IPTV Canada" — no duplicate
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
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} Setup Guide - Firestick, Smart TV & Mobile Installation`,
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
    'iptv setup guide canada',
    'iptv firestick setup',
    'iptv smart tv install',
    'ibo player pro setup',
    'best iptv canada',
    'iptv canada',
    'iptv installation canada',
    'how to install iptv',
    'iptv firestick canada',
    'iptv android tv setup',
    'iptv apple tv install',
    'iptv mag box setup',
    'iptv xtream codes setup',
    'iptv m3u playlist guide',
    'smart tv iptv app canada',
  ],
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA — HowTo + FAQPage in a single @graph
// ---------------------------------------------------------------------------
const SetupPageSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ---------------------------------------------------------
      // HOW TO — Google rich result for setup guide
      // ---------------------------------------------------------
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: `How to Set Up ${BRAND} on Any Device`,
        description: `Complete step-by-step installation guide for ${BRAND} on Firestick, Smart TV, Android, Apple TV, and PC/Mac.`,
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'CAD',
          value: '50.00',
        },
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/img/structer.webp`,
          width: 1200,
          height: 630,
        },
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Smart TV, Firestick, Android TV, Apple TV, or PC/Mac',
          },
          {
            '@type': 'HowToSupply',
            name: 'Stable internet connection (minimum 15 Mbps)',
          },
          {
            '@type': 'HowToSupply',
            name: `Active ${BRAND} subscription`,
          },
        ],
        tool: [
          {
            '@type': 'HowToTool',
            name: 'IBO Player Pro (recommended IPTV player)',
          },
          {
            '@type': 'HowToTool',
            name: 'WhatsApp (for 24/7 setup support)',
          },
        ],
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Choose Your Plan',
            text: `Visit the pricing page and select a ${BRAND} subscription plan — 3, 6, or 12 months with 1, 2, or 3 simultaneous screens.`,
            url: `${SITE_URL}/pricing`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Contact Support on WhatsApp',
            text: 'Message our Canadian support team on WhatsApp. We confirm pricing in CAD, send a secure payment link, and provide your credentials.',
            url: CONSTANTS.CONTACT.whatsappUrl,
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Download IBO Player Pro',
            text: 'Install IBO Player Pro — the fastest and most stable IPTV player for Firestick, Smart TVs, Apple devices, and PC/Mac.',
            url: 'https://iboplayer.pro/',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Choose Auto or Manual Setup',
            text: 'Choose Auto Setup (support activates remotely using your Device Key) or Manual Setup (enter the M3U URL or Xtream Codes credentials provided by support).',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Load Content (1–2 Minutes)',
            text: 'Once activated, IBO Player Pro automatically loads your full channel list, VOD library, and 7-day EPG guide.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Start Streaming',
            text: 'Enjoy instant access to 30,000+ live channels, 50,000+ movies and TV shows, and major live sports events in 4K quality.',
          },
        ],
      },
      // ---------------------------------------------------------
      // FAQ — matches visible FAQ on setup/page.tsx
      // ---------------------------------------------------------
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I receive my login details after purchasing a plan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Everything is handled live over WhatsApp. Once you confirm your plan and complete payment, our agent sends your M3U URL and Xtream Codes credentials directly in the chat — usually within minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which IPTV player do you recommend?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `We recommend IBO Player Pro for the fastest channel zapping, lowest RAM usage, and best 4K performance across Firestick, Smart TVs, Apple devices, and PC/Mac. It includes a built-in 7-day free trial.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need to activate IBO Player Pro separately?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The activation service is included free with every subscription. Choose Auto Setup (send us your Device Key and we activate remotely) or Manual Setup (enter M3U / Xtream codes yourself).',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does the full setup take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most customers are streaming within 10 minutes. Installing IBO Player Pro takes 2 minutes, activation 1–2 minutes, and content loading 1–2 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use my login credentials on multiple devices?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — install the app on unlimited devices. The number of simultaneous streams depends on your plan (1 screen for Standard, 2 or 3 screens for Multi-room).',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I do if I get a login error in IBO Player Pro?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Confirm you selected the Xtream Codes API method (not M3U) and that there are no extra spaces in your username or password. If it persists, message us on WhatsApp — most issues resolve within 2 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'What internet speed do I need for 4K streaming?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For 4K Ultra HD we recommend 30 Mbps minimum. Full HD 1080p runs smoothly on 15 Mbps. Anti-freeze server technology adapts to your connection speed automatically.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a VPN to use your service?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No — our Canadian servers are optimized and secure. If your internet provider applies streaming throttling during peak hours, you can enable a VPN without issues.',
            },
          },
        ],
      },
      // ---------------------------------------------------------
      // BREADCRUMB
      // ---------------------------------------------------------
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Setup Guide',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="setup-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// SETUP LAYOUT
// ---------------------------------------------------------------------------
export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SetupPageSchema />
      {children}
    </>
  );
}