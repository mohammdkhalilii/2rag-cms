import type { Metadata } from 'next'

import { PageHero } from '@/app/components/site/PageHero'
import { projects } from '@/app/content/projects'
import { site } from '@/app/content/site'
import { buildMetadata, serializeJsonLd } from '@/app/lib/seo'

import { ProjectsGrid } from './_components/ProjectsGrid'

export const metadata: Metadata = buildMetadata({
  title: 'پروژه‌ها',
  description:
    'نمونه‌کارهای منتخب از ۲رگ — دستیارهای هوشمند، سیستم‌های RAG و ایجنت‌های AI که برای تیم‌های واقعی ساخته‌ایم.',
  path: '/projects',
})

const projectsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: projects.map((project, index) => ({
    '@type': 'CreativeWork',
    position: index + 1,
    name: project.title,
    description: project.desc ?? project.impact,
    url: `${site.url}/projects/${project.slug}`,
  })),
}

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(projectsJsonLd),
        }}
      />
      <PageHero
        eyebrow="نمونه‌کارها"
        title={
          <>
            سیستم‌های AI ساخته‌شده
            <br />
            <span className="text-muted-foreground">برای تیم‌های واقعی.</span>
          </>
        }
        description="مجموعه‌ای از پروژه‌های اخیر در حوزه دستیارها، RAG و ایجنت‌های AI."
      />
      <ProjectsGrid />
    </>
  )
}
