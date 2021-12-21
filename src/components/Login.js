import React from "react";
import logo from "../images/logo.png"
import image from "../images/flowerpower.jpg"


export default function Login() {
  return (
    <section className="bg-gray-700">   
         
        <h1 className=" text-5xl text-gray-300 md:text-5xl font-bold p-12 text-center  cursive">
          Login
        </h1>
       
      
      <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-10 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
          <p className="font-light text-base text-gray-200 mt-2">
          Benvenuto nell'area riservata agli utenti del sistema che vogliono partecipare alle discussioni e presentazioni delle opere e degli artisti.
          <br/>Inserisci le tue credenziali di accesso oppure invia una richiesta di registrazione.
        </p>
            <header className="">
            
            <img src={image} alt="img" className="rounded-full mr-4" style={{height: 425, width: 425 }} />
            </header>            
            
          </div>
          <form className="form rounded-lg bg-gray-200 p-4 flex flex-col">
          <p className="flex font-light text-base text-gray-200 mt-2">
            <img src={logo} alt="img" className=" mr-4" style={{ height: 50, width: 50 }} />
            <h1 className=" text-4xl text-gray-700 md:text-4xl font-bold item-center justify-center text-center   cursive">
                Me Art
            </h1>
        </p>
          
            <label htmlFor="userName" className="text-sm text-gray-600 mx-4">
              {" "}
             User Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="userName"
            />
            <label htmlFor="pwd" className="text-sm text-gray-600 mx-4">
              {" "}
              Password
            </label>
            <input
              type="Password"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="pwd"
            />
            
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="email"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
            />
            <p classname="flex">
            <label htmlFor="Guest" className="text-sm text-gray-600 mx-4 mt-4">
            Guest
            </label>
            <input
              type="radio"
              id="Guest"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="role"  
              value="Guest"    
              checked        
            />
             <label htmlFor="Author" className="text-sm text-gray-600 mx-4 mt-4">
             Author
            </label>
            <input
              type="radio"
              id="Author"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="role"  
              value="Author"            
            />
             <label htmlFor="Productor" className="text-sm text-gray-600 mx-4 mt-4">
             Productor
            </label>
            <input
              type="radio"
              id="Productor"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="role"  
              value="Productor"            
            />
            </p>
            <label htmlFor="newsLetter" className="text-sm text-gray-600 mx-4 mt-4">
            newsLetter
            </label>
            <input
              type="checkbox"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="newsLetter"
              
            />
           
            <button
              type="submit"
              className="bg-blue-500 rounded-md mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
              Login
            </button>
            <button
              type="submit"
              className="bg-blue-500 rounded-md  mx-4 mt-4 py-2 text-gray-50 text-xs font-bold"
            >
              Register me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}