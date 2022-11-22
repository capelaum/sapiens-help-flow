import { TbArrowBack } from 'react-icons/tb'

interface ButtonBackProps {
  onClick: () => void
}

export function ButtonBack({ onClick }: ButtonBackProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2
        text-md text-white
        rounded-md px-4 py-2
        absolute top-6 left-6
      "
    >
      <TbArrowBack size={20} />
      Voltar
    </button>
  )
}
