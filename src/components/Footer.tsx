import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <section className="relative ">
      {/* {Background Clip part */}
      <div></div>
      {/* {main Footer Part} */}
      <div className="bg-green-500 flex flex-col px-[100px]">
        <div className="flex justify-between items-center">
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
        <div></div>
      </div>
    </section>
  );
}

export default Footer
