import React from 'react'
import { platformLinks,resourcesLinks,communityLinks } from '../constants'

const Foot = () => {
  return (
    <footer className = "border-t  border-neutral-700 text-neutral-500 py-10 mt-20">
        <div className = "grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
      <div className = "ml-2">
         <h3 className = "text-md font-semibold mb-4 ">Resources</h3>
         <ul className = "mt-4 space-y-2">
            {resourcesLinks.map((link,index)=>(
                <li key = {index}>
                    <a href = {link.href} className="text-neutral-300 hover:text-white hover:underline">
                        {link.text}
                    </a>
                </li>
            ))}
         </ul>
      </div>

      <div>
         <h3 className = "text-md font-semibold mb-4">Platform</h3>
         <ul className = "mt-4 space-y-2">
            {platformLinks.map((link,index)=>(
                <li key = {index}>
                    <a href = {link.href} className="text-neutral-300 hover:text-white hover:underline">
                        {link.text}
                    </a>
                </li>
            ))}
         </ul>
      </div>

      <div>
         <h3 className = "text-md font-semibold mb-4">Community</h3>
         <ul className = "mt-4 space-y-2">
            {communityLinks.map((link,index)=>(
                <li key = {index}>
                    <a href = {link.href} className="text-neutral-300 hover:text-white hover:underline">
                        {link.text}
                    </a>
                </li>
            ))}
         </ul>
      </div>

      

        </div>
        
    </footer>
  )
}

export default Foot
