'use client'

import { useState } from 'react'
import { ArrowUpLeft } from 'lucide-react'

import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Textarea } from '@/app/components/ui/textarea'

const projectTypes = [
  'دستیار هوشمند / چت‌بات',
  'RAG / هوش اسناد',
  'ایجنت AI / اتوماسیون',
  'استراتژی و مشاوره',
  'هنوز مطمئن نیستم',
]

export function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        setSent(true)
      }}
      className="md:col-span-7"
    >
      <div className="pixel-frame border border-foreground bg-card p-8 md:p-10">
        {sent ? (
          <div className="py-10 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center bg-accent text-accent-foreground">
              ✓
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold">پیام شما ارسال شد.</h2>
            <p className="mt-2 text-muted-foreground">ظرف یک روز کاری پاسخ می‌دهیم.</p>
          </div>
        ) : (
          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="نام" htmlFor="name">
                <Input
                  id="name"
                  required
                  placeholder="نام شما"
                  className="rounded-none border-foreground bg-background"
                />
              </Field>
              <Field label="ایمیل" htmlFor="email">
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  dir="ltr"
                  className="rounded-none border-foreground bg-background"
                />
              </Field>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="شرکت" htmlFor="company">
                <Input
                  id="company"
                  placeholder="نام شرکت"
                  className="rounded-none border-foreground bg-background"
                />
              </Field>
              <Field label="نوع پروژه" htmlFor="type">
                <select
                  id="type"
                  className="h-9 w-full rounded-none border border-foreground bg-background px-3 text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    انتخاب کنید…
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="چه مسئله‌ای را دنبال حلش هستید؟" htmlFor="msg">
              <Textarea
                id="msg"
                required
                rows={6}
                placeholder="چند جمله درباره مسئله، تیم‌تان و جایی که AI می‌تواند کمک کند."
                className="rounded-none border-foreground bg-background"
              />
            </Field>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">ظرف یک روز کاری شخصاً پاسخ می‌دهیم.</p>
              <Button type="submit" size="lg" className="rounded-none px-6 pixel-shadow-accent">
                <ArrowUpLeft className="ml-2 h-4 w-4" /> ارسال پیام
              </Button>
            </div>
          </div>
        )}
      </div>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={htmlFor}
        className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </Label>
      {children}
    </div>
  )
}
