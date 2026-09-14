// components/PageSchemas.tsx
import React from 'react';

export function ProductSchema() {
  const commonOfferDefaults = {
    validFrom: "2026-01-01",
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "CA",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0.00",
        "currency": "CAD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "CA"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 0,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 0,
          "unitCode": "DAY"
        }
      }
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://theiptvcanada.com/#product",
    "name": "IPTV Canada Premium Subscription",
    "sku": "IPTV-CA-PREMIUM",
    "category": "Streaming Service",
    "description": "IPTV Canada delivers premium 4K live TV and on-demand media across Canada with 99.9% server uptime and instant 5-minute activation.",
    "image": {
      "@type": "ImageObject",
      "@id": "https://theiptvcanada.com/#primaryimage",
      "url": "https://theiptvcanada.com/img/structer.webp",
      "contentUrl": "https://theiptvcanada.com/img/structer.webp",
      "width": { "@type": "QuantitativeValue", "value": 1200 },
      "height": { "@type": "QuantitativeValue", "value": 630 },
      "caption": "IPTV Canada - 4K Ultra HD Streaming Service",
      "representativeOfPage": true
    },
    "brand": {
      "@type": "Brand",
      "name": "IPTV Canada"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1255",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "1 Screen - 3 Months",
        "price": "50.00",
        "priceCurrency": "CAD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://theiptvcanada.com/pricing",
        ...commonOfferDefaults
      },
      {
        "@type": "Offer",
        "name": "1 Screen - 6 Months",
        "price": "75.00",
        "priceCurrency": "CAD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://theiptvcanada.com/pricing",
        ...commonOfferDefaults
      },
      {
        "@type": "Offer",
        "name": "1 Screen - 12 Months",
        "price": "99.00",
        "priceCurrency": "CAD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://theiptvcanada.com/",
        ...commonOfferDefaults
      },
      {
        "@type": "Offer",
        "name": "2 Screens - 6 Months",
        "price": "115.00",
        "priceCurrency": "CAD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://theiptvcanada.com/",
        ...commonOfferDefaults
      },
      {
        "@type": "Offer",
        "name": "2 Screens - 12 Months",
        "price": "175.00",
        "priceCurrency": "CAD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://theiptvcanada.com/",
        ...commonOfferDefaults
      },
      {
        "@type": "Offer",
        "name": "3 Screens - 6 Months",
        "price": "150.00",
        "priceCurrency": "CAD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://theiptvcanada.com/pricing",
        ...commonOfferDefaults
      },
      {
        "@type": "Offer",
        "name": "3 Screens - 12 Months",
        "price": "250.00",
        "priceCurrency": "CAD",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://theiptvcanada.com/pricing",
        ...commonOfferDefaults
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

export function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast is activation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Activation is completed automatically within 5 minutes after payment verification."
        }
      },
      {
        "@type": "Question",
        "name": "What devices are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our service works on Smart TVs (Samsung, LG), Android TV, Amazon Firestick, MAG boxes, IPTV Smarters, Tivimate, iOS, Android, Windows, and macOS."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a VPN to use IPTV Canada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No VPN is required. Our servers are optimized for Canadian internet service providers (ISPs) to deliver smooth, buffer-free streaming."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use my subscription on multiple devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, depending on your plan. We offer 1, 2, and 3-screen options allowing simultaneous connections on different devices within your household."
        }
      },
      {
        "@type": "Question",
        "name": "What internet speed is recommended?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend a minimum download speed of 15 Mbps for HD content and 30 Mbps for stable 4K Ultra HD streaming."
        }
      },
      {
        "@type": "Question",
        "name": "What channels and VOD content are included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get access to over 20,000 live HD/4K channels, major sports packages, local Canadian networks, international channels, and a constantly updated library of 60,000+ VOD movies and TV shows."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept major credit cards, PayPal, Interac e-Transfer for Canadian customers, and select cryptocurrencies for secure transactions."
        }
      },
      {
        "@type": "Question",
        "name": "Is technical support available if I need help setting up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 customer support via live chat and email to guide you step-by-step through the installation process on any device."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}