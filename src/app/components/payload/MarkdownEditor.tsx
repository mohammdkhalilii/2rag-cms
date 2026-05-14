'use client'

import { useEffect, useRef } from 'react'
import type { TextareaFieldClientComponent } from 'payload'
import { useField } from '@payloadcms/ui'

import 'easymde/dist/easymde.min.css'

const MarkdownEditor: TextareaFieldClientComponent = ({ path, field }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const editorRef = useRef<any>(null)

  const { value, setValue } = useField<string>({ path })

  useEffect(() => {
    let mounted = true

    async function initEditor() {
      if (!textareaRef.current || editorRef.current) return

      const EasyMDE = (await import('easymde')).default

      if (!mounted || !textareaRef.current) return

      editorRef.current = new EasyMDE({
        element: textareaRef.current,
        initialValue: value || '',
        spellChecker: false,
        autofocus: false,
        minHeight: '420px',
        direction: 'rtl',
        status: false,
        renderingConfig: {
          singleLineBreaks: false,
          codeSyntaxHighlighting: true,
        },
        toolbar: [
          'bold',
          'italic',
          'heading',
          '|',
          'quote',
          'code',
          'unordered-list',
          'ordered-list',
          '|',
          'link',
          'image',
          '|',
          'preview',
          'side-by-side',
          'fullscreen',
          '|',
          'guide',
        ],
      })

      editorRef.current.codemirror.on('change', () => {
        const nextValue = editorRef.current?.value() || ''
        setValue(nextValue)
      })
    }

    initEditor()

    return () => {
      mounted = false

      if (editorRef.current) {
        editorRef.current.toTextArea()
        editorRef.current = null
      }
    }
  }, [path, setValue])

  useEffect(() => {
    if (!editorRef.current) return

    const currentValue = editorRef.current.value()
    const nextValue = value || ''

    if (currentValue !== nextValue) {
      editorRef.current.value(nextValue)
    }
  }, [value])

  return (
    <div className="field-type textarea">
      <label className="field-label" htmlFor={path}>
        {typeof field.label === 'string' ? field.label : 'Content'}
      </label>

      <textarea
        id={path}
        ref={textareaRef}
        defaultValue={value || ''}
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default MarkdownEditor
