import type { Metadata } from 'next'
import { CalendarClock, Mail } from 'lucide-react'

import { PageHero } from '@/app/components/site/PageHero'
import { Section } from '@/app/components/site/Section'
import { site } from '@/app/content/site'
import { buildMetadata } from '@/app/lib/seo'

import { ContactForm } from './_components/ContactForm'

export const metadata: Metadata = buildMetadata({
  title: 'تماس',
  description:
    'درباره پروژه‌تان به ما بگویید. یک جلسه مشاوره رایگان با استودیوی هوش مصنوعی ۲رگ رزرو کنید.',
  path: '/contact',
})

const fitChecklist = [
  'جریان کاری واقعی برای بهبود دارید',
  'می‌توانید دسترسی به افراد درست را فراهم کنید',
  'دنبال یک شریک هستید، نه یک پیمانکار',
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="تماس"
        title={
          <>
            درباره پروژه‌تان
            <br />
            به ما بگویید.
          </>
        }
        description="یک یادداشت کوتاه کافی است. شخصاً ظرف یک روز کاری پاسخ می‌دهیم — معمولاً با چند سؤال دقیق و یک قدم بعدی پیشنهادی."
      />

      <Section className="!pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-5">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  مستقیم
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 inline-flex items-center gap-2 font-display text-2xl font-bold hover:text-accent"
                  dir="ltr"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  {site.email}
                </a>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  جلسه مشاوره
                </div>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-2 font-display text-2xl font-bold hover:text-accent"
                >
                  <CalendarClock className="h-5 w-5 text-accent" />
                  رزرو ۳۰ دقیقه
                </a>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  رایگان، صادقانه، بدون پیچ. می‌گوییم AI گزینه درستی برای مسئله شما هست یا نه.
                </p>
              </div>
              <div className="pixel-frame border border-foreground bg-card p-5">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  مناسب همکاری اگر
                </div>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {fitChecklist.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <ContactForm />
        </div>
      </Section>
    </>
  )
}
