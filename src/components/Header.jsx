import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
    const location = useLocation()              //useLocation is a function
    const navigate = useNavigate()
    // console.log(location.pathname)

    function pathMatchfull(route){
        if(route === location.pathname){
            return true;
        }
    }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-7xl mx-auto">
            <div>
                <img src ="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className="h-5 cursor-pointer"
                onClick={()=>navigate("/")}></img>
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li className = {`py-3 cursor-pointer
                    text-sm 
                    font-semibold 
                    text-gray-400 
                    border-b-[3px] 
                    border-b-transparent
                    ${pathMatchfull("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
                    
                    <li className= {`py-3 cursor-pointer
                    text-sm 
                    font-semibold 
                    text-gray-400 
                    border-b-[3px] 
                    border-b-transparent
                    ${pathMatchfull("/offers") && "text-black border-b-red-500"}`}onClick={()=>navigate("/offers")}>Offers</li>
                    
                    <li className = {`py-3 cursor-pointer
                    text-sm 
                    font-semibold 
                    text-gray-400 
                    border-b-[3px] 
                    border-b-transparent
                    ${pathMatchfull("/sign-in") && "text-black border-b-red-500"}`}onClick={()=>navigate("/sign-in")}>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
