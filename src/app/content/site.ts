/**
 * Global brand & site config — single source of truth used by SEO helpers,
 * navigation, footer, JSON-LD and sitemap.
 */
export const site = {
  name: "۲رگ",
  brand: "2rag",
  pronunciation: "تو-رگ",
  tagline: "هوش مصنوعی کاربردی برای کسب‌وکار",
  description:
    "۲رگ یک استودیوی هوش مصنوعی است که دستیارهای هوشمند، سیستم‌های RAG و اتوماسیون مبتنی بر AI را برای کسب‌وکارهای واقعی طراحی و پیاده‌سازی می‌کند.",
  url: "https://2rag.studio",
  email: "hello@2rag.studio",
  locale: "fa_IR",
  twitter: "@2rag",
  defaultOgType: "website",
} as const;

export const nav = [
  { to: "/", label: "خانه" },
  { to: "/services", label: "خدمات" },
  { to: "/projects", label: "پروژه‌ها" },
  { to: "/blog", label: "بلاگ" },
  { to: "/about", label: "درباره" },
  { to: "/contact", label: "تماس" },
] as const;

export const social = [
  { label: "X", href: "https://x.com/2rag" },
  { label: "GitHub", href: "https://github.com/2rag" },
  { label: "LinkedIn", href: "https://linkedin.com/company/2rag" },
  { label: "IG", href: "https://instagram.com/2rag" },
] as const;