import React from 'react'
import{pricingOptions} from '../constants'
import {CheckCircle2} from 'lucide-react'

const Pricing = () => {
  return (
    <div className = "mt-10">
        <h2 className = "text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
            Pricing
        </h2>
        <div className = "flex  justify-center flex-wrap">
            {pricingOptions.map((option,index)=>(
                <div key = {index} className = "w-full p-2 sm:w-1/2 lg:w-1/3 ">
                    <div className = "bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                        <h3 className = "text-3xl mb-4">{option.title}
                            {option.title === "Pro" &&
                             <span className = "bg-gradient-to-r ml-2 text-xl from-orange-500 to-red-400 text-transparent bg-clip-text">
                                (Most Popular)
                                </span>
                                }
                        </h3>
                        <p className = "mb-8"> 
                            <span className='text-4xl mt-6 mr-2'>{option.price}</span>
                            <span className = "text-neutral-500 tracking-tight">/month</span>
                        </p>
                        <ul className = "mt-1">
                            {option.features.map((feature,index)=>
                            <li key = {index} className = "flex items-center mt-5">
                                <CheckCircle2 className = "w-5 h-5 mx-2 my-2 text-green-500 "/>
                                <span className = "text-neutral-500 ml-2">{feature}</span>
                            </li>
                            )}
                           
                        </ul>
                        <a href = "#">
                                <button className = " inline-flex justify-center items-center  w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                                    Subscribe
                                </button>
                        </a>
                       
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Pricing