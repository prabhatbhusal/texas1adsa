import React from 'react'
import Image from 'next/image'
import PageBanner from '@/components/PageBanner';
const page = () => {
  return (
    <section className="">
      <PageBanner
        title="allery"
        letter="G"
        content="At Texas Ground Works, we offer full-scale commercial and residential landscaping services tailored to enhance the beauty, function, and value of your outdoor spaces. From expert design and construction to year-round maintenance, irrigation systems, tree care, fencing, and custom features — our experienced team delivers reliable, high-quality solutions built to last. "
      />
      <div className="">
        <div className="flex-1">
          <Image src="/Gallery/image1.png" alt="alt" width={50} height={50} />
        </div>
        <div className="flex-1">
          <div className="flex-1/2">
            <Image src="/Gallery/image1.png" alt="alt" width={50} height={50} />
          </div>
          <div className="flex-1/2">
            <Image src="/Gallery/image1.png" alt="alt" width={50} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page
