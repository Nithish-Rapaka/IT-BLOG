import React from 'react'
import img from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="flex justify-center items-center h-24 bg-gray-100">
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to="/Content" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                       <img src={img} alt="logo" className="h-20 w-15 rounded-full"/>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© Dr. K N D Malleswararao
                    </p>
                  
                </div>
            </footer>
        </div>
    )
}

export default Footer
