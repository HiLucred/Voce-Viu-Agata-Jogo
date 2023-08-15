import Image from 'next/image'
import notbook from '../../public/assets/notbook.png'

export function About() {
  return (
    <div id="about" className="bg-black pt-24 pb-24 w-full">
      <div className="flex flex-col items-center justify-center gap-20 px-8 sm:flex-row">
        <div className="text-center bg-finger-prints-bg bg-cover bg-no-repeat bg-bottom max-w-2xl cursor-default">
          <h2 className="text-zinc-100 text-xl sm:text-4xl">
            VOCÊ ACHOU O COMPUTADOR DA<br></br>{' '}
            <span className="text-red-400">GAROTA DESAPARECIDA.</span>
            <br></br>
            VASCULHE ENTRE OS DIRETÓRIOS E DESCUBRA <b>SUA HISTÓRIA.</b>
          </h2>

          <div className="border-white mt-4 py-4 border-t-2 border-b-2">
            <p className="text-white text-sm sm:text-xl">
              Adentre o mundo desconhecido do desaparecimento de Ágata. Explore
              seu computador, desvenda segredos ocultos e mergulhe em um enigma
              envolvente.
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative z-10">
            <Image src={notbook} alt="" />
          </div>

          <div className="absolute z-0 top-[10%] w-[73%]">
            <a href="https://gyazo.com/5456d0261a61851bd0e45b7a7a202e4f">
              <video muted autoPlay loop>
                <source
                  src="https://i.gyazo.com/5456d0261a61851bd0e45b7a7a202e4f.mp4"
                  type="video/mp4"
                />
              </video>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
