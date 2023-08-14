'use client'

import * as Dialog from "@radix-ui/react-dialog"
import { XCircle } from 'lucide-react'

export function TeaserModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-overlay absolute top-0 left-0 z-40 h-full w-full" />

      <Dialog.Content
        className="bg-black fixed z-50 top-20 left-0 flex justify-center items-center w-full h-3/5 pt-12 rounded-md md:w-4/5 md:h-4/5 md:left-[10%]"
      >
        <iframe
          src="https://www.youtube.com/embed/fmXPYdUwUvg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>

        <Dialog.Close asChild className="absolute top-4 right-4">
          <button>
            <XCircle className="text-white hover:text-red-400 transition-all"/>
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}