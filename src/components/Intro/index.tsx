'use client'

import Image from 'next/image'
import poster from '../../../public/assets/poster.png'
import { ActionButtons } from './ActionButtons'
import { MainPoster } from './MainPoster'

export function Intro() {
  return (
    <div id="home" className="w-full h-full">
      <div className="bg-detective-painting bg-cover bg-center bg-no-repeat py-20 px-8 flex flex-col items-center justify-center sm:py-[10%] lg:py-[5%]  ">
        <div className="flex justify-center items-center">
          <div className="max-w-sm sr-only lg:not-sr-only">
            <Image
              src={poster}
              alt="Poster de desaparecida de Ágata"
              className="blur-sm"
            />
          </div>

          <MainPoster />

          <div className="max-w-sm sr-only lg:not-sr-only">
            <Image
              src={poster}
              alt="Poster de desaparecida de Ágata"
              className="blur-sm"
            />
          </div>
        </div>

        <ActionButtons />
      </div>
    </div>
  )
}
