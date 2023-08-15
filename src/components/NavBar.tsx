/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from 'next/image'
import itchio from '../../public/assets/itchio.png'
import { Menu, XIcon } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import {
  Link as ReactLink,
  animateScroll as scroll,
  scroller,
} from 'react-scroll'

export function NavBar() {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <nav className="w-full bg-black h-12 flex items-center justify-center gap-4 fixed z-50 shadow-lg border-b border-white">
      <button onClick={() => setIsSelected(true)} className="sm:sr-only">
        <Menu className="text-red-400 shadow-sm h-8 w-8 " />
      </button>

      <div
        data-state={isSelected}
        className="bg-red-500 h-3/6 w-full fixed z-50 -top-[100%] transition-all flex flex-col items-center justify-center gap-4 data-[state=true]:top-0 sm:relative sm:flex-row sm:bg-black sm:top-0"
      >
        <ReactLink
          to="home"
          smooth={true}
          duration={800}
          onClick={() => setIsSelected(false)}
          className="text-white cursor-pointer transition-all hover:text-black lg:hover:text-red-400"
        >
          INÍCIO
        </ReactLink>

        <ReactLink
          to="about"
          smooth={true}
          duration={800}
          onClick={() => setIsSelected(false)}
          className="text-white cursor-pointer transition-all hover:text-black lg:hover:text-red-400"
        >
          SOBRE
        </ReactLink>

        <ReactLink
          to="features"
          smooth={true}
          duration={800}
          onClick={() => setIsSelected(false)}
          className="text-white cursor-pointer transition-all hover:text-black lg:hover:text-red-400"
        >
          FEATURES
        </ReactLink>

        <ReactLink
          to="faq"
          smooth={true}
          duration={800}
          onClick={() => setIsSelected(false)}
          className="text-white cursor-pointer transition-all hover:text-black lg:hover:text-red-400"
        >
          FAQ
        </ReactLink>

        <ReactLink
          to="join-us"
          smooth={true}
          duration={800}
          onClick={() => setIsSelected(false)}
          className="text-white cursor-pointer transition-all hover:text-black lg:hover:text-red-400"
        >
          JUNTE-SE
        </ReactLink>

        <ReactLink
          to="contact"
          smooth={true}
          duration={800}
          onClick={() => setIsSelected(false)}
          className="text-white cursor-pointer transition-all hover:text-black lg:hover:text-red-400"
        >
          CONTATO
        </ReactLink>

        <button
          onClick={() => setIsSelected(false)}
          className="absolute top-2 right-4 hover:opacity-60 transition-all"
        >
          <XIcon className="h-8 w-8 text-black" />
        </button>

        <Link
          href="https://lucvang.itch.io/onde-est-gata"
          target="_blank"
          className="absolute top-0 right-5 flex items-center justify-center gap-2 invisible lg:visible hover:opacity-80 transition-all"
        >
          <span className="text-white">JOGUE AGORA</span>
          <Image src={itchio} alt="Logo itch.io" width={24} height={24} />
        </Link>
      </div>
    </nav>
  )
}
