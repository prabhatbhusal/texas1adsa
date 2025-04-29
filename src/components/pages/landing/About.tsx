import Link from 'next/link';
import React from 'react'
import Image from "next/image";
const About = () => {
  return (
    <main>
      <div>
        <div className="lg:flex lg:flex-col justify-center items-center gap-5">
          <h2 className="font-oswald lg:text-[56px] md:text-4xl sm:text-3xl font-bold flex items-center text-center text-primary gap-2">
            About the{" "}
            <span className="font-island text-[200px] font-medium"> R</span>oots
            of the Work
          </h2>
          <p className="lg:text-lg text-center w-[962px]">
            <span className="text-primary font-bold ">
              Texas Groundworks Management Inc.,
            </span>{" "}
            has operated throughout the greater Houston area since 2012 and has
            specialized in providing exceptional services at reasonable rates.
            We have expertly trained staff to provide a wide range of landscape
            management services, irrigation maintenance, concrete jobs and much
            more.
          </p>
          <div className="lg:flex lg:flex-col justify-center items-center ">
            <Link href="/about">ReadMore</Link>
            <hr className="text-center items-center flex justify-center border-1 border-black lg:w-[30px]" />
          </div>
          <div className="lg:flex lg:flex-row md:flex-row sm:flex-col gap-10">
            <Image
              src="/Gallery/image.png"
              alt="logo"
              width={1000}
              height={100}
              className="object-contain bg-center h-[293px] w-[310px] relative mt-[300px] shadow-2xl"
            />
            <Image
              src="/Gallery/image1.png"
              alt="logo"
              width={1000}
              height={100}
              className="object-contain bg-center h-[301px] w-[254px] relative shadow-2xl"
            />
            <Image
              src="/Gallery/image2.png"
              alt="logo"
              width={1000}
              height={100}
              className="object-contain bg-center h-[341px] w-[341px shadow-2xl mt-[200px]
] relative"
            />
            <Image
              src="/Gallery/image3.png"
              alt="logo"
              width={1000}
              height={100}
              className="object-contain bg-center h-[277px] w-[278px] relative shadow-2xl mt-[308px]"
            />
            <Image
              src="/Gallery/image4.png"
              alt="logo"
              width={1000}
              height={100}
              className="object-contain bg-center h-[335px] w-[302px] relative shadow-2xl mt-[-50px]"
            />
            <Image
              src="/Gallery/image5.png"
              alt="logo"
              width={1000}
              height={100}
              className="object-contain bg-center h-[348px] w-[359px] relative shadow-2xl top-[300px] right-[133px]"
            />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}

export default About
