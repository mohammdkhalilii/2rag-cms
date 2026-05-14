import { Header } from '@/app/components/site/Header'
import { Footer } from '@/app/components/site/Footer'
import { site } from '@/app/content/site'
import { organizationLd, serializeJsonLd, websiteLd } from '@/app/lib/seo'

import './globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
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

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
