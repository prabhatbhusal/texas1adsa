import About from '@/components/pages/landing/About'
import Herosection from '@/components/pages/landing/Herosection'
import Services from '@/components/pages/landing/Services'
import React from 'react'
import Residential from '@/components/pages/landing/Service'
const page = () => {
  return (
    <div>
      <Herosection/>
      <About/>
      <Services/>
      <Residential/>
    </div>
  )
}

export default page
