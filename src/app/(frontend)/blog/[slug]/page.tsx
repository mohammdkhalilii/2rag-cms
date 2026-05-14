import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpLeft, CalendarDays, Clock3 } from 'lucide-react'

import { CtaBlock } from '@/app/components/site/CtaBlock'
import { Section } from '@/app/components/site/Section'
// import { posts, type Post } from '@/app/content/posts'
import { MarkdownRenderer } from '@/app/components/ui/MarkdownRenderer'
import { getPostBySlug, getPublishedPosts } from '@/app/lib/cms/posts'

import { site } from '@/app/content/site'
import { buildMetadata, serializeJsonLd } from '@/app/lib/seo'

import Image from 'next/image'
import { getMediaAlt, getMediaUrl } from '@/app/lib/cms/media'

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getPublishedPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// function getPost(slug: string) {
//   return posts.find((post) => post.slug === slug)
// }

// function getAdjacentPosts(post: Post) {
//   const index = posts.findIndex((item) => item.slug === post.slug)

//   return {
//     previous: index > 0 ? posts[index - 1] : undefined,
//     next: index < posts.length - 1 ? posts[index + 1] : undefined,
//   }
// }

// function getPostDescription(post: Post) {
//   return (
//     post.excerpt ??
//     `یادداشتی از ۲رگ درباره ${post.cat}؛ با تمرکز روی کاربرد عملی هوش مصنوعی در کسب‌وکارهای واقعی.`
//   )
// }

// export function generateStaticParams() {
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return buildMetadata({
    title: post.title,
    description: post.seo?.metaDescription ?? '',
    path: `/blog/${post.slug}`,
    ogType: 'article',
    publishedTime: post.publishedAt,
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  const coverImage = getMediaUrl(post.coverImage)
  const coverImageAlt = getMediaAlt(post.coverImage, post.title)

  if (!post) {
    notFound()
  }

  // NEED UPDATE
  // const { previous, next } = getAdjacentPosts(post)
  const description = post.excerpt ?? ''
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description,
    datePublished: post.publishedAt,
    inLanguage: 'fa-IR',
    url: `${site.url}/blog/${post.slug}`,
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />

      <article>
        <header className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 -z-10 bg-grid opacity-100" />
          <div className="absolute inset-0 -z-10 hero-glow" />
          <div className="mx-auto max-w-4xl px-6 pb-20 pt-28">
            <Link
              href="/blog"
              className="group mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent"
            >
              <ArrowUpLeft className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
              بازگشت به بلاگ
            </Link>

            <div className="mb-6 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="border border-border bg-card px-2.5 py-1 text-accent">
                {post.cat}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" />
                {post.read}
              </span>
            </div>
            {coverImage && (
              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-sm border border-border bg-muted">
                <Image
                  src={coverImage}
                  alt={coverImageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="object-cover"
                />
              </div>
            )}
            <h1 className="text-balance pt-4 font-display text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
        </header>

        {/* <Section className="!max-w-4xl">
          <div className="grid gap-8">
            <TemplateBlock title="خلاصه اجرایی">
              این صفحه قالب مقاله برای محتوای بلاگ است. متن اصلی می‌تواند بعداً به همین آبجکت محتوا
              اضافه شود؛ فعلاً صفحه از داده‌های موجود برای ساخت عنوان، توضیح، متادیتا و ساختار مقاله
              استفاده می‌کند.
            </TemplateBlock>
            <TemplateBlock title="مسئله">
              در هر مقاله، این بخش باید مسئله واقعی، محدودیت‌ها و دلیل اهمیت موضوع را توضیح دهد؛ نه
              صرفاً تعریف عمومی یا مقدمه بازاریابی.
            </TemplateBlock>
            <TemplateBlock title="چارچوب پیشنهادی">
              قالب پیشنهادی مقاله: زمینه، تصمیم‌های کلیدی، ضدالگوها، چک‌لیست عملی و جمع‌بندی. این
              ساختار برای مقالات AI، RAG، ایجنت‌ها و محصول قابل استفاده است.
            </TemplateBlock>
          </div>
        </Section> */}

        <Section className="!max-w-4xl">
          <MarkdownRenderer content={post.content} />
        </Section>
        {/* NEED UPDATE */}
        {/* <Section className="!max-w-4xl border-t border-border">
          <nav className="grid gap-4 md:grid-cols-2">
            {previous && <AdjacentPost post={previous} label="مقاله قبلی" />}
            {next && <AdjacentPost post={next} label="مقاله بعدی" />}
          </nav>
        </Section> */}
      </article>

      <CtaBlock
        title="می‌خواهید این ایده را روی مسئله واقعی خودتان بررسی کنیم؟"
        description="در یک جلسه کوتاه، مسیر عملی و ریسک‌های فنی را شفاف می‌کنیم."
        primary={{ to: '/contact', label: 'صحبت با ما' }}
        secondary={{ to: '/services', label: 'مشاهده خدمات' }}
      />
    </>
  )
}

function TemplateBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-r-2 border-accent pr-6">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-4 leading-8 text-muted-foreground">{children}</p>
    </section>
  )
}

// function AdjacentPost({ post, label }: { post: Post; label: string }) {
//   return (
//     <Link
//       href={`/blog/${post.slug}`}
//       className="group border border-border bg-card p-5 transition hover:border-foreground hover:pixel-shadow"
//     >
//       <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
//         {label}
//       </div>
//       <div className="mt-3 font-display text-lg font-bold group-hover:text-accent">
//         {post.title}
//       </div>
//     </Link>
//   )
// }
