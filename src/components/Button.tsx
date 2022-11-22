import { ReactNode } from 'react'

interface BoxProps {
  children: ReactNode
  onClick?: () => void
}

export function Button({ children, onClick }: BoxProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center
        text-lg text-gray-900 bg-white gap-2
        rounded-md px-4 py-2 font-bold
        hover:bg-gray-100
      "
    >
      {children}
    </button>
  )
}
