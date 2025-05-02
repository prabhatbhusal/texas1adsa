import React from 'react'
import Image from   'next/image'
import { resiservice } from '@/lib/constants/data';
const Service = () => {
  return (
    <main>
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col py-20 text-black gap-20">
        <video
          autoPlay
          muted
          loop
          className="object-cover  lg:w-[966px] lg:h-[587px] "
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className=" flex lg:flex-col ">
          <h2 className="lg:text-[32px] text-primary font-oswald font-medium ">
            <span className="font-island lg:text-[76px]">R</span>esidential
            Services /<span className="font-island lg:text-[76px]">C</span>
            ommericial Services
          </h2>
          <div className='className="lg:flex lg:flex-row justify-center items-center text-primary font-bold '>
            {resiservice.map((link) => (
              <div className="lg:flex lg:flex-row gap-5 " key={link.id}>

                  <div className="rounded-full full bg-primary p-5 w-[75px] h-[75px] justify-center  items-center mt-5">
                    <Image
                      src={link.src}
                      alt="alt"
                      width={2000}
                      height={50}
                      className="  object-cover lg:h-[40px] lg:w-[40px]  "
                    />
                  </div>

                <div className="flex justify-center items-center ">
                  <li className="list-none">{link.text}</li>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Service
