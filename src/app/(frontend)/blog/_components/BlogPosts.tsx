'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpLeft } from 'lucide-react'

import { Section } from '@/app/components/site/Section'

// import { blogCategories, featuredPost, posts } from '@/app/content/posts'

export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt?: string | null
  cat: string // category slug or name
  date: string // formatted publish date
  read: string // reading time, e.g. "3 min"
  // add any other fields you need (featured image, etc.)
}

type BlogPostsProps = {
  posts: BlogPost[]
  featuredPost: BlogPost
  categories: string[] // e.g. ["همه", "RAG", "Agents", ...]
}

export function BlogPosts({ posts, featuredPost, categories }: BlogPostsProps) {
  const [active, setActive] = useState<(typeof categories)[number]>('همه')
  const filtered = active === 'همه' ? posts : posts.filter((post) => post.cat === active)

  return (
    <Section className="!pt-16">
      <Link
        href={`/blog/${featuredPost.slug}`}
        className="pixel-frame group relative grid overflow-hidden border border-foreground bg-card md:grid-cols-12"
      >
        <div className="relative aspect-[5/4] md:col-span-5 md:aspect-auto">
          <div className="absolute inset-0 bg-pixels opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-[oklch(0.55_0.18_250)]/20" />
          <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 border border-foreground bg-background px-2 py-1 font-mono text-xs uppercase tracking-widest">
            <span className="h-2 w-2 bg-accent" /> منتخب
          </div>
        </div>
        <div className="flex flex-col justify-between p-8 md:col-span-7 md:p-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              {featuredPost.cat}
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-5xl group-hover:text-accent">
              {featuredPost.title}
            </h2>
            {featuredPost.excerpt && (
              <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
                {featuredPost.excerpt}
              </p>
            )}
          </div>
          <div className="mt-10 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {featuredPost.date} · زمان مطالعه: {featuredPost.read}
            </span>
            <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-accent" />
          </div>
        </div>
      </Link>

      <div className="mt-16 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`border px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition ${
              active === category
                ? 'border-foreground bg-foreground text-background'
                : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            id={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex aspect-[5/4] flex-col justify-between bg-card p-6 transition hover:bg-muted"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-accent">
              {post.cat}
            </div>
            <div>
              <h3 className="font-display text-xl font-bold leading-snug group-hover:text-accent">
                {post.title}
              </h3>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {post.date} · {post.read}
                </span>
                <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-accent" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
