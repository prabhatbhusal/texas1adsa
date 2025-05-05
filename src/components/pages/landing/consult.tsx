import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';
import { FaCircleCheck } from "react-icons/fa6";
const consult = () => {
  return (
    <main>
      <div className="flex lg:flex-row md:flex-row sm:flex-col  flex-col  pb-50">
        <div className="pl-[100px] w-full">
          <div className="z-10 absolute lg:flex lg:flex-col bg-[#56722C]  text-white lg:w-[996px] lg:h-[470px]  mt-[5vw]   px-[100px] py-[100px]  ">
            <h2 className="text-4xl font-oswald font-semibold">
              Schedule a{" "}
              <span className="font-island font-medium text-7xl">F</span>ree{" "}
              <span className="font-island text-7xl font-medium">C</span>{" "}
              onsultation
            </h2>
            <p>
              We are known for our innovative designs that will capture
              priceless impressions. Having a landscaped exterior property adds
              value to your home or commercial space. It also makes for a great
              impression for businesses, adding that aesthetic appeal to your
              commercial space. Our goals in our landscaping services are to
              define and enhance spaces that give each property a distinctive
              image.
            </p>
            <section className="flex gap-5 pt-5">
              <div className="flex gap-2 items-center">
                <FaCircleCheck />
                <p>Free Estimates</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck />
                <p>Credit-Cards Accepted</p>
              </div>
            </section>
            <div className="pt-2">
              <Button
                size="lg"
                className="flex text-primary bg-white w-[10vw] hover:none rounded-full  "
              >
                Contact Us Today <MoveUpRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex   justify-end items-end  pr-[100px] w-full ">
          <Image
            src="/images/lawn.png"
            alt="lawn"
            width={1000}
            height={50}
            className="object-contain lg:w-[856px] lg:h-[666px] shadow-2xl shadow-black"
          />
        </div>
      </div>
    </main>
  );
}

export default consult
