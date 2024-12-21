import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className = "flex flex-col item-center mt-3 lg:mt-20">
       <div className="flex flex-col items-center max-w-4xl mx-auto">
        <h1 className = "text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">VitrualR Built Tools
        <span className = "bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            {" "}for developers
        </span>
        </h1>
        <p className = "text-center text-md mt-6 text-neutral-500 ">
            We've built tools for developers to help them build their projects faster and easier.And we're just getting started.
            Build your next project with VirtualR.We're excited to see what you build.Stay tuned for more updates.
        </p>
        </div>
        <div className = "flex justify-center mt-6">
            <a href='#' className = "bg-gradient-to-r from-orange-500 to-orange-900 py-2 px-4 rounded-md ">
                Get Started
            </a>
            <a href='#' className = " py-2 px-3 rounded-md mx-4 border">
                Documentation
            </a>
        </div>
        <div className = "flex justify-center mt-10">
            <video src={video1} autoPlay loop muted playsInline className = "rounded-lg w-1/2 border border-orange-700 shadow-orange-200 mx-2 my-4" />
            <video src={video2} autoPlay loop muted playsInline className = "rounded-lg w-1/2 border border-orange-700 shadow-orange-200 mx-2 my-4" />
        </div>
       
    </div>
  )
}

export default HeroSection