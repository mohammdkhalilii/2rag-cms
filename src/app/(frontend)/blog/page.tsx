// app/blog/page.tsx
import type { Metadata } from 'next'

import { PageHero } from '@/app/components/site/PageHero'
import { BlogPosts, type BlogPost } from './_components/BlogPosts'
import { getPublishedPosts } from '@/app/lib/cms/posts'
import { site } from '@/app/content/site'
import { buildMetadata, serializeJsonLd } from '@/app/lib/seo'

export const revalidate = 3600

// Helper to format date as "DD MMM YYYY" (or your preferred format)
function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Helper to compute reading time (rough estimate)
function readingTime(content?: string): string {
  // NEED UPDATE
  // if (!content) return '1 دقیقه'
  // const wordsPerMinute = 200
  // const words = content.trim().split(/\s+/).length
  // const minutes = Math.ceil(words / wordsPerMinute)
  // return `${minutes} دقیقه`
  return '1 دقیقه'
}

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'بلاگ',
    description:
      'مقاله، راهنما و یادداشت‌های میدانی درباره هوش مصنوعی کاربردی، RAG، ایجنت‌ها و AI برای کسب‌وکار — از استودیوی ۲رگ.',
    path: '/blog',
  })
}

export default async function BlogPage() {
  // 1. Fetch posts from Payload
  const rawPosts = await getPublishedPosts()

  // 2. Map to BlogPost shape
  const posts: BlogPost[] = rawPosts.map((post: any) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    cat: post.category?.name || 'عمومی', // adjust according to your Payload schema
    date: formatDate(post.publishedAt || post.createdAt),
    read: readingTime(post.content), // if you store content as rich text, extract plain text first
  }))

  // 3. Determine featured post (e.g. newest or a special "featured" flag)
  const featuredPost = posts.length > 0 ? posts[0] : null

  // 4. Extract unique categories and prepend "همه"
  const uniqueCategories = Array.from(new Set(posts.map((p) => p.cat)))
  const categories = ['همه', ...uniqueCategories]

  // 5. JSON-LD for blog (using dynamic posts)
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `بلاگ ${site.name}`,
    url: `${site.url}/blog`,
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      url: `${site.url}/blog/${post.slug}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(blogJsonLd),
        }}
      />
      <PageHero
        eyebrow="بلاگ"
        title={
          <>
            یادداشت‌های میدانی
            <br />
            درباره AI کاربردی.
          </>
        }
        description="نوشته‌هایی از استودیو — استراتژی، RAG، ایجنت‌ها و آن جزئیات به‌ظاهر کم‌اهمیتی که سرنوشت پروژه‌های AI را تعیین می‌کنند."
      />
      {featuredPost ? (
        <BlogPosts posts={posts} featuredPost={featuredPost} categories={categories} />
      ) : (
        <p className="text-center text-muted-foreground">هیچ نوشته‌ای یافت نشد.</p>
      )}
    </>
  )
}
