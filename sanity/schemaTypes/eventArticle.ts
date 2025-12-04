import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'eventArticle',
  title: 'Event Article',
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
      name: 'article',
      title: 'Article Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'subCategory',
      title: 'Sub Category',
      type: 'reference',
      to: [{ type: 'eventSubCategory' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subCategoryTitle: 'subCategory.title',
    },
    prepare({ title, subCategoryTitle }) {
      return {
        title,
        subtitle: subCategoryTitle ? `Sub Category: ${subCategoryTitle}` : '',
      }
    },
  },
})

