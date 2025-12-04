import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'campusLifeSubCategory',
  title: 'Campus Life Sub Category',
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
      name: 'parentCategory',
      title: 'Parent Category',
      type: 'reference',
      to: [{ type: 'campusLifeCategory' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'campusLifeArticle' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      parentTitle: 'parentCategory.title',
    },
    prepare({ title, media, parentTitle }) {
      return {
        title,
        subtitle: parentTitle ? `Category: ${parentTitle}` : '',
        media,
      }
    },
  },
})

