import { JoinUs } from '@/components/JoinUs'
import { Faq } from '@/components/Faq'
import { Features } from '@/components/Features'
import { Intro } from '@/components/Intro'
import { NavBar } from '@/components/NavBar'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'

export default function Home() {
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
