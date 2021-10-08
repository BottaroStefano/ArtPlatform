export default {
  name: 'newsletter',
  title: 'NewsLetter',
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
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
    {
      name: 'status',
      title: 'Status',
      type: 'string',     
      options:{
        list:[
          {value:"draft", title:"Draft"},
          {value:"approved", title:"Approved"},
          {value:"pubblished", title:"Pubblished"},
          {value:"removed", title:"Removed"},
        ]
      },
    },
  ],
  initialValue: {
    status: "draft"
  },
  preview: {
    select: {
      title: 'title',
      category: 'category',      
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
