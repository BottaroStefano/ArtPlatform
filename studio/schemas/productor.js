export default {
  name: 'productor',
  title: 'Productor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
      name: 'abstract',
      title: 'Abstract',
      type: 'string',
    },
    {
      name: 'mail',
      title: 'eMail',
      type: 'email',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'reference', to: {type: 'author'}}],
    },
  ],
  preview: {
    select: {
      title: 'name',   
      category:'category.title',      
      media: 'image',
      email: 'mail',
      country: 'country',
      city: 'city',
    },
    prepare(selection) {
      const {category} = selection
      return Object.assign({}, selection, {
        subtitle: category && `category  ${category}`,
      })
    },
  },
}
