import { Feature } from "./Feature";

export function Features() {
  return (
    <div id="features" className="m-auto flex flex-col gap-12 items-center justify-center bg-white py-16">
      <Feature 
        title="Exploração digital intensa"
        description="Vasculhe o computador de Ágata, mergulhe em seus arquivos e diretórios para encontrar pistas cruciais."
       />

      <Feature 
        title="Quebra-cabeças desafiadores"
        description="Enfrente enigmas intrigantes ao longo do jogo, conectando informações dispersas para desvendar o mistério."
      />

      <Feature 
        title="Narrativa envolvente"
        description="Embarque em uma história cativante, cheia de reviravoltas e suspense, enquanto desvenda segredos ocultos."
      />
    </div>
  )
}
