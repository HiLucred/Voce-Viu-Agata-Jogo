import { JoinUs } from "@/components/JoinUs";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Intro } from "@/components/Intro";
import { NavBar } from "@/components/NavBar";
import { Screenshots } from "@/components/Screenshots";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <Features />

      <div className="bg-blur-separator bg-auto bg-center h-96 w-full" />

      {/* <Screenshots /> */}
      <Faq />
      <JoinUs />
      <Contact />
    </>
  )
}
