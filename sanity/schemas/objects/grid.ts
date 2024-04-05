import { SquareIcon } from '@sanity/icons'
import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'grid',
  title: 'PhotoGrid',
  type: 'document',
  icon: SquareIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [{
        type: 'image',
        options: {
          hotspot: true,

        },
        fields: [
          defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
          })
        ]  
      }],
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0'
    }
  }
});