import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'eventCategory',
  title: 'Event Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subCategories',
      title: 'Sub Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'eventSubCategory' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})

