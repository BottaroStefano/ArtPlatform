import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
import { Link } from "react-router-dom";
import getSocial from "./fragments/social.js";
//import styles from "./Style/SingleModule.css";
//import Paint from "../Animation/Paint"
//import PageNotFound from "../404/PageNotFound"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function SingleArtwork(){
    const [singleEntity, setSingleEntity] = useState(null);
    const { _id } = useParams();
    // GROQ query 
   
    useEffect(() => {
        sanityClient
            .fetch(`*[_id == "${_id}"]{               
                title,
                _id,
                slug,  
                body,
                size,
                tags,
                abstract,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                "category":category->title,
                "categoryImage": category->image,
                "author":author->name  ,
                "authorId":author->_id  ,
                "authorImage": author->image       
            }`          
        )
        .then((data) => setSingleEntity(data[0]))
        .catch(console.error);
        },
    );
    if (!singleEntity) return <div>Loading... </div>
    return(
        <main className="bg-gray-700 min-h-screen pb-12"> 
            <header className="relative">
                <h1 className="cursive flex item-center justify-center text-gray-300  text-4xl lg:text-6xl py-8 mb4">
                    {singleEntity.title}
                </h1>
                <div className=" item-center justify-center text-gray-300 ">
                
                    <Link to={"/SingleAuthor/" + singleEntity?.authorId} key={singleEntity?.authorId}>
                    <p className=" flex justify-center ">    
                        <img src={urlFor(singleEntity?.authorImage).url()} 
                            alt={singleEntity?.name}
                            className="flex relative items-center justify-center   w-14 h-14 rounded-full"
                        />         
                            <p className="flex text-2xl py-3">
                                By:   {singleEntity?.author}   
                            </p>                        
                            <p className="justify-center text-1xl px-6 py-4">
                              (L x H =  {singleEntity?.size})
                            </p>                                                             
                            
                        </p>
                    </Link>  
                     
                    <div>         
                          
                </div>    
                <p className="flex relative pr-20 pb-4">
                    {/* Social */}
                    {getSocial(singleEntity._id,singleEntity?.mail)} 
                </p>   
            </div > 
            </header>
            <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">                
                    
                    <img src={urlFor(singleEntity?.mainImage.asset).url()} 
                        alt={singleEntity?.title}
                        className="w-full h-full object-cover runded-t"
                        // style={{height : "400px"}} 
                    /> 
                   <p className=" flex items-center justify-center text-1xl">                                           
                        {singleEntity?.abstract} 
                    </p>                  
                <div className="px16 lg:px-48 py-12 lg:py-20 prose-xl max-w-full">
                    <BlockContent
                        blocks={singleEntity?.body}
                        projectId="s4u8me29"
                        dataset="production"
                    />
                    <p className=" flex items-end justify-end text-1xl px-6 "> 
                        #{singleEntity.tags.join(', #')} 
                    </p>  
                </div>
            </article>

        </main>
    )
}