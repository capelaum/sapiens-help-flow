import { createContext, ReactNode, useContext, useState } from 'react'

interface FlowProviderProps {
  children: ReactNode
}

interface FlowContextData {
  currentSlide: string
  setCurrentSlide: (slide: string) => void
  resetFlow: () => void
}

const FlowContext = createContext<FlowContextData>({} as FlowContextData)

export function FlowProvider({ children }: FlowProviderProps) {
  const [currentSlide, setCurrentSlide] = useState('Slide_Initial')

  const resetFlow = () => setCurrentSlide('Slide_Initial')

  return (
    <FlowContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
        resetFlow,
      }}
    >
      {children}
    </FlowContext.Provider>
  )
}

export const useFlow = (): FlowContextData => useContext(FlowContext)
