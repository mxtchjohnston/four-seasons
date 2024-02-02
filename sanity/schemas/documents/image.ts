import {ImageIcon} from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  type: 'document',
  name: 'myImage',
  title: 'Image',
  icon: ImageIcon,
  fields: [
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      type: 'string',
      name: 'caption',
      title: 'Caption',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'tags',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
});