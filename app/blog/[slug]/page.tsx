import { blogPosts } from '@/lib/blog';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Clock,
  Zap,
  ShieldCheck,
  Headphones,
  BookOpen,
} from 'lucide-react';
import ShareButtons from '../../components/ShareButtons';
import ArticleScrollSidebar from '../../components/ArticleScrollSidebar';

type Props = { params: Promise<{ slug: string }> };

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

function getCategoryLabel(post: any): string {
  if (post.category) {
    const map: Record<string, string> = {
      setup: 'Setup Guide',
      review: 'Review',
      sports: 'Live Sports',
      tips: 'Tips & Tricks',
      news: 'News',
    };
    return map[post.category] || post.category;
  }
  if (post.keywords && post.keywords.length > 0) return post.keywords[0];
  return 'IPTV Canada Guide';
}

function getReadTime(post: any): number {
  if (post.readTime) {
    const match = String(post.readTime).match(/(\d+)/);
    if (match) return parseInt(match[1]);
  }
  const words = (post.content || '')
    .replace(/<[^>]*>/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 200));
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-CA', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function sanitizeContent(html: string): string {
  return html
    .replace(/<h1(\s[^>]*)?>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>');
}

function extractFAQs(html: string): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];

  const cardRegex =
    /<div class="faq-card[^"]*">\s*<h3[^>]*>[\s\S]*?<span>([\s\S]*?)<\/span>\s*<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/div>/gi;
  let match;
  while ((match = cardRegex.exec(html)) !== null) {
    const q = match[1].replace(/<[^>]*>/g, '').trim();
    const a = match[2].replace(/<[^>]*>/g, '').trim();
    if (q.length > 5 && a.length > 10) {
      faqs.push({ q, a });
    }
  }

  if (faqs.length === 0) {
    const legacyRegex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
    let legacyMatch;
    while ((legacyMatch = legacyRegex.exec(html)) !== null) {
      const rawQ = legacyMatch[1].replace(/<[^>]*>/g, '').trim();
      const rawA = legacyMatch[2].replace(/<[^>]*>/g, '').trim();
      if (rawQ.includes('Q.') || rawQ.endsWith('?')) {
        const cleanQ = rawQ.replace(/^Q\.\s*/, '').trim();
        if (cleanQ.length > 5 && rawA.length > 10) {
          faqs.push({ q: cleanQ, a: rawA });
        }
      }
    }
  }

  return faqs.slice(0, 10);
}

function getRelatedPosts(currentPost: any, allPosts: any[], limit = 3): any[] {
  const scored = allPosts
    .filter((p) => p.slug !== currentPost.slug)
    .map((p) => {
      let score = 0;
      if (p.category && currentPost.category && p.category === currentPost.category) {
        score += 5;
      }
      const currentKw = (currentPost.keywords || []).map((k: string) => k.toLowerCase());
      const otherKw = (p.keywords || []).map((k: string) => k.toLowerCase());
      const shared = currentKw.filter((k: string) => otherKw.includes(k));
      score += shared.length * 2;
      if (p.author === currentPost.author) score += 1;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.post);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return generateSEOMetadata('Article Not Found');
  }

  const shortTitle = clampTitle(`${post.title}`);
  const description = clampDescription(
    post.description ||
      post.excerpt ||
      `Read the full ${BRAND} guide and tips for IPTV streaming in Canada.`
  );

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: shortTitle, absolute: shortTitle },
    description,
    keywords: post.keywords ? post.keywords.join(', ') : CONSTANTS.PRIMARY_KEYWORDS.join(', '),
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: BRAND,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-CA': canonicalUrl,
        'en-US': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: shortTitle,
      description,
      url: canonicalUrl,
      siteName: BRAND,
      locale: 'en_CA',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: shortTitle,
      description,
      images: [imageUrl],
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
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const readTime = getReadTime(post);
  const displayCategory = getCategoryLabel(post);
  const dateStr = formatDate(post.date);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;

  const safeContent = sanitizeContent(post.content);
  const faqs = extractFAQs(post.content);
  const relatedPosts = getRelatedPosts(post, blogPosts, 3);

  const whatsappIboMsg = encodeURIComponent(
    `Hi ${BRAND}, I'd like to get IBO Player Pro access with my subscription.`
  );
  const whatsappSubMsg = encodeURIComponent(
    `Hi ${BRAND}, I'd like to get an IPTV Canada subscription.`
  );

  const jsonLdGraph: any = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}/#article`,
        headline: post.title,
        name: post.title,
        description: post.description || post.excerpt,
        keywords: post.keywords ? post.keywords.join(', ') : '',
        image: {
          '@type': 'ImageObject',
          '@id': `${canonicalUrl}/#primaryimage`,
          url: imageUrl,
          contentUrl: imageUrl,
          width: 1200,
          height: 630,
          caption: post.title,
        },
        thumbnailUrl: imageUrl,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'en-CA',
        articleSection: displayCategory,
        wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
        author: { '@type': 'Person', name: post.author },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: { '@id': `${canonicalUrl}/#webpage` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: post.title,
        description: post.description || post.excerpt,
        inLanguage: 'en-CA',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: { '@id': `${canonicalUrl}/#primaryimage` },
        breadcrumb: { '@id': `${canonicalUrl}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
        ],
      },
    ],
  };

  if (faqs.length > 0) {
    jsonLdGraph['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <article className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <script
        type="application/ld+json"
        id="article-schema-data"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* ==========================================================
          HERO — cleaner, taller, more cinematic
      ========================================================== */}
      <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#0a0a0c]">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={`${post.title} - ${BRAND} blog`}
            width={1920}
            height={1080}
            priority
            fetchPriority="high"
            className="w-full h-full object-cover scale-105 brightness-[0.22]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/10 to-[#0a0a0c]/10" />
        </div>

        <div
          className="absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, #D32F2F 1px, transparent 1px), linear-gradient(to bottom, #D32F2F 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D32F2F]/12 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-32 sm:pt-36 md:pt-40 pb-16 flex flex-col items-center justify-center">

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 bg-[#D32F2F] px-5 py-2.5 rounded-full mb-8 shadow-lg shadow-[#D32F2F]/30">
            <BookOpen className="w-4 h-4 text-[#FFFFFF]" />
            <span className="text-[#FFFFFF] text-xs font-black uppercase tracking-widest">
              {displayCategory}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-[1.05] max-w-4xl">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/75 font-bold max-w-3xl mx-auto leading-relaxed mb-10">
            {post.description || post.excerpt}
          </p>

          {/* Meta chips */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[#FFFFFF] text-xs font-black uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>{dateStr}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[#FFFFFF] text-xs font-black uppercase tracking-widest">
              <User className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>{post.author}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[#FFFFFF] text-xs font-black uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          BREADCRUMB
      ========================================================== */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#D32F2F] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to all articles
        </Link>
      </div>

      {/* ==========================================================
          MAIN GRID
      ========================================================== */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Main content column */}
        <div className="lg:col-span-8 order-1 lg:order-1 space-y-10">

          {/* Featured cover image — larger, cleaner */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-4 border-[#D32F2F] shadow-[0_25px_60px_rgba(211,47,47,0.25)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Article body */}
          <div className="relative bg-[#f2ebeb] text-[#0a0a0c] rounded-3xl border-4 border-[#D32F2F] shadow-[0_25px_60px_rgba(10,10,12,0.15)] p-6 sm:p-8 md:p-12">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D32F2F]/8 to-transparent rounded-bl-[4rem] pointer-events-none" />

            <div
              className="
                article-body
                prose prose-lg max-w-none relative
                [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-black [&_h2]:text-[#0a0a0c] [&_h2]:mb-5 [&_h2]:mt-12 [&_h2]:tracking-tight [&_h2]:uppercase [&_h2]:leading-tight
                [&_h2]:pb-3 [&_h2]:border-b-4 [&_h2]:border-[#D32F2F]/20
                [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-black [&_h3]:text-[#D32F2F] [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:uppercase
                [&_h4]:text-lg [&_h4]:md:text-xl [&_h4]:font-black [&_h4]:text-[#D32F2F] [&_h4]:mb-3 [&_h4]:mt-6 [&_h4]:uppercase
                [&_p]:text-[#0a0a0c]/85 [&_p]:text-base [&_p]:md:text-lg [&_p]:font-medium [&_p]:leading-[1.8] [&_p]:mb-5 [&_p]:md:mb-6
                [&_a]:text-[#D32F2F] [&_a]:font-black [&_a]:hover:text-[#9A0007] [&_a]:transition-colors [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-2
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#D32F2F] [&_blockquote]:bg-[#D32F2F]/5 [&_blockquote]:pl-6 [&_blockquote]:py-3 [&_blockquote]:my-6 [&_blockquote]:text-[#0a0a0c]/70 [&_blockquote]:italic [&_blockquote]:rounded-r-xl
                [&_code]:bg-[#0a0a0c]/10 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-lg [&_code]:text-[#D32F2F] [&_code]:text-sm [&_code]:font-bold
                [&_pre]:bg-[#0a0a0c] [&_pre]:text-[#FFFFFF] [&_pre]:p-6 [&_pre]:rounded-2xl [&_pre]:overflow-x-auto
                [&_img]:rounded-2xl [&_img]:my-8 [&_img]:border-4 [&_img]:border-[#D32F2F] [&_img]:w-full [&_img]:h-auto [&_img]:shadow-2xl
                [&_hr]:border-[#D32F2F]/20 [&_hr]:my-12
              "
              dangerouslySetInnerHTML={{ __html: safeContent }}
            />
          </div>

          {/* Share buttons */}
          <ShareButtons title={`${post.title} - ${BRAND}`} url={canonicalUrl} />

          {/* Topic keyword chips */}
          {post.keywords && post.keywords.length > 0 && (
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-5">
                <Tag className="w-5 h-5 text-[#D32F2F]" />
                <h2 className="text-[#FFFFFF] font-black text-base md:text-lg uppercase tracking-wide">
                  Topics in this article
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {post.keywords.slice(0, 8).map((keyword) => (
                  <span
                    key={keyword}
                    className="px-4 py-2 bg-[#f2ebeb] text-[#0a0a0c] text-xs md:text-sm font-black uppercase tracking-wider rounded-full border-2 border-[#D32F2F] shadow-md hover:bg-[#D32F2F] hover:text-[#FFFFFF] hover:scale-105 transition-all cursor-default"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author bio card — modernized */}
          <div className="relative overflow-hidden rounded-3xl border-4 border-[#D32F2F] bg-gradient-to-br from-[#f2ebeb] to-[#fff5f5] shadow-2xl p-6 md:p-8">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D32F2F]/10 rounded-bl-[3rem] pointer-events-none" />
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-6 text-center sm:text-left relative z-10">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#D32F2F] shadow-xl flex-shrink-0">
                <Image
                  src="/img/profile.webp"
                  alt={`${post.author} - IPTV Canada Specialist`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-[#D32F2F] text-[#FFFFFF] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                  <User className="w-3 h-3" /> Author
                </div>
                <h2 className="text-[#0a0a0c] font-black text-2xl md:text-3xl mb-1 uppercase tracking-tight">
                  {post.author} 🍁
                </h2>
                <p className="text-[#D32F2F] text-xs md:text-sm uppercase tracking-widest font-black mb-3">
                  IPTV Canada Specialist
                </p>
                <p className="text-[#0a0a0c]/85 text-sm md:text-base font-semibold leading-relaxed">
                  Specialized in streaming protocols, app configurations, and Canadian network optimizations. Helps customers get the most out of their 4K IPTV Canada subscription and IBO Player Pro setups.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <ArticleScrollSidebar
          relatedPosts={relatedPosts}
          whatsappIboMsg={whatsappIboMsg}
          whatsappSubMsg={whatsappSubMsg}
        />
      </div>

      {/* ==========================================================
          TRUST FOOTER
      ========================================================== */}
      <div className="border-t border-white/5 mt-12 py-8 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[#FFFFFF]/60 text-xs font-black uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#D32F2F]" /> 4K Ultra HD
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D32F2F]" /> 99.9% Server Uptime
            </span>
            <span className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#D32F2F]" /> 24/7 WhatsApp Support
            </span>
          </div>
          <p className="text-center text-[#FFFFFF]/40 text-xs mt-6 font-bold">
            © {new Date().getFullYear()} {BRAND}. All rights reserved. Made in Canada 🍁
          </p>
        </div>
      </div>
    </article>
  );
}