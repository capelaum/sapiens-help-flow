import { motion } from 'framer-motion'
import { ReactNode } from 'react'
interface ContainerProps {
  children: ReactNode
  showSlide: boolean
}

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
}

export function Container({ children, showSlide }: ContainerProps) {
  const isVisible = showSlide ? 'flex' : 'hidden '

  return (
    <motion.div
      animate={showSlide ? 'visible' : 'hidden'}
      transition={{ duration: 0.1 }}
      variants={variants}
      className={`${isVisible} items-center gap-12 transition-all duration-200`}
    >
      {children}
    </motion.div>
  )
}
