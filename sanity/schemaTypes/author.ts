import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Authors & Partners',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', title: 'Role / Designation', type: 'string', placeholder: 'FCA, Senior Tax Partner' }),
    defineField({ name: 'avatar', title: 'Avatar / Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Short Bio', type: 'text', rows: 3 }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'avatar' },
  },
})