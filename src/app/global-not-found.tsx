// app/global-not-found.tsx
import './(frontend)/globals.css'
import Link from 'next/link'
import { Button } from './components/ui/button'
import { ArrowUpLeft } from 'lucide-react'

export default function GlobalNotFound() {
  return (
    <html lang="fa" dir="rtl">
      <body>
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
          <h2 className="text-balance font-display text-5xl font-bold leading-[1.15] tracking-tight md:text-7xl lg:text-[5.25rem] mono">
            ارور ۴۰۴
            <br />{' '}
            <span className="relative inline-block">
              <span className="relative z-10"> صفحه‌ای یافت نشد</span>
            </span>
            .
            <span className="caret" />
          </h2>
          <p>صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-none px-6 pixel-shadow-accent">
              <Link href="/">
                <ArrowUpLeft className="ml-2 h-4 w-4" /> بازگشت به خانه
              </Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
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
