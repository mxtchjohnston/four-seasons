import { DocumentTextIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'form',
  title: 'Form',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'endpoint',
      title: 'Endpoint',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ]
});