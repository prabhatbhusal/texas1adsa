import React from 'react'

interface props{
title:string,
letter:string
content:string
}
const PageBanner = (props:props) => {
  return (
    <section>
      <div className="w-full bg-[url(/images/pagebanner.png)] bg-center bg-no-repeat h-[494px]"></div>
      <div className="left-[100px] z-10 flex flex-col justify-center gap-0 w-[995px]   text-white items-center absolute">
        <div className="bg-[#56722C] pl-20 pb-20 pt-5 gap-5 pr-30 flex flex-col   absolute">
          <h2 className="font-oswald text-[40px] w-50 h-30">
            <span className="font-island text-[116px]">{props.letter}</span>
            {props.title}
          </h2>
          <p className="text-md">{props.content}</p>
        </div>
      </div>
    </section>
  );
}

export default PageBanner
