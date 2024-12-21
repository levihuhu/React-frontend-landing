import React from 'react'
import Navbar from './components/Navbar'  // 确保路径正确
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Foot from './components/Foot'
const App = () => {
  return (
    <div>
        <Navbar />
        <div className = "max-w-7xl mx-auto pt-20 px-10">
          <HeroSection />
          <FeatureSection />
          <Workflow />
          <Pricing />
          <Testimonial />
          </div>
          <Foot />
    </div>
  )
}

export default App