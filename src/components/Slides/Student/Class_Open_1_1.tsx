import { ButtonBack } from '@/components/ButtonBack'
import { ButtonNext } from '@/components/ButtonNext'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { GrDocumentPdf } from 'react-icons/gr'

import infographic from '@/assets/Infograficos/Infográfico Solicitar ações de aprendizagem.png'

export function Class_Open_1_1() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Open_1_1'

  return (
    <Container showSlide={showSlide}>
      <ButtonBack onClick={() => setCurrentSlide('Class_Open')} />
      <ButtonNext onClick={() => setCurrentSlide('Class_Open_1_2')} />

      <div className="flex flex-col items-center gap-6 my-28 px-6">
        <h2 className="text-center text-2xl font-bold">
          1. Solicitação de ação no Sapiens
        </h2>

        <a
          className="flex gap-2 items-center text-center text-lg bg-white text-gray-900 rounded-md py-2 px-4 hover:bg-gray-100"
          href="@/assets/Infograficos/Infográfico Solicitar ações de aprendizagem.pdf"
          download
        >
          <GrDocumentPdf size={20} />
          Baixar infográfico
        </a>

        <img src={infographic} alt="" className="w-full rounded-md" />
      </div>
    </Container>
  )
}
