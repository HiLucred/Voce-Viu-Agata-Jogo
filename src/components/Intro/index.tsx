'use client'

import Image from "next/image";
import poster from "../../../public/assets/poster.png"
import itchio from "../../../public/assets/itchio-button.svg"
import { Button } from "../Button";
import { Play, Plus } from 'lucide-react'
import * as Dialog from "@radix-ui/react-dialog"
import { TeaserModal } from "./TeaseModal";
import { NewsLetterModal } from "./NewsLetterModal";

export function Intro() {
  return (
    <div id="home" className="w-full h-full">
      <div 
        className="bg-detective-painting bg-cover bg-center bg-no-repeat py-20 px-8 flex flex-col items-center justify-center sm:py-[10%] lg:py-[5%]  "
      >
        <div className="flex justify-center items-center">
          <div className="max-w-sm sr-only lg:not-sr-only">
            <Image src={poster} alt="Poster de desaparecida de Ágata" className="blur-sm" />
          </div>

          <div className="relative max-w-xl">
            <Image src={poster} alt="Poster de desaparecida de Ágata" style={{ filter: "drop-shadow(0 5px 20px rgba(0, 0, 0, 80%))"}} />

            <button className="absolute bottom-[10%] left-[30%] w-[40%] hover:scale-[130%] transition-all">
              <Image src={itchio} alt="itch.io button" />
            </button>
          </div>

          <div className="max-w-sm sr-only lg:not-sr-only">
            <Image src={poster} alt="Poster de desaparecida de Ágata" className="blur-sm" />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row">
          <Dialog.Root>
            <Dialog.Trigger asChild >
              <Button text="CONFIRA O TRAILER" icon={Play}  />
            </Dialog.Trigger>

            <TeaserModal />
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button text="NEWSLETTER" icon={Plus} />
            </Dialog.Trigger>

            <NewsLetterModal />
          </Dialog.Root>
        </div>
      </div>
    </div>
  )
}