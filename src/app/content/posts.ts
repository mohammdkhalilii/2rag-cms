export type Post = {
  slug: string;
  cat: string;
  title: string;
  excerpt?: string;
  read: string;
  date: string;
  /** ISO-8601 publish date for sitemap and JSON-LD */
  publishedAt: string;
  featured?: boolean;
};

export const blogCategories = [
  "همه",
  "AI برای کسب‌وکار",
  "ابزارهای AI",
  "RAG و دانش",
  "اتوماسیون با AI",
  "تفکر محصول",
  "آموزش",
] as const;

export const posts: Post[] = [
  {
    slug: "gen-ai-roi-2025",
    cat: "AI برای کسب‌وکار",
    title: "هوش مصنوعی مولد در ۲۰۲۵ کجا واقعاً ROI می‌سازد؟",
    excerpt:
      "نقشه‌ای کاربردی از جاهایی که پروژه‌های AI سریع جواب می‌دهند، جاهایی که بی‌سروصدا شکست می‌خورند، و چطور قبل از شروع تفاوتشان را تشخیص بدهیم.",
    read: "۸ دقیقه",
    date: "اردیبهشت ۱۴۰۵",
    publishedAt: "2026-04-20",
    featured: true,
  },
  {
    slug: "rag-without-hallucination",
    cat: "RAG و دانش",
    title: "طراحی RAG که روی اسناد شما توهم نمی‌زند",
    read: "۹ دقیقه",
    date: "اردیبهشت ۱۴۰۵",
    publishedAt: "2026-04-12",
  },
  {
    slug: "when-to-use-ai-agents",
    cat: "اتوماسیون با AI",
    title: "کِی از ایجنت AI استفاده کنیم — و کِی نکنیم",
    read: "۵ دقیقه",
    date: "فروردین ۱۴۰۵",
    publishedAt: "2026-04-02",
  },
  {
    slug: "smallest-ai-feature",
    cat: "تفکر محصول",
    title: "کوچک‌ترین فیچر AI که واقعاً ارزش انتشار دارد",
    read: "۶ دقیقه",
    date: "فروردین ۱۴۰۵",
    publishedAt: "2026-03-28",
  },
  {
    slug: "practical-ai-stack-1404",
    cat: "ابزارهای AI",
    title: "یک استک کاربردی برای ساخت دستیار AI در ۱۴۰۵",
    read: "۷ دقیقه",
    date: "اسفند ۱۴۰۴",
    publishedAt: "2026-03-15",
  },
  {
    slug: "ai-literacy-leadership",
    cat: "آموزش",
    title: "سواد AI برای تیم‌های رهبری: یک دوره ۱ ساعته",
    read: "۴ دقیقه",
    date: "اسفند ۱۴۰۴",
    publishedAt: "2026-03-05",
  },
  {
    slug: "writing-ai-briefs",
    cat: "AI برای کسب‌وکار",
    title: "چطور یک بریف AI بنویسید که مهندسانتان عاشقش شوند",
    read: "۵ دقیقه",
    date: "بهمن ۱۴۰۴",
    publishedAt: "2026-02-18",
  },
  {
    slug: "rag-evaluation",
    cat: "RAG و دانش",
    title: "ارزیابی: بخشی از RAG که هیچ‌کس دوست ندارد انجامش بدهد",
    read: "۱۰ دقیقه",
    date: "بهمن ۱۴۰۴",
    publishedAt: "2026-02-08",
  },
  {
    slug: "human-in-the-loop",
    cat: "اتوماسیون با AI",
    title: "انسان در حلقه، طراحی‌شده به‌درستی",
    read: "۶ دقیقه",
    date: "دی ۱۴۰۴",
    publishedAt: "2026-01-22",
  },
];

export const featuredPost = posts.find((p) => p.featured) ?? posts[0];
export const homepagePosts = posts.slice(0, 3);