import About from '@/components/pages/landing/About'
import Herosection from '@/components/pages/landing/Herosection'
import Services from '@/components/pages/landing/Services'
import React from 'react'
import Residential from '@/components/pages/landing/Service'
import Consultation from "@/components/pages/landing/consult";
import Works from '@/components/pages/landing/Works'
import Clients from '@/components/pages/landing/Clients'
const page = () => {
  return (
    <div>
      <Herosection/>
      <About/>
      <Services/>
      <Residential/>
      <Consultation/>
      <Works/>
      <Clients/>
    </div>
  )
}

export default page
