import type { ReactNode } from "react";
import { SectionLabel } from "./Section";

/**
 * Shared hero band used at the top of every inner route (Services, Projects,
 * Blog, About, Contact). Keeps spacing, grid background and typography
 * identical across pages.
 */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-grid opacity-100" />
      <div className="absolute inset-0 -z-10 hero-glow" />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-28">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="text-balance font-display text-5xl font-bold leading-[1.15] tracking-tight md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}