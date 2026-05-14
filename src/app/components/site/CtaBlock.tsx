import Link from 'next/link'
import { ArrowUpLeft } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { Section } from './Section'

type CtaProps = {
  title: string
  description?: string
  primary?: { to: string; label: string }
  secondary?: { to: string; label: string }
  bordered?: boolean
}

/**
 * The accented "let's talk" call-to-action block reused at the bottom of
 * most pages. Keeps copy/visual consistent without duplicating markup.
 */
export function CtaBlock({
  title,
  description,
  primary = { to: '/contact', label: 'شروع پروژه' },
  secondary,
  bordered = true,
}: CtaProps) {
  return (
    <Section className={bordered ? 'border-t border-border' : undefined}>
      <div className="pixel-frame relative overflow-hidden border border-foreground bg-card p-10 md:p-14">
        <div className="absolute inset-0 -z-10 bg-grid opacity-100" />
        <div className="absolute -left-20 -top-20 -z-10 h-80 w-80 bg-accent/15 blur-3xl" />
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-xl text-muted-foreground md:text-lg">{description}</p>
        )}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-none px-6 pixel-shadow-accent">
            <Link href={primary.to}>
              <ArrowUpLeft className="ml-2 h-4 w-4" /> {primary.label}
            </Link>
          </Button>
          {secondary && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-foreground bg-transparent px-6 pixel-shadow"
            >
              <Link href={secondary.to}>{secondary.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}
