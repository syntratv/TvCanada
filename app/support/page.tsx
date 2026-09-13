'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Clock,
  Check,
  X,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy,
} from 'lucide-react';
import Link from 'next/link';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/support`;

// ---------------------------------------------------------------------------
// TOAST
// ---------------------------------------------------------------------------
const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 max-w-md w-full animate-slide-in">
      <div
        className={`rounded-2xl p-6 shadow-2xl border-4 backdrop-blur-xl ${
          type === 'success' ? 'bg-[#f2ebeb] border-green-600' : 'bg-[#f2ebeb] border-[#D32F2F]'
        }`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
              type === 'success' ? 'bg-green-600/20' : 'bg-[#D32F2F]/20'
            }`}
          >
            {type === 'success' ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-[#D32F2F]" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-[#0a0a0c] font-black uppercase text-sm">{message}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close notification"
            className="flex-shrink-0 text-[#0a0a0c]/40 hover:text-[#D32F2F] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// SUCCESS POPUP
// ---------------------------------------------------------------------------
const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4">
      <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl text-center animate-scale-up">
        <div className="w-24 h-24 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-6">
          <div className="w-16 h-16 rounded-full bg-green-600/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-[#0a0a0c] mb-3 uppercase tracking-tight">
          Message Sent!
        </h3>

        <p className="text-[#D32F2F] font-bold text-sm leading-relaxed mb-6">
          Thank you for contacting {BRAND}. Our support team will reply as soon as possible.
        </p>

        <div className="bg-[#0a0a0c] rounded-2xl border border-white/5 p-5 mb-6 text-left">
          <p className="text-[#FFFFFF]/40 text-xs uppercase tracking-widest font-black mb-3">
            What happens next?
          </p>
          <ul className="space-y-2 text-sm text-[#FFFFFF]/80 font-bold uppercase tracking-wide">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#D32F2F] shrink-0" />
              Reviewed by an IPTV specialist
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#D32F2F] shrink-0" />
              Request or trial verification
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#D32F2F] shrink-0" />
              Reply within minutes via WhatsApp
            </li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="w-full py-4 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:bg-[#9A0007] transition-transform hover:scale-105 shadow-md cursor-pointer"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const encodedMsg = encodeURIComponent(
        `Hi ${BRAND},\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
      );
      window.open(`${whatsappBaseUrl}?text=${encodedMsg}`, '_blank');

      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: 'Your message was sent successfully!', type: 'success' });
    } catch {
      setToast({ message: 'Sending failed. Please try again via WhatsApp.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const startWhatsAppChat = () => {
    const defaultText = encodeURIComponent(
      `Hi ${BRAND}, I have a question about your IPTV subscription.`
    );
    window.open(`${whatsappBaseUrl}?text=${defaultText}`, '_blank');
  };

  // ----------------- JSON-LD -----------------
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${PAGE_URL}/#contact`,
        url: PAGE_URL,
        name: `${BRAND} Support`,
        description: `Contact ${BRAND} for 24/7 Canadian customer support — WhatsApp, email, and live chat help for IPTV subscriptions, setup, and billing.`,
        inLanguage: 'en-CA',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Support', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I contact support the fastest way?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `For the fastest support, send a message on WhatsApp. Our Canadian team typically replies within a few minutes.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer help with installation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — our technical experts guide you step-by-step through setting up IPTV on Smart TV, Firestick, Android, and Apple TV, either manually or with remote activation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I request a free trial first?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. Request a free 24-hour IPTV test code via WhatsApp to try our 4K channels risk-free before subscribing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast will I receive my login credentials?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'After purchase, your M3U URL and Xtream Codes credentials are delivered automatically via WhatsApp and email within 5 minutes.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-16 text-[#FFFFFF]">
      <script
        type="application/ld+json"
        id="support-page-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {showSuccessPopup && <SuccessPopup onClose={() => setShowSuccessPopup(false)} />}

      {/* ==========================================================
          HERO
      ========================================================== */}
      <section className="relative px-6 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(211,47,47,0.15),_transparent_50%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#D32F2F] px-4 py-2 rounded-full mb-6 shadow-md">
              <Mail className="w-4 h-4 text-[#FFFFFF]" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest">
                24/7 Canadian Support 🍁
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none">
              Contact <span className="text-[#D32F2F]">{BRAND}</span>
            </h1>

            <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
              Questions about our IPTV channels, Smart TV setup, or payments? Our support team is available 24/7 via WhatsApp, email, and live chat.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================================
          FORM + SIDEBAR
      ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#D32F2F] font-bold text-sm mb-6">
                  Fill in the form below and we will reply via WhatsApp or email — usually within minutes.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                    >
                      Full Name <span className="text-[#D32F2F]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a0a0c]/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-black/[0.03] border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold placeholder-[#0a0a0c]/40 focus:border-[#D32F2F] transition-colors outline-none"
                        placeholder="e.g. John Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                    >
                      Email Address <span className="text-[#D32F2F]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a0a0c]/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-black/[0.03] border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold placeholder-[#0a0a0c]/40 focus:border-[#D32F2F] transition-colors outline-none"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                    >
                      Subject <span className="text-[#D32F2F]">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a0a0c]/40" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-10 py-3.5 bg-black/[0.03] border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold focus:border-[#D32F2F] transition-colors outline-none appearance-none"
                      >
                        <option value="" className="bg-[#f2ebeb]">
                          Select a topic...
                        </option>
                        <option value="test" className="bg-[#f2ebeb]">
                          Free 24-Hour IPTV Trial Request
                        </option>
                        <option value="setup" className="bg-[#f2ebeb]">
                          Setup Help & App Installation
                        </option>
                        <option value="pricing" className="bg-[#f2ebeb]">
                          Plans & Pricing Questions
                        </option>
                        <option value="technical" className="bg-[#f2ebeb]">
                          Technical Support
                        </option>
                        <option value="billing" className="bg-[#f2ebeb]">
                          Payments (Interac / Credit Card / PayPal / Crypto)
                        </option>
                        <option value="general" className="bg-[#f2ebeb]">
                          General Question
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0a0a0c]/40">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                    >
                      Message <span className="text-[#D32F2F]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 bg-black/[0.03] border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold placeholder-[#0a0a0c]/40 focus:border-[#D32F2F] transition-colors outline-none resize-none"
                        placeholder="Describe your question or device type..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl bg-gradient-to-r from-[#D32F2F] to-[#9A0007] text-[#FFFFFF] font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                      loading
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:scale-[1.01] hover:shadow-xl cursor-pointer'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-[#FFFFFF]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
                <h3 className="text-xl font-black text-[#0a0a0c] uppercase tracking-tight mb-6">
                  Contact Details
                </h3>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#D32F2F]" />
                  </div>
                  <div>
                    <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">Email</p>
                    <a
                      href={`mailto:${CONSTANTS.CONTACT.email}`}
                      className="text-[#0a0a0c] hover:text-[#D32F2F] transition-colors text-sm font-bold break-all"
                    >
                      {CONSTANTS.CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#D32F2F]" />
                  </div>
                  <div>
                    <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">WhatsApp</p>
                    <a
                      href={whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a0a0c] hover:text-[#D32F2F] transition-colors text-sm font-bold"
                    >
                      {CONSTANTS.CONTACT.phone || 'Chat on WhatsApp'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#D32F2F]" />
                  </div>
                  <div>
                    <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">
                      Direct Contact
                    </p>
                    <p className="text-[#0a0a0c] text-sm font-bold">Available 24/7</p>
                    <button
                      onClick={startWhatsAppChat}
                      className="text-[#D32F2F] text-xs font-black uppercase tracking-widest hover:text-[#9A0007] transition-colors mt-1 cursor-pointer block"
                    >
                      Start WhatsApp Chat →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#D32F2F]" />
                  </div>
                  <div>
                    <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">
                      Response Time
                    </p>
                    <p className="text-[#0a0a0c] text-sm font-bold">Within 5 to 15 minutes</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="pt-6 border-t-2 border-black/5">
                  <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black mb-4">
                    Guaranteed Service
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Headphones className="w-5 h-5 text-[#D32F2F] mx-auto mb-1" />
                      <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                        24/7 Help
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <ShieldCheck className="w-5 h-5 text-[#D32F2F] mx-auto mb-1" />
                      <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                        Secure
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Zap className="w-5 h-5 text-[#D32F2F] mx-auto mb-1" />
                      <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                        Fast Setup
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Users className="w-5 h-5 text-[#D32F2F] mx-auto mb-1" />
                      <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                        25K+ Customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TRUST BANNER
      ========================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <FadeIn>
          <div className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mx-auto mb-3">
                  <LifeBuoy className="w-6 h-6 text-[#D32F2F]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  24/7 Support
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">Always available</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-[#D32F2F]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  Fast Response
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">Direct on WhatsApp</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-[#D32F2F]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  Privacy Guarantee
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">Secure connection</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D32F2F]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  Best Service
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">#1 IPTV Canada</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ==========================================================
          FAQ
      ========================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight">
            Frequently Asked <span className="text-[#D32F2F]">Questions</span>
          </h2>
          <p className="text-[#FFFFFF]/70 font-bold text-base">
            Quick answers to the most common support questions
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: 'How do I contact support the fastest way?',
              a: `For the fastest support, message us directly on WhatsApp. Our Canadian team typically replies within a few minutes.`,
            },
            {
              q: 'Do you offer help with installation?',
              a: 'Yes — our technical experts guide you step-by-step through setting up IPTV on Smart TV, Firestick, Android, and Apple TV, either manually or with remote activation.',
            },
            {
              q: 'Can I request a free trial first?',
              a: 'Absolutely. Request a free 24-hour IPTV test code via WhatsApp to try our 4K channels risk-free before subscribing.',
            },
            {
              q: 'How fast will I receive my login credentials?',
              a: 'After purchase, your M3U URL and Xtream Codes credentials are delivered automatically via WhatsApp and email within 5 minutes.',
            },
          ].map((faq, idx) => (
            <FadeInItem
              key={idx}
              className="bg-[#f2ebeb] border-4 border-[#D32F2F] rounded-2xl p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(211,47,47,0.2)]"
            >
              <h3 className="text-[#0a0a0c] font-black text-base uppercase tracking-tight mb-2">
                {faq.q}
              </h3>
              <p className="text-[#0a0a0c]/80 text-sm font-bold leading-relaxed">{faq.a}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* CTA */}
        <FadeIn className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D32F2F] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
          >
            View Full FAQ
          </Link>
        </FadeIn>
      </section>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-up {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}