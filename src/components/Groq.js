import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";


// post,
const getPosts = `*[_type == "post" && status =="pubblished"]{
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
    "author":author->name  ,
    "authorImage": author->image                           
}[0...50]`;

// author,
const getAuthors = `*[_type == "author"]{
    _id,
    name,
    slug,  
    image{
        asset->{
            _id,
            url
        },
        alt
    },
    "category":category->title 
}[0...50]`;

// artwork,
const getArtworks = `*[_type == "artwork"]{
    _id,
    title,
    slug,      
    mainImage{
        asset->{
            _id,
            url
        },
        alt
    },
    "category":category->title,
    "author":author->name                    
}[0...50]`;

// event,
const getEvents = `*[_type == "event"]{
    title,
    slug,
    mainImage{
        asset->{
            _id,
            url
        },
        alt
    }
}[0...50]`;

// review,
const getReviews = `*[_type == "review"]{
    title,
    slug,
    "author":author->name     
}[0...50]`;

// newsletter,
const getNewsletters = `*[_type == "newsletter"]{
    title,
    slug,      
}[0...50]`;


// category,
const getCategories = `*[_type == "category"]{
    title,
    description,
    image{
        asset->{
            _id,
            url
        },
        alt
    }
    
}[0...50]`;

export default getPosts;
