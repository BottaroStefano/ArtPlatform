import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
import getCalendar from "./fragments/calendar.js";
import getSocial from "./fragments/social.js";
//import styles from "./Style/SingleModule.css";
//import Paint from "../Animation/Paint"
//import PageNotFound from "../404/PageNotFound"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function SingleEvent(){
    const [singleEntity, setSingleEntity] = useState(null);
    const { _id } = useParams();
    // GROQ query 
   
    useEffect(() => {
        sanityClient
            .fetch(`*[_id == "${_id}"]{               
                title,
                slug,
                startDate,
                body,
                "productorImage":productor->image ,
                "productor":productor->name ,
                "productorMail":productor->mail , 
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                "relatedauthors": *[_type=='author' && references(^._id)]{ 
                    title,
                    slug,
                    category,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                },				
            }`          
        )
        .then((data) => setSingleEntity(data[0]))
        .catch(console.error);
        },
    );
    if (!singleEntity) return <div>Loading... </div>
    
    return(
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
                <header className="relative">                           
                    <div className="absolute h-full w-full flex item-center justify-center p-8">
                        
                        <div className="bg-purple-300 bg-opacity-75 rounded p-12">   
                            <div className="flex justify-left  text-gray-800">  
                                <span className="block relative h-full flex justify-start items-start pr-4 pb-4">                                            
                                    { getCalendar(singleEntity.startDate)}   
                                </span>      
                            </div>                         
                            <h1 className="cursive justify-center text-3xl lg:text-6xl mb4">                               
                                {singleEntity.title}
                            </h1>
                            <p className="flex relative">
                                {/* Social */}
                                {getSocial(singleEntity._id,singleEntity.productorMail)} 
                            </p>                        
                        </div>
                        
                    </div>
                    
                    <img src={urlFor(singleEntity.mainImage.asset).url()} 
                        alt={singleEntity.name}
                        className="w-full object-cover runded-t"
                        style={{height : "400px"}} 
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