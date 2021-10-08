import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import getSocial from "./fragments/social.js";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}
export default function Work() {
    const [entityData, setEntity] = useState(null);
    useEffect(() => {
        sanityClient 
            .fetch(`*[_type == "artwork"]{
                _id,
                title,
                slug,   
                size,  
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                "category":category->title,
                "categoryImage": category->image,
                "author":author->name ,
                "authorMail":author->mail                   
            }`)
            .then((data) => setEntity(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-gray-700 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl text-gray-300 font-extrabold flex justify-center cursive">Works list</h1>
                <h2 className="text-lg text-gray-300 flex justify-center mb-12">Welcome to me Art Works</h2>
                <div className="grid md:grid-cols2 lg:grid-cols-3 gap-8">
                    {entityData && 
                        entityData.map((artwork, index) => ( 
                            <article >
                                <Link to={"/SingleArtwork/"  + artwork._id} key={artwork._id}>
                                    <span className="block h-64  relative rounded shadow leading-snug bg-gray-200  border-gray-400" 
                                        key={index}>
                                        <img 
                                            src={artwork?.mainImage.asset.url}
                                            alt={artwork?.mainImage.alt}      
                                            title= {artwork?.title}        
                                            className="w-full h-full effect  rounded-r object-cover shadow-lg absolute"
                                        />    
                                         <div className="flex text-grey-300 text-lg font-blog px-1 py-60  text-red-100 bg-opacity-75 rounded">
                                            <p className="flex relative  justify-end items-end ">
                                                <img src={urlFor(artwork?.categoryImage).url()}
                                                    alt={artwork?.category}
                                                    className="w-10 h-10 rounded-full"  
                                                    title= {artwork?.category}                                   
                                                /> 
                                                 By: {artwork?.author} - {artwork?.size}                                  

                                            </p>        
                                        </div>     
                                    </span>  
                                    
                                </Link>  
                                <p className="flex relative">
                                    {/* Social */}                             
                                    {getSocial(artwork._id,artwork.authorMail,"artWork")}   
                                </p>       
                                                                                    
                                         
                            </article>
                            )
                        )
                    }
                </div>
            </section>
        </main>
    )
}