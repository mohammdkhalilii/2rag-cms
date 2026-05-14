import type { Metadata } from 'next'

import './globals.css'
import './index.css'
import '@/assets/fonts/fonts.css'

import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { site } from '@/content/site'
import { organizationLd, serializeJsonLd, websiteLd } from '@/app/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: '۲رگ — استودیوی هوش مصنوعی مولد',
    template: '%s — ۲رگ',
  },
  description:
    '۲رگ یک استودیوی هوش مصنوعی است که دستیارهای هوشمند، سیستم‌های RAG و اتوماسیون مبتنی بر AI را برای کسب‌وکارهای واقعی طراحی و پیاده‌سازی می‌کند.',
  authors: [{ name: '2rag' }],
  openGraph: {
    title: '۲رگ — استودیوی هوش مصنوعی مولد',
    description: 'هوش مصنوعی کاربردی برای جریان‌های کاری واقعی کسب‌وکار.',
    type: 'website',
    locale: site.locale,
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: 'summary',
    site: site.twitter,
  },
  alternates: {
    canonical: site.url,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="relative min-h-screen bg-background text-foreground">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(organizationLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(websiteLd),
          }}
        />
      </body>
    </html>
  )
}
