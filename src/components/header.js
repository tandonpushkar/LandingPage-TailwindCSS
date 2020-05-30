import React from 'react'
import { Link } from 'react-scroll'

export default function header() {
    return (
        <header className="text-gray-700 body-font bg-white w-full fixed z-50 cursor-pointer">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="main" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" smooth={true} duration={1000}>

                    <span className="ml-3 text-xl hover:text-red-600 hover:font-bold" role="img" aria-label="cool">😎 Pushkar Tandon</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="features" className="mr-5 hover:text-red-600 hover:font-bold" smooth={true} duration={1000}>Features</Link>
                    <Link to="testimonials" className="mr-5 hover:text-red-600 hover:font-bold" smooth={true} duration={1000}>Testimonials</Link>
                    <Link to="pricing" className="mr-5 hover:text-red-600 hover:font-bold" smooth={true} duration={1000}>Pricing</Link>
                    <Link to="main" className="mr-5 hover:text-red-600 hover:font-bold" smooth={true} duration={1000}>Blog</Link>
                </nav>
                <a href="https://tandonpushkar.netlify.app" rel="noopener noreferrer" target="_blank">
                    <button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0">Sign in
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </a>
            </div>
        </header>
    )
}
