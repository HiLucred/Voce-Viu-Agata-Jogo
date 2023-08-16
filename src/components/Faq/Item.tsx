import * as Accordion from '@radix-ui/react-accordion'

interface ItemProps {
  value: number
  trigger: string
  content: string
}

export function Item({ value, trigger, content, ...rest }: ItemProps) {
  return (
    <Accordion.Item value={`item-${value}`} className="max-w-2xl" {...rest}>
      <Accordion.Trigger className="bg-black text-white p-2 data-[state=open]:text-red-400 w-full text-md lg:text-xl lg:p-4 text-start">
        {trigger}
      </Accordion.Trigger>

      <Accordion.Content className="bg-white border border-black p-2 text-center text-sm lg:text-lg lg:p-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp transition-all">
        {content}
      </Accordion.Content>
    </Accordion.Item>
  )
}
