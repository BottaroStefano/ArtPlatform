import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import logo from "../images/logo.png"

export default function NavBar(){
    return (
        <header className="bg-red-600">   
               
            <div className="container mx-auto flex justify-between" >
                <img src={logo} alt="img" className="mr-4" style={{ height: 150, width: 150 }} />   
                <nav className="flex">
                    <NavLink to="/" exact 
                        activeClassName="text-white"
                        className="inflex-flex item-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive traking-widest">
                            me Art
                    </NavLink>
                    <NavLink to="/productor"  
                        className="inline-flex item-center py-3 px-3 my-6 rounded  text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700">
                        Productor
                    </NavLink> 
                    <NavLink to="/author"  
                        className="inline-flex item-center py-3 px-3 my-6 rounded  text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700">
                        Author
                    </NavLink>                                   
                    <NavLink to="/artWork"  
                        className="inline-flex item-center py-3 px-3 my-6 rounded  text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700">
                        ArtWork
                    </NavLink>    
                    <NavLink to="/event"                                       
                        className="inline-flex item-center py-3 px-3 my-6 rounded  text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700">
                        Event                       
                    </NavLink>        
                    <NavLink to="/post"                                       
                        className="inline-flex item-center py-3 px-3 my-6 rounded  text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700">
                        Blog Posts                       
                    </NavLink>     
                    <NavLink to="/newsLetter"                                       
                        className="inline-flex item-center py-3 px-3 my-6 rounded  text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700">
                        NewsLetter                       
                    </NavLink>           
                    <NavLink to="/about"      
                        className="inline-flex item-center py-3 px-3 my-6 rounded  text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700">
                        About
                    </NavLink>  
                    <NavLink to="/contact"      
                        className="inline-flex item-center py-3 px-3 my-6 rounded  text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700">
                        Contact
                    </NavLink>        
                    <NavLink to="/login"      
                        className="inline-flex item-center py-3 px-3 my-6 rounded  text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700">
                        Login
                    </NavLink>                         
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://linkedin.com/in/jaketrent" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff"  
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon 
                        url="https://youtube.com/in/jaketrent" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff"  
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon 
                        url="https://twitter.com/in/jaketrent" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff"  
                        style={{ height: 35, width: 35 }}
                    />
                </div>
            </div>
        </header>
    )
}