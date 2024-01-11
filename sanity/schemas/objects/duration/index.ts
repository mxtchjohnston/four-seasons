import { defineField } from 'sanity'

import { DurationInput } from './DurationInput' // custom input component

export default defineField({
  type: 'object', //undisplayable type in studio, exists within other objects
  name: 'duration',
  title: 'Duration',
  components: { // components are used to define custom input components for fields
    input: DurationInput, 
  },
  fields: [
    defineField({
      type: 'datetime',
      name: 'start',
      title: 'Start',
    }),
    defineField({
      type: 'datetime',
      name: 'end',
      title: 'End',
    }),
  ],
})
