import Image from 'next/image'
import agataPhoto from '../../../public/assets/agata-photo.png'
import { Accordion } from './Accordion'

export function Faq() {
  return (
    <div
      id="faq"
      className=" bg-cover bg-center py-16 sm flex flex-col-reverse gap-6 sm:flex sm:gap-8 sm:justify-center sm:items-center md:flex md:flex-row w-full h-full justify-center items-center  transition-all"
      style={{
        backgroundImage:
          "url('/assets/finger-prints-background.png'), url('/assets/crumpled-paper.jpg')",
      }}
    >
      <Image src={agataPhoto} alt="agata photo" className="w-[40%] max-w-md" />

      <Accordion />
    </div>
  )
}
