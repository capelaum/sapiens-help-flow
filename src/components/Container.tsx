import { motion } from 'framer-motion'
import { ReactNode } from 'react'
interface ContainerProps {
  children: ReactNode
  showSlide: boolean
}

const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: '-100%' },
}

export function Container({ children, showSlide }: ContainerProps) {
  const className = showSlide ? 'flex' : 'hidden '

  return (
    <motion.div
      animate={showSlide ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      variants={variants}
      className={`${className} items-center gap-12 transition-all duration-200`}
    >
      {children}
    </motion.div>
  )
}
