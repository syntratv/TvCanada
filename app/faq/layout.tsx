import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/faq`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(`${BRAND} FAQ | Setup & Guides, Channels & Billing Help`); // 49 chars

const PAGE_DESCRIPTION = clampDescription(
  `Get instant answers about ${BRAND} subscriptions, 4K streaming, Smart TV setup, and secure CAD payments. 24/7 WhatsApp support.`
); // ~120 chars

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'iptv canada faq',
    'iptv canada setup help',
    'best iptv canada',
    'iptv canada',
    'iptv subscription canada',
    'iptv smart tv canada',
    'iptv firestick canada',
    'iptv canada payment',
    'iptv canada support',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
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
        alt: `${BRAND} FAQ - Help Center & Answers`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
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
  category: 'entertainment',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}