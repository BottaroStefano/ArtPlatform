import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import getSocial from "./fragments/social.js";
import getCalendar from "./fragments/calendar.js";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function Event() {
    const [entityData, setEntity] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "event"  && draft ==false]{
                title,
                _id,
                slug,
                startDate,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                } ,
                "productorImage":productor->image ,
                "productor":productor->name ,
                "productorMail":productor->mail  
            }`)
            .then((data) => setEntity(data))
            .catch(console.error);
    }, []);
         
    return (
        <main className="bg-gray-700 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl text-gray-300 font-extrabold flex justify-center cursive">On line Events</h1>
                <h2 className="text-lg text-gray-300 flex justify-center mb-12">Welcome to Me Art Events</h2>
                <div className="grid md:grid-cols2 lg:grid-cols-3 gap-8">
                    {entityData && 
                        entityData.map((event, index) => ( 
                            <article>                             
                                <Link to={"/SingleEvent/" + event._id} key={event._id}>                                 
                                    <span className="block h-64 relative rounded shadow leading-snug bg-gray-300  border-gray-300" 
                                        key={index}>
     
                                        <img 
                                            src={event?.mainImage.asset.url}
                                            alt={event?.mainImage.alt}
                                            title= {event?.title}  
                                            className="w-full h-full effect  rounded-r object-cover absolute"
                                        />   
                                        <span className="block relative">                                            
                                            { getCalendar(event?.startDate)}   
                                        </span> 
                                         <div className="flex text-grey-300 text-lg font-blog px-1 py-32  text-red-100 bg-opacity-75 rounded">
                                            <p className="flex relative  justify-end items-end ">
                                                <img src={urlFor(event?.productorImage).url()}
                                                    alt={event?.productor}
                                                    className="w-10 h-10 rounded-full"  
                                                    title= {event?.productor}                                   
                                                /> 
                                                 By: {event?.productor}                                 

                                            </p>        
                                        </div>     
                                    </span>  
                                    
                                </Link>     
                                <p className="flex relative">
                                    {/* Social */}
                                    {getSocial(event._id,event.productorMail,"event")} 
                                </p>           
                                
                                
                            </article>
                            )
                        )
                    };
                </div>
            </section>
        </main>
    );
}