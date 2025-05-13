import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FooterItems } from "@/lib/constants/data";
import Image from "next/image";
const Footer = () => {
  return (
    <section className="relative text-white font-bold">
      {/* {Background Clip part */}
      <div>
        <div className=" w-full h-[174px] bg-[#f9f3e7]  text-black flex justify-end pr-20  relative top-0 knockout-text">
          <h1 className="text-[150px] font-extrabold  relative top-[-25px] knockout-text  uppercase pl-20 ">
            ELEGANCE
          </h1>
        </div>
        <div className="bg-[url(/images/clippedimg.png)] w-full h-[174px] bg-no-repeat bg-center bg-cover relative top-0">
          <h1 className="text-[239px] font-extrabold  relative top-[-93px]  uppercase pl-20 ">
            {" "}
            GARDEN{" "}
          </h1>
        </div>
      </div>
      {/* {main Footer Part} */}
      <div className=" flex flex-col px-[100px] bg-[url(/images/Footerbg.png)] bg-blend-overlay bg-neutral-700 ">
        <div className="flex justify-between items-center py-20">
          <h2>Contact</h2>
          <div className="flex gap-5">
            <Link href="#">
              <Button size="lg" className="flex gap-5 items-center">
                Schedule free consultation <ArrowRight />
              </Button>
            </Link>
            <Link href="#">
              <Button
                size="lg"
                className="flex gap-5 items-center text-red-800"
              >
                Request an estimate <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <hr className="w-full" />
        <div>
          <div className="lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid py-20">
            {FooterItems.map((items, idx) => (
              <div className="flex flex-col gap-5" key={idx}>
                <h2>{items.title}</h2>
                <div className="flex flex-col gap-3">
                  {items.itemsmenu.map((menuItem, index) => (
                    <p key={index}>{menuItem.item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr className="w-full" />
          <div className="pt-20">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
              <div className="flex flex-col gap-5">
                <h2>CONTACT</h2>
                <div className="flex flex-col gap-5">
                  <p className="flex flex-row items-center gap-2 ">
                    <Phone />
                    281-345-1678
                  </p>
                  <p className="flex flex-row items-center gap-2 ">
                    <Mail />
                    info@texasgroundworks.com
                  </p>
                  <p className="flex flex-row items-center gap-2 ">
                    <MapPin />
                    P.O. Box 431713 Houston, TX 77243-1713
                  </p>
                </div>
              </div>
              <div>
                <h2 className="lg:w-50">PROUDLY SERVING ALL OF TEXAS</h2>
                <Image
                  src="/images/map.png"
                  alt="map"
                  width={1000}
                  height={50}
                  className="object-contain h-50 w-50"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h2>SOCIAL MEDIA</h2>
                <div className="flex items-center gap-5">
                  <span className="rounded-full p-1 border-2 border-white">
                    <Facebook />
                  </span>
                  <span className="rounded-full p-1 border-2 border-white">
                    <Instagram />
                  </span>
                </div>
              </div>
              <div className="gap-5 flex flex-col">
                <h2>RECEIVE SPECIAL OFFERS & PROMOS</h2>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-neutral-500 py-5 px-7"
                  />
                </div>
              </div>
            </div>
            <div>Hello</div>
            <div className="flex flex-row justify-between items-center  relative pt-10 bottom-0">
              <p>
                @2025 - Texas Ground Works . All Rights Reserved. Designed By:
                ISTEM AI WEB STUDIOS
              </p>
              <div className="flex items-center">
                <p>We Accept:</p>
                <Image
                  src="/images/Visa.png"
                  alt=""
                  width={1000}
                  height={20}
                  className="h-10 w-100 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
