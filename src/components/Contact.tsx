'use client'

import Image from 'next/image'
import poster from '../../public/assets/poster.png'
import itchioButton from '../../public/assets/itchio-button.svg'
import { Button } from './Button'
import { Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'
import { animateScroll as scroll } from 'react-scroll'

export function Contact() {
  return (
    <div
      id="contact"
      className="bg-detective-painting w-full py-12 bg-center bg-cover bg-no-repeat"
    >
      <div className="w-3/5 max-w-xs m-auto flex flex-col items-center justify-center">
        <Image
          src={poster}
          alt="Poster de desaparecida de Ágata"
          style={{ filter: 'drop-shadow(0 5px 20px rgba(0, 0, 0, 80%))' }}
        />

        <button
          type="button"
          className="w-[70%] hover:scale-150 transition-all"
        >
          <Image src={itchioButton} alt="Botão da loja do Itch.io" />
        </button>

        <div className="flex justify-center gap-8 mt-8">
          <Button icon={Twitter} />
          <Button icon={Instagram} />
          <Button icon={Linkedin} />
        </div>

        <button
          type="button"
          onClick={() => scroll.scrollToTop()}
          className="bg-white w-12 p-2 flex items-center justify-center mt-10 border border-black cursor-pointer shadow-md hover:opacity-80 transition-all"
        >
          <ArrowUp className=" text-black" />
        </button>
      </div>
    </div>
  )
}
