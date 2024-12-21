import React from 'react'
import { testimonials } from '../constants'

const Testimonial = () => {
  return (
    <div className = "mt-20">
        <h2 className = "text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
            What Our Clients Say
        </h2>
        <div className = "flex flex-wrap justify-center">
            {testimonials.map((testimonial,index)=>(
                <div key = {index} className = "w-full py-2 sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className = "bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                        <p className = "text-neutral-500">{testimonial.text}</p>
                    <div className = "flex items-start mt-1">
                        <img src = {testimonial.image} alt = {testimonial.user} className = "w-10 h-10 rounded-full mt-2 mr-6 border border-neutral-300 rounded-full"/>
                        <div >
                        <h6>{testimonial.user}</h6>
                        <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                    </div>
                    </div> 
                 
                    </div>
                  
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial