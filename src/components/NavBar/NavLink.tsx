/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, animateScroll as scroll, scroller } from 'react-scroll'

interface NavLinkProps {
  to: 'home' | 'about' | 'features' | 'faq' | 'join-us' | 'contact'
  title: string
  onSelected: (state: boolean) => void
}

export function NavLink({ to, title, onSelected }: NavLinkProps) {
  return (
    <Link
      to={`${to}`}
      smooth={true}
      duration={800}
      onClick={() => onSelected(false)}
      className="text-white cursor-pointer transition-all hover:text-black lg:hover:text-red-400"
    >
      {title}
    </Link>
  )
}
