import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

type MarkdownRendererProps = {
  content?: string | null
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null

  return (
    <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-pre:overflow-x-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-12 scroll-m-24 text-2xl font-bold">{children}</h2>
          ),
          h3: ({ children }) => <h3 className="mt-8 scroll-m-24 text-xl font-bold">{children}</h3>,
          p: ({ children }) => <p className="my-5 leading-8 text-muted-foreground">{children}</p>,
          ul: ({ children }) => (
            <ul className="my-5 list-disc space-y-2 pr-6 leading-8">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-5 list-decimal space-y-2 pr-6 leading-8">{children}</ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-r-4 border-primary pr-4 text-muted-foreground">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">{children}</code>
          ),
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-xl bg-muted p-4 text-sm">{children}</pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
