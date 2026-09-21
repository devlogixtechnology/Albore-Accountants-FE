import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'career',
  title: 'The Roster (Careers)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Role Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: ['Taxation', 'Audit & Assurance', 'Corporate & SECP', 'Bookkeeping & Advisory', 'Operations'],
      },
    }),
    defineField({ name: 'location', title: 'Location', type: 'string', initialValue: 'Lahore, Pakistan' }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Full-Time', 'ICAP Trainee (Articleship)', 'ACCA Trainee', 'Contract'],
      },
    }),
    defineField({ name: 'salary', title: 'Comp Package', type: 'string' }),
    defineField({ name: 'tags', title: 'Skill / Qualification Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'isActive', title: 'Hiring Now?', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'department' },
  },
})