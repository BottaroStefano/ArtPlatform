export default {
  name: 'artwork',
  title: 'ArtWork',
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
      name: 'abstract',
      title: 'Abstract',
      type: 'string',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'technique',
      title: 'Technique',
      type: 'string',
      maxLength: 20,
    },
    
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      maxLength: 4,
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
