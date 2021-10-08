import { SanityClient } from "@sanity/client";

SanityClient.config({
    token:  process.env.SANITY_WRITE_TOKEN,
})

export default async function likeButtonHandler(req,res){

    const { _id} = JSON.parse(req.body)
    const data = await SanityClient
    .patch(_id)
    .setIfMissing({likes: 0})
    .commit()
    .catch((error)=> console.log.error)

    res.status(200).json({likes:data.likes});

}