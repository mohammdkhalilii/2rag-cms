import type { Metadata } from 'next'

import { site } from '@/app/content/site'

type MetaInput = {
  title: string
  description: string
  /** Path used to build canonical/og:url, e.g. "/services". */
  path?: string
  ogType?: 'website' | 'article'
  image?: string
  /** Optional ISO date for articles. */
  publishedTime?: string
  absoluteTitle?: boolean
}

type JsonLdValue = string | number | boolean | null | JsonLdValue[] | { [key: string]: JsonLdValue }

/**
 * Build route metadata for the Next.js Metadata API.
 * Page titles use the root layout template unless absoluteTitle is set.
 */
export function buildMetadata(input: MetaInput): Metadata {
  const fullTitle = input.title.includes(site.name) ? input.title : `${input.title} — ${site.name}`
  const path = input.path ?? '/'
  const url = new URL(path, site.url)

  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: input.description,
      type: input.ogType ?? site.defaultOgType,
      locale: site.locale,
      siteName: site.name,
      url,
      ...(input.image ? { images: [{ url: input.image }] } : {}),
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
    },
    twitter: {
      card: input.image ? 'summary_large_image' : 'summary',
      site: site.twitter,
      title: fullTitle,
      description: input.description,
      ...(input.image ? { images: [input.image] } : {}),
    },
  }
}

export function serializeJsonLd(data: JsonLdValue) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  alternateName: site.brand,
  url: site.url,
  email: site.email,
  description: site.description,
}

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: site.url,
  inLanguage: 'fa-IR',
}
