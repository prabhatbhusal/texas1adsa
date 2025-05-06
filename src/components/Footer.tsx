import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { FooterItems } from '@/lib/constants/data';
const Footer = () => {
  return (
    <section className="relative ">
      {/* {Background Clip part */}
      <div></div>
      {/* {main Footer Part} */}
      <div className="bg-green-500 flex flex-col px-[100px] ">
        <div className="flex justify-between items-center py-10">
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
          <div className="lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid py-10">
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
          <div className="py-10">
            <div>
              <div>

              </div>
            </div>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer
