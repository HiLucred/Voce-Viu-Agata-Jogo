'use client'

import { screnshotsList } from "@/db/Screenshots";
import { useKeenSlider } from "keen-slider/react";
import { Camera } from "lucide-react";
import Image from "next/image";

export function Screenshots() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    // breakpoints: {
    //   "(max-width: 600px)": {
    //     slides: { perView: 3, spacing: 20 },
    //   },
    // },
    slides: { perView: 1, spacing: 10 },
    loop: true,
  });
  
  return (
    <div className="bg-black w-full">
      <h2 className="border-red-500 text-center text-2xl pt-8 text-white flex justify-center items-center gap-2">
        [ SCRENSHOTS <Camera /> ]
      </h2>

      <div id="screenshots" className="flex items-center mx-auto py-16 px-2 keen-slider w-full overflow-hidden ">
        <div ref={ref} className="flex">
          {screnshotsList.map((screenshot, index) => {
            return (
              <div key={index} className={`keen-slider__slide number-slide${index + 1}`}>
                <Image src={screenshot.image} alt="" className="border border-white" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
    
  )
}