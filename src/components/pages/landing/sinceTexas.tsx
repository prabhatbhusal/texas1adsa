import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const sinceTexas = () => {
  return (
    <section className="bg-black">
      <div>
        <div className="flex flex-row items-center justify-center z-[10] gap-0 relative ">
          <Image
            src="/images/design4.png"
            width={1000}
            height={50}
            alt="Hello"
          />
          <Image
            src="/images/design5.png"
            width={1000}
            height={50}
            className="relative left-[-25] top-[-10]"
            alt="Hello"
          />
        </div>
        <div className="flex ">
          <div>
            <Image src="/images/images1.png" alt="alt" width={1000} height={50} />
          </div>
          <div>
            <Image src="/images/logo2.png" alt="alt" width={1000} height={50} />
            <Link href="/blogs" className="flex items-center gap-2">
              <hr className="w-7  border-black " /> Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default sinceTexas
