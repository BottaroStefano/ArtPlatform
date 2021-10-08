import { SanityClient } from "@sanity/client";

SanityClient.config({
    token:  process.env.SANITY_WRITE_TOKEN,
})

export default async function createComment(req,res){

    console.log(req._type);
  
    const social = {
        _type: 'socialCounter',
        entity: req._type,
        socialType: "comment",
        documentId: req._id ,
        author: req.author,
        counter: 1,
        text:"commento di prova" ,
    }
    
    SanityClient.create(social).then((res) => {       
        console.log(`comment was created, document ID is ${res._id}`);
         res.status(200);
    })
    
   
    
   

}