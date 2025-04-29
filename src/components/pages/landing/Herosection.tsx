import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import React from 'react'

const Herosection = () => {
  return (
    <main>
      <div className="text-[#f0f0f0] ">
        <video
          autoPlay
          muted
          loop
          className="object-cover h-full z-[-1] w-full absolute shadow-[inset_0_0_80px_rgba(0,0,0,0.5)] "
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className="z-[10] flex flex-col justify-center  h-[1107px] gap-5 items-center ">
          <h1 className="lg:text-[90px] font-oswald  ">Expert Landscaping Services</h1>
          <p className="lg:text-[44px] font-bold  font-oswald text-center lg:w-[920px]">
            Providing you with creativity, quality and satisfaction we are known
            for.
          </p>
          <p className="text-center lg:w-[920px]">
            At{" "}
            <span className="text-[#F7E409]">
              Texas Groundworks Management Inc.
            </span>
            , we protect client’s property values by providing professional
            landscape design, installation, and maintenance, using sound
            environmental practices and delivering these services at a
            competitive rate.
          </p>
          <Button size="lg">Schedule an Appointment</Button>
          <div className='flex justify-end relative top-80 left-200 items-end gap-5 text-[#f0f0f0]'>
            <span><Mail/></span>
            <span className='underline'>info@texasgroundworks.com</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Herosection
