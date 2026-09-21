import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fieldsets: [
    { name: 'seo', title: '🔍 SEO Metadata', options: { collapsible: true, collapsed: false } },
    { name: 'overview', title: '📋 Case Study Overview', options: { collapsible: true, collapsed: false } },
    { name: 'sidebar', title: '📊 Sidebar Data', options: { collapsible: true, collapsed: true } },
    { name: 'narrative', title: '📝 The Narrative', options: { collapsible: true, collapsed: true } },
    { name: 'evidence', title: '📸 Visual Evidence', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // ─── SEO METADATA ──────────────────────────────────────────
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

    // ─── CASE STUDY OVERVIEW ───────────────────────────────────
    defineField({ name: 'title', title: 'Title / Headline', type: 'string', fieldset: 'overview', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, fieldset: 'overview' }),
    defineField({ name: 'client', title: 'Client / Industry Label', type: 'string', fieldset: 'overview' }),
    defineField({
      name: 'category',
      title: 'Sector',
      type: 'string',
      fieldset: 'overview',
      options: {
        list: [
          'Manufacturing',
          'Retail & Wholesale',
          'Tech & Software Export',
          'Real Estate & Construction',
          'Healthcare & Pharma',
          'Financial Services & FinTech',
          'Logistics & Supply Chain',
        ],
      },
    }),
    defineField({ name: 'impactStat', title: 'Impact Metric (The Hook)', type: 'string', description: 'e.g., 40% Reduction in Tax Exposure', fieldset: 'overview' }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true }, fieldset: 'overview' }),
    defineField({ name: 'isFeatured', title: 'Featured Case Study?', type: 'boolean', initialValue: false, fieldset: 'overview' }),

    // ─── SIDEBAR DATA ──────────────────────────────────────────
    defineField({ name: 'timeline', title: 'Timeline', type: 'string', description: 'e.g., 6 Months', fieldset: 'sidebar' }),
    defineField({ name: 'services', title: 'Services Deployed', type: 'array', of: [{ type: 'string' }], fieldset: 'sidebar' }),
    defineField({ name: 'stack', title: 'Framework / Tech / Tools', type: 'array', of: [{ type: 'string' }], fieldset: 'sidebar' }),
    defineField({
      name: 'stats',
      title: 'Key Stats',
      type: 'array',
      fieldset: 'sidebar',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value' },
          ],
        },
      ],
    }),

    // ─── THE NARRATIVE ─────────────────────────────────────────
    defineField({ name: 'challenge', title: 'The Challenge', type: 'array', of: [{ type: 'block' }], fieldset: 'narrative' }),
    defineField({ name: 'solution', title: 'The Solution', type: 'array', of: [{ type: 'block' }], fieldset: 'narrative' }),

    // ─── VISUAL EVIDENCE ───────────────────────────────────────
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }], fieldset: 'evidence' }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fieldset: 'evidence',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote' },
        { name: 'author', type: 'string', title: 'Author' },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'coverImage' },
  },
})