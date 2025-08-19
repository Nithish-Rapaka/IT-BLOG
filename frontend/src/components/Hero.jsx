import React from 'react'
import img from '../assets/hero.png'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Dr. K N D Malleswararao's Blog</h1>
                        <p className="mb-8 leading-relaxed">The journey of a student is filled with challenges and triumphs. There will be days when you feel on top of the world, and days when you feel like you're drowning in a sea of textbooks. But remember, the key to success is not to avoid the challenges, but to learn how to overcome them. Here's a guide to help you stay motivated on your academic journey</p>
                        <div className="flex justify-center">
                            <Link to='/Content'>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">GetStarted</button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded-4xl" alt="hero" src={img} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
