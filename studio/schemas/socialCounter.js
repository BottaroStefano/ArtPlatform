export default {
  name: 'socialCounter',
  title: 'Social Counter',
  type: 'document',
  fields: [
    {
      name: 'entity',
      title: 'Entity',
      type: 'string',
      readOnly:true
    },   
    {
      name: 'socialType',
      title: 'Social Type',
      type: 'string',     
      readOnly:true,
      options:{
        list:[
          {value:"like", title:"Like"},
          {value:"comment", title:"Comment"},
          {value:"email", title:"eMail"},
          {value:"followMe", title:"Follow Me"},
          {value:"share", title:"Share"},
          {value:"rating", title:"Rating"}
        ]
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'documentId',
      title: 'Document Id',
      type: 'string',
      readOnly:true
    },   
    {
      name: 'counter',
      title: 'Counter',
      type: 'number',
      readOnly:true
    }, 
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      readOnly:true
    },   
  ],
  initialValue: {
    socialType: "like"
  },
  
  preview: {
    select: {
      title: 'entity',
      subtitle: 'socialType',
      counter: 'counter'
    }
  }
}
