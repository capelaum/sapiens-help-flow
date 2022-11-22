import { ReactNode } from 'react'

interface BoxProps {
  children: ReactNode
  className?: string
}

export function Box({ children, className }: BoxProps) {
  return (
    <div
      className={`
        ${className}
        flex items-center justify-center gap-2
        text-lg font-bold text-center rounded-full px-4 py-2
      `}
    >
      {children}
    </div>
  )
}
