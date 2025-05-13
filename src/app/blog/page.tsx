import PageBanner from '@/components/PageBanner';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { blogsdata } from '@/lib/constants/data';

const page = () => {
  return (
    <div>
      <PageBanner
        title="logs"
        letter="B"
        content="Welcome to our blog — your go-to resource for expert landscaping tips, project highlights, seasonal maintenance guides, and the latest trends in outdoor design. At Texas Groundworks, we believe great landscapes are built on knowledge and creativity. Whether you're a homeowner looking for inspiration or a business exploring commercial solutions, our articles are here to inform, inspire, and guide you."
      />
      <div className='mt-50 relative px-[100px] mb-5 block'>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          {blogsdata.map((data, idx) => (
            <div className="flex-col" key={idx}>
              <Image
                src={data.src}
                alt={data.alt}
                width={1000}
                height={100}
                className="object-contain w-[813px] h-[517px] relative left-[-20px]"
              />
              <div className=" flex flex-col gap-5">
                <p className="text-[#9C9C9C] text-lg">{data.date}</p>
                <h2 className="font-bold text-4xl">
                  {data.title}
                </h2>
                <p className="text-lg">
                  {data.content}
                </p>
                <Link href="/blogs" className="flex items-center gap-2">
                  <hr className="w-7  border-black " /> Read More
                </Link>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page
