import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, SectionHeading } from '@/app/components/site/Section'
import { CtaBlock } from '@/app/components/site/CtaBlock'
import { Button } from '@/app/components/ui/button'
import { ArrowUpLeft, Sparkles } from 'lucide-react'
import { services } from '@/app/content/services'
import { featuredProjects } from '@/app/content/projects'
import { homepagePosts } from '@/app/content/posts'
import { buildMetadata } from '@/app/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: '۲رگ — هوش مصنوعی کاربردی برای کسب‌وکار',
  description:
    'ما سیستم‌های هوش مصنوعی می‌سازیم که به تیم‌ها کمک می‌کنند جست‌وجو کنند، پاسخ بدهند، اتوماتیک کار کنند و هوشمندتر تصمیم بگیرند.',
  path: '/',
  absoluteTitle: true,
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesPreview />
      <Outcomes />
      <FeaturedCases />
      <WhyUs />
      <Process />
      <BlogHighlights />
      <CtaBlock
        title="مسئله‌ای دارید که با AI ارزش حل‌کردن داشته باشد؟"
        description="یک جلسه ۳۰ دقیقه‌ای رایگان رزرو کنید. صادقانه می‌گوییم AI پاسخ درست برای شما هست یا نه — و اگر هست، چطور سراغش می‌رویم."
        primary={{ to: '/contact', label: 'رزرو جلسه مشاوره' }}
        secondary={{ to: '/services', label: 'مشاهده خدمات' }}
      />
    </>
  )
}

const heroStats: Array<[string, string]> = [
  ['+۱۲', 'سیستم AI مستقر شده'],
  ['۶', 'صنعت تحت پوشش'],
  ['۳ هفته', 'میانگین استقرار اول'],
  ['۱۰۰٪', 'تیم سینیور و درون‌سازمانی'],
]

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-grid opacity-100" />
      <div className="absolute inset-0 -z-10 hero-glow" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />
      <div className="pointer-events-none absolute right-8 top-24 hidden md:block">
        <PixelCluster />
      </div>
      <div className="pointer-events-none absolute left-10 bottom-32 hidden md:block">
        <PixelCluster reverse />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-24 md:pb-40 md:pt-32">
        <div className="mb-8 inline-flex items-center gap-2 border border-foreground bg-background px-3 py-1 font-mono text-xs">
          <span className="h-2 w-2 animate-pulse bg-accent" />
          <span className="text-foreground">استودیوی هوش مصنوعی تو-رگ</span>
          <span className="text-muted-foreground">/ خانه</span>
        </div>
        <h1 className="text-balance font-display text-5xl font-bold leading-[1.15] tracking-tight md:text-7xl lg:text-[5.25rem]">
          هوش مصنوعی کاربردی،
          <br />
          برای{' '}
          <span className="relative inline-block">
            <span className="relative z-10">کسب‌وکارهای واقعی</span>
            <span className="absolute -bottom-2 right-0 left-0 -z-0 h-3 bg-accent/30" />
          </span>
          .
          <span className="caret" />
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          ما سیستم‌های هوش مصنوعی طراحی و می‌سازیم که به تیم‌ها کمک می‌کنند جست‌وجو کنند، پاسخ
          بدهند، اتوماتیک کار کنند و هوشمندتر تصمیم بگیرند — از استراتژی تا استقرار.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="rounded-none px-6 pixel-shadow-accent">
            <Link href="/contact">
              <ArrowUpLeft className="ml-2 h-4 w-4" /> شروع پروژه
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none border-foreground bg-transparent px-6 pixel-shadow"
          >
            <Link href="/projects">مشاهده پروژه‌ها</Link>
          </Button>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
          {heroStats.map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-3xl font-bold tracking-tight md:text-4xl font-mono">
                {k}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PixelCluster({ reverse = false }: { reverse?: boolean }) {
  const pattern = [
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0],
  ]
  return (
    <div className={`grid grid-cols-6 gap-1 ${reverse ? 'rotate-180' : ''}`}>
      {pattern.flat().map((b, i) => (
        <span
          key={i}
          className={`h-3 w-3 ${b ? (i % 3 === 0 ? 'bg-accent' : 'bg-foreground') : 'bg-transparent'}`}
        />
      ))}
    </div>
  )
}

function LogoMarquee() {
  const items = ['عملیات', 'حقوقی', 'سلامت', 'تجارت الکترونیک', 'فین‌تک', 'تولید', 'SaaS', 'آموزش']
  return (
    <div className="border-b border-border py-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="flex w-max animate-marquee gap-12 px-6 font-mono text-sm uppercase tracking-widest text-muted-foreground">
        {[...items, ...items, ...items].map((x, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="h-2 w-2 bg-accent" />
            {x}
          </span>
        ))}
      </div>
    </div>
  )
}

function ServicesPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="خدمات"
        title={
          <>
            چه چیزی می‌سازیم،
            <br />
            از صفر تا استقرار.
          </>
        }
        description="شش خط خدمت متمرکز که کل مسیر از ایده تا یک سیستم AI پایدار در محیط واقعی را پوشش می‌دهد."
      />
      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.slug} className="group relative bg-card p-7 transition-colors hover:bg-muted">
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center border border-foreground bg-background text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <ArrowUpLeft className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-accent" />
            </div>
            <h3 className="mt-6 font-display text-lg font-bold leading-snug">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent"
        >
          مشاهده همه خدمات
          <ArrowUpLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
        </Link>
      </div>
    </Section>
  )
}

const outcomes: Array<[string, string]> = [
  ['−۶۲٪', 'کاهش بار پشتیبانی با دستیار آموزش‌دیده روی اسناد داخلی'],
  ['۱۰×', 'بازیابی سریع‌تر دانش بین تیم‌ها با جست‌وجوی RAG'],
  ['+۳۸٪', 'افزایش نرخ تبدیل لید پس از استقرار کوپایلت فروش'],
  ['۲۴/۷', 'پوشش عملیاتی توسط ایجنت‌های نظارت‌شده'],
]

function Outcomes() {
  return (
    <Section className="border-t border-border">
      <SectionHeading
        eyebrow="نتایج"
        title={<>نتیجه واقعی، نه دموی نمایشی.</>}
        description="نمونه‌ای از خروجی سیستم‌های AI که با تیم‌های عملیاتی به محیط واقعی رسانده‌ایم."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {outcomes.map(([k, v]) => (
          <div
            key={v}
            className="pixel-frame group relative overflow-hidden border border-foreground bg-card p-8 transition hover:bg-muted"
          >
            <div className="absolute left-0 top-0 h-16 w-16 bg-pixels opacity-60" />
            <div className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl font-mono">
              {k}
            </div>
            <div className="mt-3 max-w-md text-sm text-muted-foreground">{v}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function FeaturedCases() {
  return (
    <Section className="border-t border-border">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading eyebrow="نمونه‌کارها" title={<>پروژه‌های منتخب.</>} />
        <Link
          href="/projects"
          className="hidden shrink-0 font-mono text-xs uppercase tracking-widest text-accent md:inline-flex md:items-center md:gap-2"
        >
          همه پروژه‌ها <ArrowUpLeft className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredProjects.map((c, i) => (
          <Link
            key={c.slug}
            href={`/projects/${c.slug}`}
            className="pixel-frame group relative flex aspect-[4/5] flex-col justify-between overflow-hidden border border-foreground bg-card p-6 transition hover:bg-muted"
          >
            <div className="absolute inset-0 -z-10 bg-pixels opacity-40 transition-opacity group-hover:opacity-80" />
            <div className="absolute -left-10 -top-10 h-40 w-40 bg-accent/10 blur-3xl transition-opacity group-hover:bg-accent/30" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                <span dir="ltr">{String(i + 1).padStart(2, '0')}</span> · {c.cat}
              </span>
              <ArrowUpLeft className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-accent" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc ?? c.impact}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}

const reasons: Array<[string, string]> = [
  ['تفکر روشن قبل از ساخت', 'اول مسئله واقعی را می‌فهمیم، بعد سراغ مدل می‌رویم.'],
  ['AI کاربردی، نه شعار', 'سیستمی می‌سازیم که دوشنبه صبح در تیم شما کار می‌کند.'],
  ['متناسب با جریان کار شما', 'هر راه‌حل بر اساس نحوه کار واقعی تیم شما طراحی می‌شود.'],
  ['ساخته‌شده برای اعتماد', 'ارزیابی، پایش و گاردریل از روز اول داخل سیستم است.'],
  ['مالکیت کامل، انتها به انتها', 'از استراتژی تا استقرار با یک تیم متمرکز کار می‌کنید.'],
]

function WhyUs() {
  return (
    <Section className="border-t border-border">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="چرا ۲رگ"
            title={<>یک استودیو ساخته‌شده برای کار جدی روی AI.</>}
            description="یک تیم کوچک و سینیور. بدون واسطه، بدون برون‌سپاری، بدون شعار."
          />
        </div>
        <ul className="md:col-span-7">
          {reasons.map(([t, d], i) => (
            <li
              key={t}
              className="group flex items-start gap-6 border-t border-border py-6 transition-colors hover:bg-muted"
            >
              <span className="font-mono text-xs text-muted-foreground" dir="ltr">
                0{i + 1}
              </span>
              <div className="flex-1">
                <div className="font-display text-xl font-bold">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </div>
              <Sparkles className="mt-1 h-4 w-4 text-muted-foreground opacity-0 transition group-hover:text-accent group-hover:opacity-100" />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

const steps: Array<[string, string]> = [
  ['شناخت', 'به جریان کار، داده و محدودیت‌های واقعی شما عمیق نگاه می‌کنیم.'],
  ['طراحی', 'رویکرد درست AI را انتخاب می‌کنیم — گاهی حتی LLM لازم نیست.'],
  ['ساخت و تست', 'نمونه‌سازی سریع، ارزیابی واقعی، تکرار سریع.'],
  ['استقرار و بهبود', 'به محیط عملیاتی می‌بریم، پایش می‌کنیم و رشد می‌دهیم.'],
]

function Process() {
  return (
    <Section className="border-t border-border">
      <SectionHeading eyebrow="فرایند" title={<>چطور کار می‌کنیم.</>} />
      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
        {steps.map(([t, d], i) => (
          <div key={t} className="relative bg-card p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-accent" dir="ltr">
              STEP 0{i + 1}
            </div>
            <div className="mt-6 font-display text-2xl font-bold">{t}</div>
            <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            <div className="absolute bottom-3 left-3 grid grid-cols-3 gap-[2px]">
              {[...Array(9)].map((_, k) => (
                <span key={k} className={`h-1 w-1 ${k <= i * 2 ? 'bg-accent' : 'bg-border'}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function BlogHighlights() {
  return (
    <Section className="border-t border-border">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading eyebrow="بلاگ" title={<>یادداشت‌های استودیو.</>} />
        <Link
          href="/blog"
          className="hidden shrink-0 font-mono text-xs uppercase tracking-widest text-accent md:inline-flex md:items-center md:gap-2"
        >
          همه مقاله‌ها <ArrowUpLeft className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {homepagePosts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group flex flex-col border border-border bg-card p-6 transition hover:border-foreground hover:pixel-shadow"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-accent">{p.cat}</div>
            <h3 className="mt-6 font-display text-xl font-bold leading-snug group-hover:text-accent">
              {p.title}
            </h3>
            <div className="mt-auto flex items-center justify-between pt-8 text-xs text-muted-foreground">
              <span>زمان مطالعه: {p.read}</span>
              <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-accent" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
