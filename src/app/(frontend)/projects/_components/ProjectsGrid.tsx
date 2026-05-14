'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpLeft } from 'lucide-react'

import { Section } from '@/app/components/site/Section'
import { Button } from '@/app/components/ui/button'
import { projectCategories, projects, type ProjectCategory } from '@/app/content/projects'

export function ProjectsGrid() {
  const [active, setActive] = useState<ProjectCategory>('همه')
  const filtered =
    active === 'همه' ? projects : projects.filter((project) => project.cat === active)

  return (
    <Section className="!pt-12">
      <div className="mb-10 flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`border px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition ${
              active === category
                ? 'border-foreground bg-foreground text-background'
                : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => (
          <Link
            key={project.slug}
            id={project.slug}
            href={`/projects/${project.slug}`}
            className="pixel-frame group relative flex flex-col overflow-hidden border border-foreground bg-card p-8 transition hover:bg-muted"
          >
            <div className="absolute -left-16 -top-16 h-48 w-48 bg-accent/10 blur-3xl transition-opacity group-hover:bg-accent/25" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                <span dir="ltr">{String(index + 1).padStart(2, '0')}</span> · {project.cat}
              </span>
              <ArrowUpLeft className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:text-accent" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold leading-tight md:text-3xl">
              {project.title}
            </h2>
            <dl className="mt-6 grid gap-4 text-sm">
              <Row label="چالش">{project.challenge}</Row>
              <Row label="راه‌حل">{project.solution}</Row>
              <Row label="تأثیر">
                <span className="text-accent font-medium">{project.impact}</span>
              </Row>
            </dl>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  dir="ltr"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border border-foreground bg-card p-8">
        <div>
          <div className="font-display text-xl font-bold">مسئله مشابهی دارید؟</div>
          <p className="text-sm text-muted-foreground">
            معمولاً در یک جلسه می‌فهمیم AI گزینه درستی هست یا نه.
          </p>
        </div>
        <Button asChild className="rounded-none px-6 pixel-shadow-accent">
          <Link href="/contact">
            <ArrowUpLeft className="ml-2 h-4 w-4" /> شروع پروژه
          </Link>
        </Button>
      </div>
    </Section>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[90px_1fr] items-baseline gap-4 border-t border-border pt-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </dt>
      <dd className="text-foreground">{children}</dd>
    </div>
  )
}
