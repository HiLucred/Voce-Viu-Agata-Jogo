import { NotbookGif } from './NotbookGif'
import { Text } from './Text'

export function About() {
  return (
    <div id="about" className="bg-black pt-24 pb-24 w-full">
      <div className="flex flex-col items-center justify-center gap-20 px-8 sm:flex-row">
        <Text />

        <NotbookGif />
      </div>
    </div>
  )
}
