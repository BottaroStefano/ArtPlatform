import { SanityClient } from "@sanity/client";

SanityClient.config({
    token:  process.env.SANITY_WRITE_TOKEN,
})

export default async function createSocialCounter(req,res){

    console.log(`createSocialCounter fase 1`)
    const social = {
        _type: 'socialCounter',
        entity: req._type,
        socialType: 2,
        documentId: req._id ,
        author: req.author,
        counter: 1,
        text:"prova like" ,
    }
console.log(`createSocialCounter fase 2`)
 SanityClient.create(social).then((res) => {
    console.log(`like was created, document ID is ${res._id}`)
  })
  console.log(`createSocialCounter fase 3`)

}