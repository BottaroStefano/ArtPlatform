import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url";
import getSocial from "./fragments/social.js";
import axios from 'axios';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function Post() {
    const [entityData, setEntity] = useState(null);

    const location = useLocation();
	console.log(location);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post" && status =="pubblished"]{
                    _id,
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt,
                    },
                    "category":category->title, 
                    "categoryImage": category->image,
                    "author":author->name,
                    "authorMail":author->mail,
                    "authorImage": author->image                           
                }`
            )
            .then((data) => console.log(data) || setEntity(data))
            .catch(console.error);
        },
    );
    return (
        <main className="bg-gray-700 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl text-gray-300 font-extrabold  flex justify-center cursive">Blog Post </h1>
                <h2 className="text-lg text-gray-300 flex justify-center mb-12">Welcome to BLog Posts</h2>
                <div className="grid md:grid-cols2 lg:grid-cols-3 gap-8">
                    {entityData && 
                        entityData.map((post, index) => ( 
                            <article>
                                <Link to={"/SinglePost/" + post._id} key={post._id}>
                                    {/* <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"  */}
                                    <span className="block h-64 relative rounded shadow leading-snug bg-white border-green-400" 
                                        key={index}>
                                        <img 
                                            src={post?.mainImage.asset.url}
                                            alt={post?.mainImage.alt}
                                            title={post?.title}
                                            className="w-full h-full effect  rounded-r object-cover absolute"
                                        />
                                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                            <h3 className="text-grey-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                                <p className="flex ">
                                                    <img src={urlFor(post?.categoryImage).url()}
                                                        alt={post?.category}
                                                        className="w-10 h-10 rounded-full"  
                                                        title= {post?.category}                                   
                                                    /> 
                                                     {post?.title}                                                     
                                                </p > 
                                                
                                            </h3>  
                                               
                                        </span>    
                                        <div className="flex text-grey-300 text-lg font-blog px-1  text-red-100 bg-opacity-75 rounded">
                                                <p className="flex relative  justify-start items-start ">
                                                    <img src={urlFor(post?.authorImage).url()}
                                                        alt={post?.author}
                                                        className="w-10 h-10 rounded-full"  
                                                        title= {post?.author}                                   
                                                    /> 
                                                    By: {post?.author}    
                                                </p>        
                                            </div>           
                                    </span>
                                </Link>
                                <p className="flex relative">
                                    {/* Social */}                             
                                    {getSocial(post._id,post.authorMail,"post")}
                                </p> 
                              
                            </article>
                            )
                        )
                    }
                </div>
            </section>
        </main>
    );
}