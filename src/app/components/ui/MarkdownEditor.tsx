'use client'

import React, { useEffect, useRef } from 'react'
import EasyMDE from 'easymde'
import 'easymde/dist/easymde.min.css'

const MarkdownEditor: React.FC<{ value?: string; onChange?: (val: string) => void }> = ({
  value,
  onChange,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const editorRef = useRef<EasyMDE | null>(null)

  useEffect(() => {
    if (textareaRef.current && !editorRef.current) {
      editorRef.current = new EasyMDE({
        element: textareaRef.current,
        initialValue: value || '',
        spellChecker: false,
        renderingConfig: {
          singleLineBreaks: false,
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
          'link',
          'image',
          'preview',
          'side-by-side',
          'guide',
        ],
      })

      editorRef.current.codemirror.on('change', () => {
        const newVal = editorRef.current?.value() || ''
        if (onChange) onChange(newVal)
      })
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.toTextArea()
        editorRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.value()) {
      editorRef.current.value(value || '')
    }
  }, [value])

  return <textarea ref={textareaRef} style={{ display: 'none' }} />
}

export default MarkdownEditor
