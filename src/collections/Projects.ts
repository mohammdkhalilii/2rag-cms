import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'cat', '_status'],
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
      name: 'desc',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'challenge',
      type: 'textarea',
      required: true,
    },
    {
      name: 'solution',
      type: 'textarea',
      required: true,
    },
    {
      name: 'impact',
      type: 'textarea',
      required: true,
    },
    {
      name: 'tech',
      label: 'Technologies',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
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
