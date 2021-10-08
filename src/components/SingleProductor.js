import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
import getSocial from "./fragments/social.js";
import getCalendar from "./fragments/calendar.js";
//import ReactColorPicker from "color";
//import styles from "./Style/SingleModule.css";
//import Paint from "../Animation/Paint"
//import PageNotFound from "../404/PageNotFound"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function SingleProductor(){
    const [singleEntity, setSingleEntity] = useState(null);
    const { _id } = useParams();
    // GROQ query 
   
    useEffect(() => {
        sanityClient
            .fetch(`*[_id == "${_id}"]{               
                name,
                _id,
                slug,  
                bio,
                country,
                city,
                abstract,
                mail,
                color,
                image{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
 				"category": category->title,
                "categoryImage": category->image,                
				"relatedevents": *[_type=='event' && draft == false && references(^._id)]{ 
                      title,
                      _id,
                      startDate,
                      slug,                   
                      mainImage{
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
    if (!singleEntity) return <div>Loading... </div>
    return(
        <main className="bg-gray-700 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-gray-400 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex item-center justify-center p-12">
                        <div className="bg-gray-300 bg-opacity-75 rounded p-12">
                           
                            <h1 className="cursive justify-center text-3xl lg:text-6xl mb4">                            
                                {singleEntity.name}
                            </h1>
                            <div className="flex justify-center  text-gray-800">
                                <img src={urlFor(singleEntity.categoryImage).url()} 
                                    alt={singleEntity.name}
                                    className="w-10 h-10 rounded-full"
                                /> 
                                 {singleEntity.category}
                               
                            </div>
                            <div className="flex justify-center  text-gray-800"> 
                              from:  {singleEntity.country} -  {singleEntity.city}
                            </div>
                            <div className="flex justify-center  text-gray-800"> 
                               {singleEntity.abstract}                               
                            </div>      
                            <p className="flex relative">
                                {/* Social */}
                                {getSocial(singleEntity._id,singleEntity.mail)} 
                            </p>                     
                        </div>
                    </div>
                    
                    <img src={urlFor(singleEntity.image.asset).url()} 
                        alt={singleEntity.name}
                        className="w-full object-cover runded-t"
                        style={{height : "400px"}} 
                    /> 
                     
                </header>
                <div className="px16 lg:px-48 py-12 lg:py-20 prose-xl max-w-full">
                    <BlockContent
                        blocks={singleEntity.bio}
                        projectId="s4u8me29"
                        dataset="production"
                    />
                </div>
            </article>
            {/* Child Section */}
            <section className="container mx-auto">               
                <h2 className="text-lg text-gray-300  text-4xl flex justify-center cursive mb-12">related Events</h2>
                <div className="grid md:grid-cols2 lg:grid-cols-3 gap-8">
                    {singleEntity.relatedevents && 
                        singleEntity.relatedevents.map((entity, index) => ( 
                            <article>
                                <Link to={"/SingleEvent/"  + entity._id} key={entity._id}>
                                    <span className="block h-64 relative rounded shadow leading-snug bg-white" 
                                            key={index}>
                                            <img 
                                                src={entity.mainImage.asset.url}
                                                alt={entity.mainImage.alt}
                                                className="w-full h-full rounded-r object-cover absolute"
                                            />    
                                           <span className=" flex justify-start items-start ">  
                                            { getCalendar(entity.startDate)}
                                            </span>                                           
                                         <span className="block relative h-full flex justify-end items-end pr-2 pb-32">
                                            <h3 className="text-gray-800 text-lg font-blog px-1 py-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                                <p className="flex ">                                                     
                                                     {entity.title}
                                                </p>                                                
                                            </h3>                    
                                        </span>      
                                    </span>
                                                
                                </Link>      
                                     
                               
                            </article>
                            )
                        )
                    }
                </div>
            </section>
        </main>
    );
}