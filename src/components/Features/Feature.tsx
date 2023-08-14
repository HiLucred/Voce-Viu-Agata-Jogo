import Image from 'next/image'
import tape from '../../../public/assets/tape.png'

interface FeatureProps {
  title: string
  description: string
}

export function Feature({ title, description }: FeatureProps) {
  return (
    <div 
      className="bg-crumpled-paper h-28 w-4/5 px-8  flex flex-col items-center justify-center hover:scale-110 transition-all shadow-xl relative max-w-2xl sm:py-28 cursor-default"
    >
      <h2 className="text-md text-red-600 underline sm:text-3xl mb-4">{title}</h2>
      <p className="text-center text-xs sm:text-lg ">{description}</p>

      <div className="absolute -top-5 -left-5 sm:-left-10">
        <Image src={tape} alt="tape" className="w-16 sm:w-28" />
      </div>

      <div className="absolute -bottom-5 -right-5 sm:-right-10">
        <Image src={tape} alt="tape" className="w-16 sm:w-28" />
      </div>
    </div>
  )
}