import React from 'react'
import theoryimg from '../assets/Theory.png'
import Labs from '../assets/Labs.png'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={theoryimg} />

                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Theoritical Knowledge</h2>
                            <p className="leading-relaxed text-base">Theoretical knowledge doesn't just exist in a vacuum; its primary purpose in engineering is to make practical work
                                smarter, safer, and more innovative. Here’s
                                how theory directly helps practice:</p>
                            <Link to="/theory"><button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Open</button></Link>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={Labs} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Practical Knowledge</h2>
                            <p className="leading-relaxed text-base">Practical knowledge is the hands-on expertise gained through
                                direct experience, action, and real-world application rather than just from books or lectures.
                                It's the "how-to" skillset that complements the "what" and "why" of theoretical learning</p>
                            <Link to="/labs"><button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Open</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content
