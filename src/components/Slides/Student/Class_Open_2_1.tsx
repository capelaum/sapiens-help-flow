import { Box } from '@/components/Box'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { MdCheckCircle } from 'react-icons/md'
import { TbArrowNarrowRight } from 'react-icons/tb'

export function Class_Open_2_1() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Open_2_1'

  return (
    <Container showSlide={showSlide}>
      <ButtonBack onClick={() => setCurrentSlide('Class_Open')} />

      <div className="flex items-center gap-2 ">
        <Box>GAE + PE</Box>
        <TbArrowNarrowRight size={20} />
        <Box>Curso contratado</Box>
        <TbArrowNarrowRight size={20} />
        <Box>GAE finalizado</Box>
        <TbArrowNarrowRight size={20} />
        <Box>
          <MdCheckCircle size={20} />
          Currículo + Link-se
        </Box>
      </div>
    </Container>
  )
}
