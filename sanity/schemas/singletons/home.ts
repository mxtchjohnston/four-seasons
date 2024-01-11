import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home', // Name is always required, used to uniquely identify this type, lower case
  title: 'Home',                                                      // Title is the human readable string for this type, can be capitalized
  type: 'document',                                                   // This is the type of document you're editing, can be any of the other types
  icon: HomeIcon,                                                     // visible in the studio sidebar
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [                                                           // The datatypes contained within this type, can be any of the other types
    defineField({                                                     // This is a helper function that creates a field definition, validates it, and returns it
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',                                                 // String type is best used for short text fields
      validation: (rule) => rule.required(),                          // can validate the field, this one requires the string length to be above 0
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.', // This is a comment, it's not visible in the studio
      title: 'Description',
      type: 'array',                                                   // Array type is used to store a list of other types
      of: [                                                            // This is the list of other types that can be stored in this array
        // Paragraphs
        defineArrayMember({                                            // This is a helper function that creates a field definition, validates it, and returns it
          lists: [],                                                   // This is a list of list types that can be used in this field
          marks: {                                                     // This is a list of mark types that can be used in this field
            annotations: [                                             // This is a list of annotation types that can be used in this field
              {
                name: 'link',
                type: 'object',                                        // Object type is used to store a list of other types, cannot stand alone outside of a document
                title: 'Link',
                fields: [                                              // k v pairs of field names and field definitions. These are the fields that will be stored in this object
                  {
                    name: 'href',
                    type: 'url',                                       // Url type is used to store a url
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [                                             // This is a list of decorator types that can be used in this field
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block', 
        }),                                                           // This is the end of the type of array member that will be stored in this array
      ],
      validation: (rule) => rule.max(155).required(),                // validation rules can be chained, this one requires the array length to be below 155
    }),
    defineField({
      name: 'showcaseProjects',                                     
      title: 'Showcase projects',
      description:
        'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }], // note the form of the reference to the project type
        }),
      ],
    }),
  ],
  preview: {                                                          // Research what objects define type can accept, 
    select: {
      title: 'title',
    },
    prepare({ title }) { //something to do with preview?
      return {
        subtitle: 'Home', 
        title,
      }
    },
  },
})
