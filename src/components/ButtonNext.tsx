import { TbArrowNarrowRight } from 'react-icons/tb'

interface ButtonNextProps {
  onClick: () => void
}

export function ButtonNext({ onClick }: ButtonNextProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2
        text-md text-white
        rounded-md px-4 py-2
        absolute top-6 right-6
      "
    >
      Próximo
      <TbArrowNarrowRight size={20} />
    </button>
  )
}
