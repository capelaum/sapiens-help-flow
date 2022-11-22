import { Box } from '@/components/Box'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { MdCheckCircle } from 'react-icons/md'
import { TbArrowNarrowRight } from 'react-icons/tb'

export function Class_Open_1_4() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Open_1_4'

  return (
    <>
      {showSlide && (
        <ButtonBack onClick={() => setCurrentSlide('Class_Open_1_3')} />
      )}

      <Container showSlide={showSlide}>
        <div className="flex items-center gap-2">
          <Box>Curso Aceito</Box>
          <TbArrowNarrowRight size={20} />
          <Box>Curso Finalizado</Box>
          <TbArrowNarrowRight size={20} />
          <Box>
            <MdCheckCircle size={20} />
            Currículo + Link-se
          </Box>
        </div>
      </Container>
    </>
  )
}
