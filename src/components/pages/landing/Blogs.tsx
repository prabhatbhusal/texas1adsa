import { homeblogs } from "@/lib/constants/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const Blogs = () => {
  return (
    <section className="px-[100px] pt-20 bg-[#f9f3e7]">
      <div className="flex lg:flex-row md:flex-row sm:flex-col  ">
        <div className="flex-1 flex-col gap-5 justify-center items-center">
          <div className="flex flex-col ">
            <h2 className="text-primary font-oswald text-[56px] font-bold ">
              Latest{" "}
              <span className="font-island text-[136px] font-medium">B</span>
              logs
            </h2>
            <div className="flex flex-col gap-2 ">
              <p className="text-[#9C9C9C] text-lg w-[500px]">
                We love talking plants, patios, and pretty lawns! Our blog is
                packed with creative landscaping tips, real project highlights,
                and ideas that will have you dreaming of your next outdoor
                makeover.
              </p>
              <Link
                href="/blogs"
                className="flex items-center border-black gap-2  "
              >
                <hr className="w-7 border-black" /> Explore Blogs
              </Link>
            </div>
          </div>
          <div className="flex-col">
            <Image
              src="/images/blogs1.png"
              alt="Lawngarden"
              width={1000}
              height={100}
              className="object-contain w-[813px] h-[517px] relative left-[-20px]"
            />
            <div className=" flex flex-col gap-5">
              <p className="text-[#9C9C9C] text-lg">September 13, 2025</p>
              <h2 className="font-bold text-4xl">
                Low-Maintenance Landscaping: Beauty Without the Backache
              </h2>
              <p className="text-lg">
                Want a stunning yard without spending your weekends on upkeep?
                Learn how to create a hassle-free landscape using hardy plants,
                smart layouts, and time-saving techniques.
              </p>
              <Link href="/blogs" className="flex items-center gap-2">
                <hr className="w-7  border-black " /> Read More
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 relative top-20">
          <div className="flex-col">
            <Image
              src="/images/blogs1.png"
              alt="Lawngarden"
              width={1000}
              height={100}
              className="object-contain w-[813px] h-[517px] relative left-[-20px]"
            />
            <div className="pr-[10px] flex gap-5 flex-col">
              <p className="text-[#9C9C9C] text-lg">September 13, 2025</p>
              <h2 className="font-bold text-4xl">
                Low-Maintenance Landscaping: Beauty Without the Backache
              </h2>
              <p className="text-lg">
                Want a stunning yard without spending your weekends on upkeep?
                Learn how to create a hassle-free landscape using hardy plants,
                smart layouts, and time-saving techniques.
              </p>
              <Link href="/blogs" className="flex items-center gap-2">
                <hr className="w-7 border-black " /> Read More
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
