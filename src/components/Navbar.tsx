'use client'
import React, { useState } from "react";
import { NavItems } from "@/lib/constants/data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <div className="lg:flex lg:flex-row md:flex-col justify-between items-center px-6 md:px-8 lg:px-12 xl:px-30 py-5 z-[100] w-full fixed bg-transparent text-white  transition-all  duration-300">
        {/* Hamburger Menu (Mobile Only) */}
        <div className="lg:hidden absolute left-4 top-6 z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 transition-all duration-300 hover:scale-110"
          >
            {isMenuOpen ? (
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Items (Desktop) */}
        <div className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-8 items-center mb-4 sm:mb-0 overflow-x-auto sm:overflow-visible">
          {NavItems.map((link) => (
            <div
              key={link.id}
              className="hover:scale-105 transition-transform duration-200"
            >
              <ul>
                <Link
                  href={link.url}
                  className="text-sm md:text-base hover:text-primary transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </ul>
            </div>
          ))}
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={296}
            height={74}
            className="h-[50px] w-[200px] sm:h-[60px] sm:w-[240px] md:h-[74px] md:w-[296px] object-contain"
          />
        </div>

        {/* Contact Section (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 sm:gap-3 md:gap-4">
          <button className="hover:scale-110 transition-transform duration-200">
            <Image
              src="/icons/map.png"
              alt="map"
              width={34}
              height={34}
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
            />
          </button>
          <button className="hover:scale-110 transition-transform duration-200">
            <Image
              src="/icons/call.png"
              alt="call"
              width={34}
              height={34}
              className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
            />
          </button>
          <span className="underline text-sm md:text-base whitespace-nowrap">
            281-345-1678
          </span>
          <Button
            size="lg"
            className="hover:scale-105 transition-transform duration-200 text-sm md:text-base"
          >
            Consult Now
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ top: "84px" }}
        >
          <div className="flex flex-col items-center pt-8 space-y-6">
            {NavItems.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl hover:text-primary transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-8">
              <button className="hover:scale-110 transition-transform duration-200">
                <Image
                  src="/icons/map.svg"
                  alt="map"
                  width={34}
                  height={34}
                  className="h-8 w-8 bg-white"
                />
              </button>
              <button className="hover:scale-110 transition-transform duration-200 ">
                <Image
                  src="/icons/call.svg"
                  alt="call"
                  width={34}
                  height={34}
                  className="h-8 w-8 bg-shadow-white bg-blend-overlay bg-neutral-800 "
                />
              </button>
              <span className="underline text-lg">281-345-1678</span>
            </div>
            <Button
              size="lg"
              className="hover:scale-105 text-primary transition-transform duration-200 text-lg"
            >
              <span className="text-primary text-[18px]">Consult Now</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
