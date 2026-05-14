import type { Metadata } from 'next'
import { Section, SectionHeading, SectionLabel } from '@/app/components/site/Section'
import { PageHero } from '@/app/components/site/PageHero'
import { CtaBlock } from '@/app/components/site/CtaBlock'
import { buildMetadata } from '@/app/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'درباره',
  description:
    '۲رگ یک استودیوی کوچک و سینیور هوش مصنوعی است که AI کاربردی و عملیاتی برای تیم‌های جدی می‌سازد.',
  path: '/about',
})
const approach: Array<[string, string]> = [
  ['اول مسئله', 'از فهم جریان کار شروع می‌کنیم، نه از انتخاب تکنولوژی.'],
  ['ساده، اگر کافی است', 'ساده‌ترین ابزار را انتخاب می‌کنیم — گاهی حتی AI لازم نیست.'],
  ['ساخته‌شده برای اعتماد', 'ارزیابی، رصدپذیری و گاردریل از روز اول.'],
  ['فقط دست‌های سینیور', 'بدون برون‌سپاری. همان کسی که می‌بینید، می‌سازد.'],
  ['دوزبانه و جهانی', 'به فارسی و انگلیسی کار می‌کنیم، با تیم‌های گوناگون.'],
  ['شراکت بلندمدت', 'سیستم‌هایی می‌سازیم که تیم شما با آن رشد می‌کند و مالکش می‌ماند.'],
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="درباره ۲رگ"
        title={
          <>
            استودیویی کوچک و سینیور
            <br />
            برای کار جدی روی AI.
          </>
        }
        description={
          <>
            ۲رگ — تلفظ <span className="text-foreground font-medium">تو-رگ</span> — یک استودیوی هوش
            مصنوعی مولد است که سیستم‌های کاربردی AI را برای عملیات واقعی کسب‌وکار طراحی و می‌سازد.
          </>
        }
      />

      <Section>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel>مأموریت</SectionLabel>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              AI را در دوشنبه صبح، مفید کنیم.
            </h2>
          </div>
          <div className="space-y-6 md:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              بیشتر پروژه‌های AI نه به‌خاطر بد بودن مدل، بلکه به‌خاطر اشتباه بودن مسئله، گیج بودن
              استقرار یا از دست رفتن اعتماد، شکست می‌خورند.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              ما برای حل همین مسئله وجود داریم. به تیم‌ها کمک می‌کنیم از غوغای شعار رد شوند، رویکرد
              درست را انتخاب کنند، و AIای را عرضه کنند که در دنیای واقعی دوام می‌آورد — نه فقط در
              دمو.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading eyebrow="رویکرد" title={<>چطور فکر می‌کنیم.</>} />
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {approach.map(([t, d]) => (
            <div key={t} className="bg-card p-8">
              <div className="font-display text-xl font-bold">{t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel>چرا AI کاربردی</SectionLabel>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              ارزش واقعی، در بخش‌های پرزرق‌وبرق نیست.
            </h2>
          </div>
          <div className="space-y-6 md:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              ارزشمندترین AI که ما می‌سازیم، معمولاً سر از ویدئوی معرفی درنمی‌آورد. بی‌سروصدا تیکت
              پشتیبانی پاسخ می‌دهد، بند درست را در یک قرارداد پیدا می‌کند، یا گزارشی را که تیمی سه
              روز صرفش می‌کرد، در چند ساعت آماده می‌کند.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              کار ما این است که این نقاط را پیدا کنیم، خوب بسازیمشان، و آن‌قدر کنار شما بمانیم که
              مطمئن شویم پایدار کار می‌کنند.
            </p>
          </div>
        </div>
      </Section>

      <CtaBlock
        title="می‌خواهید ببینید با هم سازگاریم یا نه؟"
        primary={{ to: '/contact', label: 'رزرو جلسه مشاوره' }}
        secondary={{ to: '/projects', label: 'مشاهده نمونه‌کارها' }}
      />
    </>
  )
}
