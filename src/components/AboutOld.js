import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

import imgBottaroStefano from "../images/Stefano_Profilo.jpg";
import imgBottaroRiccardo from "../images/Ricky.jpg";
import imgNina from "../images/nina_profilo.jpg"
import getSocial from "./fragments/social.js";
export default function About(){
const [singleEntity, setSingleEntity] = useState(null);
const mail= <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>    

    // GROQ query 
    

    return(
        <main className="bg-gray-700 min-h-screen p-12">            
            <article className="container shadow-lg mx-auto bg-gray-400 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex item-center justify-center p-12">
                        <div className="bg-gray-300 bg-opacity-75 rounded p-12">
                           
                            <h1 className="cursive justify-center text-3xl lg:text-6xl mb4">                            
                               About Us
                            </h1>
                           
                             
                        </div>
                    </div>
                  
                     
                </header>
                
            </article>
            <section className="container mx-auto">
                <h1 className="text-5xl text-gray-300 font-extrabold flex justify-center cursive">About</h1>
                {/* <h2 className="text-lg text-gray-300 flex justify-center mb-12">Welcome to ArtWork Page</h2> */}
                <div className="grid md:grid-cols3 lg:grid-cols-4 gap-8">
                    <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg">                                
                        <span className="block h-32 w-74 relative rounded leading-snug bg-green-300 border-l-8 border-red-500" >                                                                  
                            <span className="block relative h-full flex justify-end items-end pr-10 pb-5">                            
                            <img src={imgBottaroStefano} alt="CEO" className=" flex justify-center w-24 l-24 transform translate-x-1 translate-y-3 " />
                                <h3 className="text-grey-800 text-lg font-blog px-1 py-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    <p className="flex">                                        
                                    Chief Executive Officer 
                                    </p>                                   
                                    <p className="flex justify-end">                                                                                
                                        Stefano Bottaro
                                    </p>
                                    <p className="flex justify-end text-xs">                                     
                                        {mail} 
                                        <a href="mailto:bottaro.stefano@gmail.com?subject=Request%20information">bottaro.stefano@gmail.com</a> 
                                    </p>
                                </h3>                    
                            </span>             
                        </span>                                  
                    </article>
                    <article>  
                        <span className="block h-32 w-80 relative rounded shadow leading-snug bg-blue-300 border-l-8 border-red-500" >                                                                  
                            <span className="block relative h-full flex justify-end items-end pr-2 pb-5">
                            <img src={imgBottaroRiccardo} alt="CSO" className=" flex justify-center w-24 l-24 transform translate-x-1 translate-y-1 " />
                                <h3 className="text-grey-800 text-lg font-blog px-1 py-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    <p className="flex ">                                        
                                    Chief Security Officer
                                    </p>
                                    <p className="flex justify-end">                                                                        
                                        Riccardo Bottaro
                                    </p>
                                    <p className="flex justify-end text-xs">                                     
                                        {mail} 
                                        <a href="mailto:ricky.bottaro@gmail.com?subject=Request%20information">ricky.bottaro@gmail.com</a> 
                                    </p>
                                </h3>                    
                            </span>             
                        </span>   
                    </article>  
                    <article>  
                        <span className="block h-32 w-80 relative rounded shadow leading-snug bg-red-300 border-l-8 border-red-500" >                                                                  
                            <span className="block relative h-full flex justify-end items-end pr-2 pb-5">
                            <img src={imgNina} alt="CSO" className=" flex justify-center w-24 l-24 transform translate-x-1 translate-y-1 " />
                                <h3 className="text-grey-800 text-lg font-blog px-1 py-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    <p className="flex ">                                        
                                        Artistic Director
                                    </p>
                                    <p className="flex justify-end">                                           
                                        Nina Razzaboni
                                    </p>
                                    <p className="flex justify-end text-xs">                                     
                                        {mail} 
                                        <a href="mailto:nina.razzaboni@gmail.com?subject=Request%20information">nina.razzaboni@gmail.com</a> 
                                    </p>
                                </h3>                    
                            </span>             
                        </span>   
                    </article>  
                    <article>  
                        <span className="block h-32 w-80 relative rounded shadow leading-snug bg-purple-300 border-l-8 border-red-500" >                                                                  
                            <span className="block relative h-full flex justify-end items-end pr-2 pb-5">
                                <h3 className="text-grey-800 text-lg font-blog px-1 py-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    <p className="flex ">                                        
                                    Human Resource Manager
                                    </p>
                                    <p className="flex justify-end">                                           
                                        Giulia Bottaro
                                    </p>
                                    <p className="flex justify-end text-xs">                                     
                                        {mail} 
                                        <a href="mailto:giuly.bottaro@gmail.com?subject=Request%20information">giuly.bottaro@gmail.com</a> 
                                    </p>
                                </h3>                    
                            </span>             
                        </span>   
                    </article>  
                    <article>  
                        <span className="block h-32 w-80 relative rounded shadow leading-snug bg-white border-l-8 border-red-500" >                                                                  
                            <span className="block relative h-full flex justify-end items-end pr-2 pb-5">
                                <h3 className="text-grey-800 text-lg font-blog px-1 py-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    <p className="flex ">                                        
                                    Chief Information Officer
                                    </p>
                                    <p className="flex justify-end">                                           
                                        ??
                                    </p>
                                </h3>                    
                            </span>             
                        </span>   
                    </article>  
                    <article>  
                        <span className="block h-32 w-80 relative rounded shadow leading-snug bg-white border-l-8 border-red-500" >                                                                  
                            <span className="block relative h-full flex justify-end items-end pr-2 pb-5">
                           
                                <h3 className="text-grey-800 text-lg font-blog px-1 py-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    <p className="flex ">                                        
                                    Chief Operating Officer
                                    </p>
                                    <p className="flex justify-end">                                           
                                        ??
                                    </p>
                                </h3>                    
                            </span>             
                        </span>   
                    </article>  
                    <article>  
                        <span className="block h-32 w-80 relative rounded shadow leading-snug bg-white border-l-8 border-red-500" >                                                                  
                            <span className="block relative h-full flex justify-end items-end pr-2 pb-5">
                                <h3 className="text-grey-800 text-lg font-blog px-1 py-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    <p className="flex ">                                        
                                    Chief Risk Officer
                                    </p>
                                    <p className="flex justify-end">                                           
                                    
                                    </p>
                                </h3>                    
                            </span>             
                        </span>  
                      
                    </article>  
                    <article>  
                        <span className="block h-32 w-80 relative rounded shadow leading-snug bg-white border-l-8 border-red-500" >                                                                  
                            <span className="block relative h-full flex justify-end items-end pr-2 pb-5">
                                <h3 className="text-grey-800 text-lg font-blog px-1 py-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    <p className="flex ">                                        
                                    Research & Development Manager
                                    </p>
                                    <p className="flex justify-end">                                           
                                        ??
                                    </p>
                                </h3>                    
                            </span>             
                        </span>   
                    </article>  
                </div>
            </section>
        </main>
    )
}