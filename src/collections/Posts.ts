import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'cat', 'publishedAt', '_status'],
  },

  access: {
    read: ({ req }) => {
      if (req.user) return true

      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },

  versions: {
    drafts: {
      autosave: true,
    },
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'cat',
      label: 'Category',
      type: 'text',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'read',
      label: 'Read Time',
      type: 'text',
      defaultValue: '۵ دقیقه',
    },
    {
      name: 'date',
      type: 'text',
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Content (Markdown)',
      required: true,
      admin: {
        description:
          'Write the blog post in Markdown. Supports headings, links, lists, code blocks, images, and tables.',
        components: {
          Field: {
            path: '@/app/components/payload/MarkdownEditor',
          },
        },
      },
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
