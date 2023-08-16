import * as AccordionRadix from '@radix-ui/react-accordion'
import { Item } from './Item'

export function Accordion() {
  return (
    <AccordionRadix.Root
      type="single"
      defaultValue="item-0"
      collapsible
      className="p-4 flex flex-col gap-2"
    >
      <h2 className="text-5xl sm:text-7xl f">{'//'} FAQ</h2>

      <Item
        value={0}
        trigger="+ Para quem é este jogo?"
        content="Para todos os fãs de mistério e investigação."
      />

      <Item
        value={1}
        trigger="+ Qual a previsão para o lançamento?"
        content="A presvisão de lançamento está programada para o primeiro semestre
        de 2024."
      />

      <Item
        value={2}
        trigger="+ Onde acompanhar os próximos passos do desenvolvimento do jogo?"
        content="É simples! Basta seguir a nossa páginas nas redes sociais. Todas
        nossas redes são @VoceViuAgataJogo"
      />

      <Item
        value={3}
        trigger="+ Em que plataformas eu posso jogar?"
        content="PC, mac e Linux."
      />

      <Item
        value={4}
        trigger="+ Existe algum proposito maior com esta história?"
        content="O jogo visa criar uma conexão emocional com os jogadores,
        envolvendo-os em uma trama intrigante e levando-os a refletir sobre
        temas como mistério, segredos e a natureza humana."
      />
    </AccordionRadix.Root>
  )
}
