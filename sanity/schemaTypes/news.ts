import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'Newsroom',
  type: 'document',
  fieldsets: [
    { name: 'seo', title: '🔍 SEO Metadata', options: { collapsible: true, collapsed: false } },
    { name: 'article', title: '📰 Article Content', options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    defineField({
      name: 'seoTargetKeyword',
      title: 'Target Keyword',
      type: 'string',
      fieldset: 'seo',
      validation: (Rule) => Rule.required().warning('A target keyword is essential for SEO.'),
    }),
    defineField({
      name: 'seoSecondaryKeywords',
      title: 'Secondary Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'seo',
    }),
    defineField({
      name: 'seoMetaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      fieldset: 'seo',
      validation: (Rule) => Rule.max(170).warning('Meta descriptions over 160 characters may be truncated by Google.'),
    }),

    defineField({ name: 'title', title: 'Headline', type: 'string', fieldset: 'article', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, fieldset: 'article' }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      fieldset: 'article',
      options: {
        list: ['Press Release', 'Regulatory Notice', 'Firm Update', 'Award', 'Partnership'],
      },
    }),
    defineField({ name: 'date', title: 'Date', type: 'date', fieldset: 'article' }),
    defineField({ name: 'location', title: 'Location', type: 'string', description: 'e.g., LAHORE, PAKISTAN', fieldset: 'article' }),
    defineField({ name: 'excerpt', title: 'Summary', type: 'text', fieldset: 'article' }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', fieldset: 'article' }),
    defineField({ name: 'isFeatured', title: 'Feature in Newsroom?', type: 'boolean', fieldset: 'article' }),
    defineField({ name: 'content', title: 'Full Content', type: 'array', of: [{ type: 'block' }], fieldset: 'article' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type', media: 'coverImage' },
  },
})