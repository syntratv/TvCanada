'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

// Export the FAQs so they can be reused for JSON-LD schema in page.tsx / layout.tsx
export const faqs = [
  {
    q: 'What is IPTV and how does it work?',
    a: `IPTV stands for Internet Protocol Television. It allows you to stream live TV channels, sports, and on-demand movies over your internet connection rather than traditional cable or satellite. With ${CONSTANTS.BRAND_NAME}, you can stream directly in 4K resolution on your favourite Smart TV or mobile devices.`,
  },
  {
    q: `What makes ${CONSTANTS.BRAND_NAME} the top IPTV provider in Canada?`,
    a: `${CONSTANTS.BRAND_NAME} delivers maximum streaming stability with over 20,000 live channels and 60,000+ movies & TV series. Powered by anti-freeze server technology, you can enjoy live sports, news, and entertainment programmes in Ultra HD without buffering or interruptions.`,
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0a0a0c] relative overflow-hidden"
      aria-label={`Frequently Asked Questions about ${CONSTANTS.BRAND_NAME}`}
    >
      {/* Ambient Red Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D32F2F]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#9A0007]/10 blur-[100px] rounded-full pointer-events-none" />

      <FadeIn className="text-center mb-16 relative z-10">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#D32F2F] px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#D32F2F]/30 border border-[#9A0007]">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span className="text-white font-black text-xs uppercase tracking-widest">
            Help Center & FAQ
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-none">
          FREQUENTLY ASKED <span className="text-[#D32F2F]">QUESTIONS</span>
        </h2>
        <p className="text-white/80 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about our{' '}
          <strong className="text-white font-bold">{CONSTANTS.BRAND_NAME}</strong>{' '}
          subscriptions, setup process, and premium channel availability.
        </p>
      </FadeIn>

      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeInItem key={i}>
              <div
                className={`relative rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121214] border border-[#D32F2F]/60 shadow-xl shadow-[#D32F2F]/10'
                    : 'bg-[#121214] hover:bg-[#1a1a1e] border border-white/10'
                }`}
              >
                {/* Active Left Indicator Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${
                    isOpen ? 'bg-[#D32F2F]' : 'bg-transparent'
                  }`}
                />

                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D32F2F]/50 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 pr-2">
                    <div
                      className={`p-2 rounded-xl shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#D32F2F]/20 text-[#D32F2F]'
                          : 'bg-white/5 text-white/50'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-extrabold uppercase tracking-tight transition-colors duration-200 ${
                        isOpen
                          ? 'text-white'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-full shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#D32F2F] text-white rotate-180'
                        : 'bg-white/5 text-white/60'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Collapsible Answer Body */}
                <div
                  id={`faq-answer-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 pb-6'
                      : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                  role="region"
                >
                  <div className="overflow-hidden">
                    <p className="text-white/90 font-normal leading-relaxed pl-14 sm:pl-16 pr-6 sm:pr-8 text-sm sm:text-base border-t border-white/10 pt-4 mt-1">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          );
        })}
      </FadeInStagger>
    </section>
  );
}