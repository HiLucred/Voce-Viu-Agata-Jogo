'use client'

import { JoinUs } from '@/components/JoinUs'
import { Faq } from '@/components/Faq'
import { Features } from '@/components/Features'
import { Intro } from '@/components/Intro'
import { NavBar } from '@/components/NavBar'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'

export default function Home() {
  useEffect(() => {
    scroll.scrollToTop()
  }, [])

  return (
    <>
      <NavBar />

      <main>
        <Intro />
        <About />
        <Features />

        <div className="bg-blur-separator bg-auto bg-center h-56 md:h-96 w-full" />

        <Faq />
        <JoinUs />
        <Contact />
      </main>
    </>
  )
}
