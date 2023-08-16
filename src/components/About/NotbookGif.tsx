import Image from 'next/image'
import notbookImage from '../../../public/assets/notbook.png'

export function NotbookGif() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative z-10">
        <Image src={notbookImage} alt="" />
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
  )
}
