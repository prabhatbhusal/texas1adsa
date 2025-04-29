import About from '@/components/pages/landing/About'
import Herosection from '@/components/pages/landing/Herosection'
import Services from '@/components/pages/landing/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Herosection/>
      <About/>
      <Services/>
    </div>
  )
}

export default page
