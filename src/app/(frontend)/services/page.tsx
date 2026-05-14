import type { Metadata } from 'next'
import { Section } from '@/app/components/site/Section'
import { PageHero } from '@/app/components/site/PageHero'
import { CtaBlock } from '@/app/components/site/CtaBlock'
import { buildMetadata, serializeJsonLd } from '@/app/lib/seo'
import { services } from '@/app/content/services'
import { site } from '@/app/content/site'

export const metadata: Metadata = buildMetadata({
  title: 'خدمات',
  description:
    'استراتژی AI، چت‌بات و دستیار، هوش اسناد و RAG، ایجنت‌ها، ارزیابی و آموزش. شش خط خدمت متمرکز از ۲رگ.',
  path: '/services',
})

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, index) => ({
    '@type': 'Service',
    position: index + 1,
    name: service.title,
    description: service.intro,
    provider: { '@type': 'Organization', name: site.name, url: site.url },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(servicesJsonLd),
        }}
      />
      <PageHero
        eyebrow="خدمات"
        title={
          <>
            از استراتژی AI
            <br />
            تا سیستم عملیاتی.
          </>
        }
        description="شش خط خدمت متمرکز که کل مسیر — از فهم درست مسئله تا استقرار یک سیستم AI که تیم شما واقعاً به آن تکیه می‌کند — را پوشش می‌دهد."
      />

      <Section className="!py-20">
        <div className="space-y-px overflow-hidden border border-border bg-border">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid gap-8 bg-card p-8 md:grid-cols-12 md:p-12"
            >
              <div className="md:col-span-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center border border-foreground bg-background text-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground" dir="ltr">
                    0{i + 1} / 0{services.length}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold leading-tight">{s.title}</h2>
                <p className="mt-4 text-muted-foreground">{s.intro}</p>
              </div>
              <div className="grid gap-8 md:col-span-8 md:grid-cols-3">
                <Block label="موارد استفاده">
                  <ul className="space-y-1.5 text-sm">
                    {s.useCases.map((u) => (
                      <li key={u} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </Block>
                <Block label="ارزش برای کسب‌وکار">
                  <p className="text-sm text-foreground">{s.value}</p>
                </Block>
                <Block label="مناسب برای">
                  <p className="text-sm text-foreground">{s.who}</p>
                </Block>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBlock
        title="مطمئن نیستید کدام خدمت مناسب شماست؟"
        description="مسئله‌تان را برای ما بنویسید. در یک جلسه ۳۰ دقیقه‌ای، کوچک‌ترین و دقیق‌ترین نقطه‌ شروع را پیشنهاد می‌دهیم."
        primary={{ to: '/contact', label: 'صحبت با ما' }}
        secondary={{ to: '/projects', label: 'مشاهده پروژه‌ها' }}
      />
    </>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  )
}
