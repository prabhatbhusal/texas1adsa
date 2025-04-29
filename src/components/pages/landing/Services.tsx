import Link from 'next/link';
import React from 'react'
import {servicephotos} from '@/lib/constants/data'
import Image from 'next/image'
const Services = () => {
  return (
    <main>
      <div>
        <div className="lg:flex lg:flex-col justify-center items-center gap-5">
          <h1 className="font-oswald lg:text-[56px] md:text-4xl sm:text-3xl font-bold flex items-center text-center text-primary gap-2 ">
            Tailored Landscaping{" "}
            <span className="font-island text-[200px] font-medium ">S</span>{" "}
            ervices for Every Need
          </h1>
          <p className="lg:text-lg text-center w-[932px]">
            We are known for our reasonable rates and exceptional value of
            services, provided by our expertly trained staff. We are proud of
            our extensive experience and creativity, allowing us to provide a
            wide range of landscape management services.{" "}
          </p>
          <div className="lg:flex lg:flex-col justify-center items-center ">
            <Link href="">Explore All Services</Link>
            <hr className="text-center items-center flex justify-center border-1 border-black lg:w-[30px]" />
          </div>
          {/* {Grid Section Images} */}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[16px] mt-5 '>
            {servicephotos.map((photo,idx)=>(
            <div key={idx} >
              <Image src={photo.src} alt={photo.alt} height={100} width={1000} className='object-contain bg-center hover:scale-[1.05] transition-all ease-in-out duration-500 h-[475px] w-[562px]'/>
            </div>))}</div>
        </div>
      </div>
    </main>
  );
}

export default Services
