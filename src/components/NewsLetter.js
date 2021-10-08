import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import getSocial from "./fragments/social.js";
import axios from 'axios';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function NewsLetter() {
    const [entityData, setEntity] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "newsletter" && status =="pubblished"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                "authorImage":author->image ,
                "author":author->name ,
                "authorMail":author->mail  
            }`)
            .then((data) => setEntity(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-gray-700 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl  text-gray-300 font-extrabold flex justify-center cursive">NewsLetter </h1>
                <h2 className="text-lg text-gray-300 flex justify-center mb-12">Welcome to NewsLetter Page</h2>
                <div className="grid md:grid-cols2 lg:grid-cols-3 gap-8">
                    {entityData && 
                        entityData.map((newsletter, index) => ( 
                            <article>
                                <Link to={"/SingleNewsLetter/" + newsletter._id} key={newsletter._id}>
                                    <span className="block h-64 relative rounded shadow leading-snug bg-white border-green-400" 
                                        key={index}>
                                        <img 
                                            src={newsletter?.mainImage.asset.url}
                                            alt={newsletter?.mainImage.alt}
                                            className="w-full h-full effect rounded-r object-cover absolute"
                                        />
                                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                            <h3 className="text-grey-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">{newsletter.title}</h3>
                                            
                                        </span>     
                                        <div className="flex text-grey-300 text-lg font-blog px-1 pb-12  text-red-100 bg-opacity-75 rounded">
                                            <p className="flex relative justify-end items-end ">
                                                <img src={urlFor(newsletter?.authorImage).url()}
                                                    alt={newsletter?.author}
                                                    className="w-10 h-10 rounded-full"  
                                                    title= {newsletter?.author}                                   
                                                /> 
                                                <p className="flex relative justify-end py-1 items-end ">
                                                    By: {newsletter?.author}                                  
                                                </p>
                                            </p>        
                                        </div>                            
                                    </span>
                                </Link>                                    
                                <p className="flex relative py-2">
                                    {/* Social */}                             
                                    {getSocial(newsletter._id,newsletter.authorMail,"newsLetter")}
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