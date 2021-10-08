import {BrowserRouter, Route, Switch } from "react-router-dom"
import React  from 'react'
import NavBar from "./components/NavBar.js"
import Home from "./components/Home.js"
import Author from "./components/Author.js"
import Productor from "./components/Productor.js"
import ArtWork from "./components/ArtWork.js"
import Event from "./components/Event.js"
import Post from "./components/Post.js"
import NewsLetter from "./components/NewsLetter.js"
import About from "./components/About.js"
import SinglePost from "./components/SinglePost.js"
import SingleAuthor from "./components/SingleAuthor.js"
import SingleProductor from "./components/SingleProductor.js"
import SingleArtwork from "./components/SingleArtwork"
import SingleEvent from "./components/SingleEvent"
import SingleNewsLetter from "./components/SingleNewsLetter"
import Comment from "./components/Comment"
import Login from "./components/Login"
import Contact from "./components/Contact"
//import SingleReview from "./components/SingleReview"
//import PageNotFound from "./components/PageNotFound.js";

function App() {
  return (
    <BrowserRouter>
    <NavBar />   
      <Switch>
        <Route component={Home} path='/' exact/>        
        <Route component={Author} path='/author'/>
        <Route component={Productor} path='/productor'/>
        <Route component={ArtWork} path='/artwork'/>        
        <Route component={Event} path='/event'/>
        <Route component={Post} path='/post'/>
        <Route component={NewsLetter} path='/newsletter'/>
        <Route component={About} path='/about'/>
        <Route component={SinglePost} path='/SinglePost/:_id'/> 
        <Route component={SingleAuthor} path='/SingleAuthor/:_id'/> 
        <Route component={SingleProductor} path='/SingleProductor/:_id'/> 
        <Route component={SingleArtwork} path='/SingleArtwork/:_id'/>  
        <Route component={SingleEvent} path='/SingleEvent/:_id'/>  
        <Route component={SingleNewsLetter} path='/SingleNewsLetter/:_id'/>  
        <Route component={Comment} path='/Comment/:_id'/>  
        <Route component={Login} path='/Login'/>  
        <Route component={Contact} path='/Contact'/>  
        {/* <Route component={SingleReview} path='/SingleReview/:_id'/> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;

