import Link from 'next/link'
import { Logo } from './Logo'
import { ArrowUpLeft } from 'lucide-react'
import { site, social } from '@/app/content/site'

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="pixel-divider" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-60" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              ۲رگ یک استودیوی هوش مصنوعی مولد است؛ ما دستیارهای کاربردی، جست‌وجوی هوشمند روی اسناد و
              اتوماسیون مبتنی بر AI را برای عملیات واقعی کسب‌وکار طراحی و می‌سازیم.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse bg-accent" />
              <span dir="ltr">Q3 · پذیرش پروژه‌های جدید</span>
            </div>
          </div>

          <FooterCol
            title="استودیو"
            links={[
              { to: '/services', label: 'خدمات' },
              { to: '/projects', label: 'پروژه‌ها' },
              { to: '/about', label: 'درباره ما' },
              { to: '/contact', label: 'تماس' },
            ]}
          />
          <FooterCol
            title="بلاگ"
            links={[
              { to: '/blog', label: 'همه مقاله‌ها' },
              { to: '/blog', label: 'AI برای کسب‌وکار' },
              { to: '/blog', label: 'سیستم‌های RAG' },
              { to: '/blog', label: 'اتوماسیون با AI' },
            ]}
          />

          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest red">تماس</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent" dir="ltr">
                  {site.email}
                </a>
              </li>
              <li className="text-muted-foreground">تهران · همکاری دورکار در سراسر جهان</li>
            </ul>
            <div className="mt-6 flex gap-2 text-xs">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-none border border-border px-2.5 py-1 font-mono text-muted-foreground transition hover:border-accent hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="font-mono" dir="ltr">
            © {new Date().getFullYear()} تو-رگ &nbsp;
            <span className="font-normal">تمامی حقوق محفوظ است</span>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1 text-foreground hover:text-accent"
          >
            رزرو جلسه مشاوره
            <ArrowUpLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div className="md:col-span-2">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground red">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.to} className="text-foreground/90 hover:text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
