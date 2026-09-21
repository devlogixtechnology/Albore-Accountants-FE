import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  fieldsets: [
    { name: 'seo', title: '🔍 SEO Metadata', options: { collapsible: true, collapsed: false } },
    { name: 'post', title: '📝 Post Content', options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    // ─── SEO METADATA ──────────────────────────────────────────
    defineField({
      name: 'seoTargetKeyword',
      title: 'Target Keyword',
      type: 'string',
      fieldset: 'seo',
      description: 'Primary search query (e.g., "FBR corporate tax filing Lahore", "statutory audit checklist")',
      validation: (Rule) => Rule.required().warning('A target keyword is essential for SEO.'),
    }),
    defineField({
      name: 'seoSecondaryKeywords',
      title: 'Secondary Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'seo',
      description: 'Supporting keywords (3-5 recommended)',
    }),
    defineField({
      name: 'seoMetaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      fieldset: 'seo',
      description: 'The snippet shown in Google search results (150-160 characters).',
      validation: (Rule) => Rule.max(170).warning('Meta descriptions over 160 characters may be truncated by Google.'),
    }),

    // ─── POST CONTENT ──────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title / Headline',
      type: 'string',
      fieldset: 'post',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      fieldset: 'post',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author / Lead Partner',
      type: 'reference',
      to: [{ type: 'author' }],
      fieldset: 'post',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      fieldset: 'post',
      options: {
        list: [
          { title: 'Tax & Compliance', value: 'Tax & Compliance' },
          { title: 'Audit & Assurance', value: 'Audit & Assurance' },
          { title: 'Corporate & SECP', value: 'Corporate & SECP' },
          { title: 'Financial Advisory', value: 'Financial Advisory' },
          { title: 'Bookkeeping', value: 'Bookkeeping' },
        ],
      },
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g., 5 min read',
      fieldset: 'post',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      fieldset: 'post',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary (Excerpt)',
      type: 'text',
      rows: 3,
      fieldset: 'post',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'post',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for screen readers and SEO.',
        }),
      ],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature This Post?',
      type: 'boolean',
      fieldset: 'post',
      initialValue: false,
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'array',
      fieldset: 'post',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'caption', type: 'string', title: 'Caption' }],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
})