export type ProjectCategory = "همه" | "دستیار" | "RAG" | "ایجنت" | "اتوماسیون";

export type Project = {
  slug: string;
  cat: Exclude<ProjectCategory, "همه">;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
  /** Short summary used on the homepage card grid */
  desc?: string;
};

export const projectCategories: ProjectCategory[] = [
  "همه",
  "دستیار",
  "RAG",
  "ایجنت",
  "اتوماسیون",
];

export const projects: Project[] = [
  {
    slug: "legal-rag",
    cat: "RAG",
    title: "دستیار حقوقی RAG برای یک شرکت ملی",
    challenge:
      "بیش از ۴۰هزار قرارداد و سند سیاست‌گذاری، عملاً غیرقابل جست‌وجو بود.",
    solution: "RAG مبتنی بر شواهد با ارجاع، دسترسی نقش‌محور و جریان بازبینی.",
    impact: "بازیابی ۱۰ برابر سریع‌تر. هر هفته ساعت‌ها از وقت هر وکیل آزاد شد.",
    tech: ["RAG", "Vector DB", "Eval", "Hybrid Search"],
    desc: "موتور پاسخ قابل‌اعتماد روی ۴۰هزار قرارداد و سند سیاست‌گذاری.",
  },
  {
    slug: "saas-copilot",
    cat: "دستیار",
    title: "کوپایلت پشتیبانی چندزبانه برای یک تیم SaaS",
    challenge: "تیم پشتیبانی زیر فشار سؤال‌های تکراری به سه زبان بود.",
    solution: "دستیار آموزش‌دیده روی حوزه با انحراف، ارجاع و تحلیل.",
    impact: "−۶۲٪ بار کاری، +۱۸ NPS در ۹۰ روز.",
    tech: ["LLM", "Knowledge Base", "Helpdesk"],
    desc: "زمان پاسخ نصف شد و رضایت مشتری رشد کرد.",
  },
  {
    slug: "ecom-ops-agent",
    cat: "ایجنت",
    title: "ایجنت عملیات برای یک تیم تجارت الکترونیک",
    challenge: "دسته‌بندی دستی استرداد، ایمیل تأمین‌کننده و مشکلات سفارش.",
    solution: "ایجنت نظارت‌شده‌ای که دسته‌بندی، پاسخ پیش‌نویس و مسیریابی می‌کند.",
    impact: "حدود ۲۸ ساعت در هفته صرفه‌جویی. صفر اقدام بدون نظارت.",
    tech: ["Agentic Flow", "Tool Use", "HITL"],
    desc: "دسته‌بندی سفارش، استرداد و مکاتبه با تأمین‌کننده اتوماتیک شد.",
  },
  {
    slug: "fintech-reports",
    cat: "اتوماسیون",
    title: "تولیدکننده گزارش داخلی برای یک فین‌تک",
    challenge: "تحلیلگرها روزها صرف ساخت گزارش هفتگی سرمایه‌گذاران می‌کردند.",
    solution: "خط‌لوله AI انتها به انتها برای پیش‌نویس، قالب‌بندی و راستی‌آزمایی.",
    impact: "چرخه هفتگی از ۳ روز به ۴ ساعت کاهش یافت.",
    tech: ["Pipelines", "Structured Output", "Eval"],
  },
  {
    slug: "clinical-knowledge",
    cat: "RAG",
    title: "دستیار دانش بالینی برای یک ارائه‌دهنده سلامت",
    challenge: "کادر درمان به‌سرعت نمی‌توانست پروتکل‌های داخلی را پیدا کند.",
    solution: "RAG روی پروتکل‌ها با گاردریل سخت و الزام به ارجاع.",
    impact: "تصمیم‌گیری سریع‌تر، ارجاع‌های کمتر، ممیزی کامل.",
    tech: ["RAG", "Guardrails", "Audit"],
  },
  {
    slug: "hr-onboarding",
    cat: "دستیار",
    title: "کوپایلت آنبوردینگ برای تیم منابع انسانی",
    challenge: "نیروهای جدید راه ساده‌ای برای یافتن سیاست‌ها و مزایا نداشتند.",
    solution: "دستیار همیشه‌در‌دسترس HR، آموزش‌دیده روی هندبوک شرکت.",
    impact: "۷۰٪ سؤالات HR در هفته اول خودسرویس شد.",
    tech: ["Assistant", "Slack", "RAG"],
  },
];

/** Highlighted on the homepage. */
export const featuredProjects: Project[] = projects.slice(0, 3);