import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
import getSocial from "./fragments/social.js";
//import styles from "./Style/SingleModule.css";
//import Paint from "../Animation/Paint"
//import PageNotFound from "../404/PageNotFound"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function SinglePost(){
    const [singleEntity, setSingleEntity] = useState(null);
    const { _id } = useParams();
    // GROQ query 
   
    useEffect(() => {
        sanityClient
            .fetch(`*[_id == "${_id}"]{               
                    _id,
                    title,
                    slug,
                    body,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt,
                    },
                    "category":category->title, 
                    "author":author->name  ,
                    "authorMail":author->mail  ,
                    "authorImage": author->image 
                }`          
            )
            .then((data) => setSingleEntity(data[0]))
            .catch(console.error);
        },
    );
    if (!singleEntity) return <div>Loading...</div>
    return(
        <main className="bg-gray-700 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex item-center justify-center p-8">
                        <div className="bg-gray-400 bg-opacity-75 rounded p-12">
                        <h1 className="cursive justify-center text-3xl lg:text-6xl mb4">
                                {singleEntity.title}
                            </h1>
                            <div className="flex justify-center cursive text-gray-800">
                                <h3 className="text-grey-800 text-lg font-blog px-3 py-4  bg-opacity-75 rounded">
                                    <p className="flex ">
                                        <img src={urlFor(singleEntity.authorImage).url()} 
                                                alt={singleEntity.author}
                                                className="w-10 h-10 rounded-full"
                                        /> 
                                        <p className="cursive flex items-center pl-2 text-2xl">
                                          by:   {singleEntity.author}
                                        </p> 
                                    </p > 
                                </h3>    
                                <p className="flex relative">
                                {/* Social */}
                                {getSocial(singleEntity._id,singleEntity.authorMail)} 
                            </p>                             
                            </div>
                           
                        </div>
                    </div>
                    <img src={singleEntity.mainImage.asset.url} 
                        alt={singleEntity.title}
                        className="w-full object-cover runded-t"
                        style={{  height : "400px"} }
                    />                   
                </header>
                <div className="px16 lg:px-48 py-12 lg:py-20 prose-xl max-w-full">
                    <BlockContent
                        blocks={singleEntity.body}
                        projectId="s4u8me29"
                        dataset="production"
                    />
                </div>
            </article>

        </main>
    );
}