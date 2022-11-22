import { ReactNode } from 'react'

interface BoxProps {
  children: ReactNode
}

export function Box({ children }: BoxProps) {
  return (
    <div
      className="
        flex items-center justify-center gap-2
        text-lg text-white border border-white
        rounded-full px-4 py-2 font-bold text-center
      "
    >
      {children}
    </div>
  )
}
