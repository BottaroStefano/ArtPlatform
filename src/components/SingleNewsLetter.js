import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
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
                "relatedcategories": *[_type=='category' && references(^._id)]{ 
                    title,
                    id_,
                    image{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                } 
                }`          
            )
            .then((data) => setSingleEntity(data[0]))
            .catch(console.error);
        },
    );
    if (!singleEntity) return <div>Loading...</div>
    return(
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex item-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                        <h1 className="cursive justify-center text-3xl lg:text-6xl mb4">
                                {singleEntity.title}
                            </h1>
                            <div className="flex justify-center cursive text-gray-800">
                                <h3 className="text-grey-800 text-lg font-blog px-3 py-4  bg-opacity-75 rounded">
                                    <p className="flex ">

                                        {/* {singleEntity && 
                                            singleEntity.map((newsletter, index) => ( 
                                                <article>
                                                   <h3>block categories</h3>
                                                </article>
                                                )
                                            )
                                        }; */}
                                       
                                    </p > 
                                </h3>                               
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