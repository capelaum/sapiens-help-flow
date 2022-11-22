import { ReactNode } from 'react'

interface BoxProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ children, onClick, className }: BoxProps) {
  return (
    <button
      onClick={onClick}
      className={`
        ${className}
        flex items-center justify-start
        text-lg text-gray-900 bg-white gap-2
        rounded-xl px-4 py-2 font-bold
        hover:bg-gray-100
      `}
    >
      {children}
    </button>
  )
}
