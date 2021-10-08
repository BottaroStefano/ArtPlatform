export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      name: 'tags',
      title: 'Tag',
      type: 'array',
      of: [
        {          
          type: 'string', 
        },
      ],
      options:{
        layout: "tags",
      }
    },
    {
      name: 'productor',
      title: 'Productor',
      type: 'reference',
      to: {type: 'productor'},
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'reference', to: {type: 'author'}}],
    },
    {
      name: 'startDate',
      title: 'start date',
      type: 'datetime',
    },
    {
      name: 'endDate',
      title: 'end date',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'draft',
      title: 'Draft',
      type: 'boolean',
      default: 'true',
    },
  ],
  preview: {
    select: {
      title: 'title',
      categories: 'category.title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {category} = selection
      return Object.assign({}, selection, {
        subtitle: category && `category ${category}`,
      })
    },
  },
}
