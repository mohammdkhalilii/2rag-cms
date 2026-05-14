// app/components/RichTextRenderer.tsx
'use client'

import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react'

export function RichTextRenderer({ content }: { content: any }) {
  if (!content) return null
  return <LexicalRichText data={content} />
}
