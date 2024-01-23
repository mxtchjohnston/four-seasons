import { EyeOpenIcon} from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'number', 
      description: 'Duration of the slide in miliseconds.',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description: "This image will be used as the carousel's cover image.",
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt',
              type: 'string',
              description: 'Alternative text for screen readers.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Caption text to display below the image.',
            }),
          ]
        })
      ]
    }),  
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      media: 'images.0',
    },
    prepare({ title, description, media }) {
      return {
        title,
        subtitle: description,
        media,
      };
    },
  },
  initialValue: {
    duration: 5000,
  }
});