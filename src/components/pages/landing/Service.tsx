import React from 'react'
import Image from   'next/image'
const Service = () => {
  return (
    <main>
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col py-20 text-black">
        <video
          autoPlay
          muted
          loop
          className="object-cover  lg:w-[966px] lg:h-[587px] "
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className="">
          <h2 className="lg:text-[32px] text-primary font-oswald font-medium ">
            <span className="font-island lg:text-[76px]">R</span>esidential
            Services /<span className="font-island lg:text-[76px]">C</span>
            ommericial Services
          </h2>
          <div>
            <div className="lg:flex lg:flex-row">
              <div>
                <Image
                  src="src"
                  alt="alt"
                  width={1000}
                  height={50}
                  className=""
                />
              </div>
              <div>
                <li></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Service
