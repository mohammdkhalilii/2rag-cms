'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { Button } from '@/app/components/ui/button'
import { useEffect, useState } from 'react'
import { nav } from '@/app/content/site'
import { Menu, X, ArrowDownLeft } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300  ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`rounded-sm px-3 py-1.5 text-sm font-medium transition-colors ${
                pathname === item.to
                  ? 'bg-muted text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button
            asChild
            variant="default"
            size="sm"
            className="rounded-none font-medium pixel-shadow-accent call-2-action-header"
          >
            <Link href="/contact">
              شروع پروژه
              <ArrowDownLeft className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <button
          className="grid h-9 w-9 place-items-center rounded-none border border-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="باز/بسته کردن منو"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-none pixel-shadow-accent ">
              <Link href="/contact" onClick={() => setOpen(false)}>
                شروع پروژه
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
