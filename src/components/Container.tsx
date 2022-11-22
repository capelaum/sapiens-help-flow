import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  showSlide: boolean
}

export function Container({ children, showSlide }: ContainerProps) {
  const className = showSlide ? 'opacity-1 flex' : 'opacity-0 hidden'

  return (
    <div
      className={`${className} items-center gap-12 transition-all duration-200`}
    >
      {children}
    </div>
  )
}
