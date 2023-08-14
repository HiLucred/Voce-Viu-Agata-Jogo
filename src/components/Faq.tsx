'use client'

import * as Accordion from '@radix-ui/react-accordion'
import Image from 'next/image'
import agataPhoto from '../../public/assets/agata-photo.png'

export function Faq() {
  return (
    <div 
      id="faq" 
      className='bg-cover bg-center py-16 sm:flex w-full h-full justify-center items-center gap-28' 
      style={{ backgroundImage: "url('/assets/finger-prints-background.png'), url('/assets/crumpled-paper.jpg')"}}
    >
      <Image src={agataPhoto} alt="agata photo" className='w-[40%] max-w-md' />

      <Accordion.Root type="single" defaultValue='item-1' collapsible className='p-4 flex flex-col gap-2'>
        <h2 className='text-5xl sm:text-7xl'>{'//'} FAQ</h2>

        <Accordion.Item value='item-1' className='max-w-2xl'>
          <Accordion.Trigger className='bg-black text-white p-2 data-[state=open]:text-red-400 w-full text-md lg:text-2xl lg:p-4 text-start'>+ Para quem é este jogo?</Accordion.Trigger>
          <Accordion.Content className='bg-white border border-black mt-2 p-2 text-center text-sm lg:text-2xl lg:p-4'>Para todos os fãs de mistério e investigação.</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value='item-2' className='max-w-2xl'>
          <Accordion.Trigger className='bg-black text-white p-3 data-[state=open]:text-red-400 w-full text-md lg:text-2xl lg:p-4 text-start'>
            + Qual a previsão para o lançamento?
          </Accordion.Trigger>
          <Accordion.Content className='bg-white border border-black mt-2 p-2 text-center text-sm lg:text-2xl lg:p-4'>
            A presvisão de lançamento está programada para o primeiro semestre de 2024.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value='item-3' className='max-w-2xl'>
          <Accordion.Trigger className='bg-black text-white p-2 data-[state=open]:text-red-400 w-full text-md lg:text-2xl lg:p-4 text-start'>
            + Onde acompanhar os próximos passos do desenvolvimento do jogo?
          </Accordion.Trigger>
          <Accordion.Content className='bg-white border border-black mt-2 p-2 text-center text-sm lg:text-2xl lg:p-4'>
            É simples! Basta seguir a nossa páginas nas redes sociais. Todas nossas redes são @VoceViuAgataJogo
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value='item-4' className='max-w-2xl'>
          <Accordion.Trigger className='bg-black text-white p-2 data-[state=open]:text-red-400 w-full text-md lg:text-2xl lg:p-4 text-start'>
            + Em que plataformas eu posso jogar?
          </Accordion.Trigger>
          <Accordion.Content className='bg-white border border-black mt-2 p-2 text-center text-sm lg:text-2xl lg:p-4'>
            PC, mac e Linux.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value='item-5' className='max-w-2xl'>
          <Accordion.Trigger className='bg-black text-white p-2 data-[state=open]:text-red-400 w-full text-md lg:text-2xl lg:p-4 text-start'>
            + Existe algum proposito maior com esta história?
          </Accordion.Trigger>
          <Accordion.Content className='bg-white border border-black mt-2 p-2 text-center text-sm lg:text-2xl lg:p-4'>
            Sim, além de oferecer uma experiência envolvente de jogo, &quot;Você viu
            Ágata? Um Mistério Inexplicável&quot; tem como proposta maior mergulhar os
            jogadores em uma narrativa cativante, desafiando-os a pensar
            estrategicamente, tomar decisões impactantes e explorar o mundo
            digital de Ágata. O jogo visa criar uma conexão emocional com os
            jogadores, envolvendo-os em uma trama intrigante e levando-os a
            refletir sobre temas como mistério, segredos e a natureza humana.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}