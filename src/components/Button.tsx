import { ComponentProps, ElementType } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  text?: string
  icon: ElementType
}

export function Button({ text, icon: Icon, ...rest }: ButtonProps) {
  return (
    <button
      className="group bg-black p-4 flex items-center justify-center gap-4 border border-white hover:border-red-400 shadow-sm transition-all"
      {...rest}
    >
      {text && (
        <span className="text-white group-hover:text-red-400">{text}</span>
      )}
      <Icon className="text-white w-5 h-5 group-hover:text-red-400" />
    </button>
  )
}
