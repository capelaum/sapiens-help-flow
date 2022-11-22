import { Box } from '@/components/Box'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { MdCheckCircle } from 'react-icons/md'
import { TbArrowNarrowDown } from 'react-icons/tb'

export function Class_Open_2_1() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Open_2_1'

  return (
    <>
      {showSlide && (
        <ButtonBack onClick={() => setCurrentSlide('Class_Open')} />
      )}

      <Container showSlide={showSlide}>
        <div className="flex flex-col items-center gap-2 ">
          <Box className="bg-orange-600">GAE + PE</Box>
          <TbArrowNarrowDown size={20} />
          <Box className="bg-orange-600">Curso contratado</Box>
          <TbArrowNarrowDown size={20} />
          <Box className="bg-orange-600">GAE finalizado</Box>
          <TbArrowNarrowDown size={20} />
          <Box className="bg-green-600">
            <MdCheckCircle size={20} />
            Currículo + Link-se
          </Box>
        </div>
      </Container>
    </>
  )
}
