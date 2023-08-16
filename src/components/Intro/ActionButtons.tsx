import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../Button'
import { TeaserModal } from './TeaseModal'
import { NewsLetterModal } from './NewsLetterModal'
import { Play, Plus } from 'lucide-react'

export function ActionButtons() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button text="CONFIRA O TRAILER" icon={Play} />
        </Dialog.Trigger>

        <TeaserModal />
      </Dialog.Root>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button text="NEWSLETTER" icon={Plus} />
        </Dialog.Trigger>

        <NewsLetterModal />
      </Dialog.Root>
    </div>
  )
}
