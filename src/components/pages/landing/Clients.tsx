import React from 'react'
import Image from 'next/image'
const Clients = () => {
  return (
    <section className="bg-[url(/images/bgwork.png)] w-full">
      <div className="flex md:flex-row flex-col px-[100px] gap-10">
        <div className="flex-1 flex flex-col text-primary justify-center   font-medium gap-5">
          <h2 className="font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-oswald">
            Proud Member of our esteemed network
          </h2>
          <p className="text-[#6B6B6B] text-lg ">
            At <span className='font-Inter text-primary font-bold'>Texas Groundworks Management Inc.</span> , we’re proud to
            stand alongside professionals who value quality, integrity, and
            service. Being a member of these esteemed network reflects our
            ongoing commitment to industry excellence and community connection.
          </p>
        </div>
        <div className="flex-2 flex">
          <Image
            src="/images/Busylogo.png"
            alt="Business Logo"
            width={3000}
            height={200}
            className="h-100 w-[100vw] object-contain bg-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Clients
