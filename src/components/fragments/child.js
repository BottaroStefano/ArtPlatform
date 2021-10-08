import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
export default getChild(mappedEntity){

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}
return ( 
        {/* Child Section */}
     
 
)
