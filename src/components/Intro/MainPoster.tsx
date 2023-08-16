import Image from 'next/image'
import poster from '../../../public/assets/poster.png'
import itchio from '../../../public/assets/itchio-button.svg'

export function MainPoster() {
  return (
    <div className="relative max-w-xl">
      <Image
        src={poster}
        alt="Poster de desaparecida de Ágata"
        style={{ filter: 'drop-shadow(0 5px 20px rgba(0, 0, 0, 80%))' }}
      />

      <button className="absolute bottom-[10%] left-[30%] w-[40%] hover:scale-[130%] transition-all">
        <Image src={itchio} alt="itch.io button" />
      </button>
    </div>
  )
}
