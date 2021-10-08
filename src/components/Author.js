import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import getSocial from "./fragments/social.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function Author() {
    const [entityData, setEntity] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "author"]{
                name,
                _id,
                slug,  
                bio,
                country,
                mail,
                city,
                image{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                "category":category->title,
                "categoryImage": category->image
            }`)
            .then((data) => setEntity(data))
            .catch(console.error);
    }, []);
    
    return (
        <main className="bg-gray-700 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl text-gray-300 font-extrabold flex justify-center cursive">Authors List</h1>
                <h2 className="text-lg text-gray-300 flex justify-center mb-12">Welcome to Me Art's Authors Page</h2>
                <div className="grid md:grid-cols2 lg:grid-cols-3 gap-8">
                    {entityData && 
                        entityData.map((author, index) => ( 
                            <article>                                
                                <Link to={"/SingleAuthor/" + author._id} key={author._id}>
                                <span className="block h-64  relative rounded shadow leading-snug bg-gray-200  border-gray-400" 
                                        key={index} >                                           
                                        <img 
                                            src={author?.image.asset.url}
                                            alt={author?.image.alt}
                                            title= {author?.name}   
                                            className="w-full h-full effect  rounded-r object-cover absolute"
                                        />
                                        
                                        <span className="block relative h-full flex justify-end items-end pr-4 pb-6">
                                            
                                            <h3 className="text-grey-800 text-lg font-blog px-3 py-3 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                                <p className="flex ">
                                                    <img src={urlFor(author?.categoryImage).url()}
                                                        alt={author?.category}
                                                        className="w-10 h-10 rounded-full"  
                                                        title= {author?.category}                                   
                                                    />           
                                                    {author?.name}                                          
                                                </p>
                                                <p className="flex justify-end">
                                                     {author?.country} -  {author?.city}                                                      
                                                </p>                                               
                                            </h3>                                                                                                          
                                        </span>                                           
                                    </span>                                       
                                </Link>
                                   
                               {/* Social */}
                               {getSocial(author._id,author.mail,"author")}
                            </article>
                            )
                        )
                    }
                </div>
            </section>
        </main>
        
    );
}