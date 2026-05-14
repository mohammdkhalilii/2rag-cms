import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpLeft, CheckCircle2 } from 'lucide-react'

import { CtaBlock } from '@/app/components/site/CtaBlock'
import { Section, SectionHeading } from '@/app/components/site/Section'
import { projects, type Project } from '@/app/content/projects'
import { site } from '@/app/content/site'
import { buildMetadata, serializeJsonLd } from '@/app/lib/seo'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

function getAdjacentProjects(project: Project) {
  const index = projects.findIndex((item) => item.slug === project.slug)

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  }
}

function getProjectDescription(project: Project) {
  return project.desc ?? `${project.challenge} ${project.impact}`
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {}
  }

  return buildMetadata({
    title: project.title,
    description: getProjectDescription(project),
    path: `/projects/${project.slug}`,
  })
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const { previous, next } = getAdjacentProjects(project)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: getProjectDescription(project),
    url: `${site.url}/projects/${project.slug}`,
    provider: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />

      <article>
        <header className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 -z-10 bg-grid opacity-100" />
          <div className="absolute inset-0 -z-10 hero-glow" />
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-28">
            <Link
              href="/projects"
              className="group mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent"
            >
              <ArrowUpLeft className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
              بازگشت به پروژه‌ها
            </Link>
            <div className="mb-6 inline-flex border border-border bg-card px-2.5 py-1 font-mono text-xs uppercase tracking-widest text-accent">
              {project.cat}
            </div>
            <h1 className="max-w-4xl text-balance font-display text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {getProjectDescription(project)}
            </p>
          </div>
        </header>

        <Section>
          <div className="grid gap-6 md:grid-cols-3">
            <CaseBlock label="چالش" value={project.challenge} />
            <CaseBlock label="راه‌حل" value={project.solution} />
            <CaseBlock label="تأثیر" value={project.impact} accent />
          </div>
        </Section>

        <Section className="border-t border-border">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="قالب صفحه پروژه"
                title={<>از مسئله تا اثر قابل اندازه‌گیری.</>}
                description="این صفحه برای هر پروژه از داده‌های ساختاریافته استفاده می‌کند و جای کافی برای اضافه‌کردن روایت کامل، شواهد و تصاویر بعدی دارد."
              />
            </div>
            <div className="space-y-6 md:col-span-7">
              {[
                'زمینه و محدودیت‌های پروژه را دقیق بنویسید.',
                'تصمیم‌های معماری و چرایی انتخاب راه‌حل را توضیح دهید.',
                'اثر کسب‌وکاری را با عدد، زمان یا کاهش ریسک نشان دهید.',
              ].map((item) => (
                <div key={item} className="flex gap-3 border-t border-border pt-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <p className="leading-8 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="border-t border-border">
          <SectionHeading eyebrow="تکنولوژی" title={<>اجزای کلیدی.</>} />
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="border border-border bg-card px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground"
                dir="ltr"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section className="border-t border-border">
          <nav className="grid gap-4 md:grid-cols-2">
            {previous && <AdjacentProject project={previous} label="پروژه قبلی" />}
            {next && <AdjacentProject project={next} label="پروژه بعدی" />}
          </nav>
        </Section>
      </article>

      <CtaBlock
        title="مسئله مشابهی دارید؟"
        description="در یک جلسه کوتاه، می‌فهمیم این نوع راه‌حل برای شما ارزش ساخت دارد یا نه."
        primary={{ to: '/contact', label: 'شروع پروژه' }}
        secondary={{ to: '/services', label: 'مشاهده خدمات' }}
      />
    </>
  )
}

function CaseBlock({
  label,
  value,
  accent = false,
}: {
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <section className="pixel-frame border border-foreground bg-card p-7">
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <p className={`mt-4 leading-8 ${accent ? 'font-medium text-accent' : 'text-foreground'}`}>
        {value}
      </p>
    </section>
  )
}

function AdjacentProject({ project, label }: { project: Project; label: string }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group border border-border bg-card p-5 transition hover:border-foreground hover:pixel-shadow"
    >
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-3 font-display text-lg font-bold group-hover:text-accent">
        {project.title}
      </div>
    </Link>
  )
}
