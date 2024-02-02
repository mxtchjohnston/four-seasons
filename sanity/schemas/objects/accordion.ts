import { BarChartIcon, ImageIcon } from '@sanity/icons';

import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'accordion',
  title: 'Accordion',
  type: 'object',
  icon: BarChartIcon,
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
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'trigger',
              title: 'Trigger',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              type: 'array',
              name: 'body',
              title: 'Body',
              description:
                "This is where you can write the page's content. Including custom blocks like timelines for more a more visual display of information.",
              of: [
                // Paragraphs
                defineArrayMember({
                  type: 'block',
                  marks: {
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'Url',
                          },
                        ],
                        validation: (rule) => rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
                      },
                    ],
                  },
                  styles: [],
                }),
                // Custom blocks
                defineArrayMember({
                  name: 'timeline',
                  type: 'timeline',
                }),
                defineField({
                  type: 'image',
                  icon: ImageIcon,
                  name: 'image',
                  title: 'Image',
                  options: {
                    hotspot: true,
                  },
                  preview: {
                    select: {
                      imageUrl: 'asset.url',
                      title: 'caption',
                    },
                  },
                  fields: [
                    defineField({
                      title: 'Caption',
                      name: 'caption',
                      type: 'string',
                    }),
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alt text',
                      description:
                        'Alternative text for screenreaders. Falls back on caption if not set',
                    }),
                  ],
                }),
                defineField({
                  type: 'carousel',
                  name: 'carousel',
                  title: 'Carousel',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
