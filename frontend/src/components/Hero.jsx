import React from 'react'
import img from '../assets/HeroImg.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100">
      <section className="text-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          {/* Left side text */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 tracking-tight font-serif bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-fadeIn">
              Especially Designed for IT Minds
            </h1>
            
            <p className="mb-8 text-lg leading-relaxed text-gray-700 max-w-xl font-light animate-slideUp">
              The journey of a student is filled with challenges and triumphs. 
              Some days you feel on top of the world, other days like you&apos;re drowning in textbooks. 
              The key to success is not avoiding challenges, but overcoming them. 
              Here&apos;s a guide to keep you motivated on your academic journey.
            </p>
            
            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <Link to="/Content">
                <button className="inline-flex items-center text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                  🚀 Get Started
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right side image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-fadeIn">
            <img
              className="object-cover object-center rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
              alt="hero"
              src={img}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
