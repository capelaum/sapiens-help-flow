import { Box } from '@/components/Box'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { MdCheckCircle } from 'react-icons/md'
import { TbArrowNarrowDown } from 'react-icons/tb'

export function Class_Closed_2_1() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Closed_2_1'

  return (
    <>
      {showSlide && (
        <ButtonBack onClick={() => setCurrentSlide('Class_Closed')} />
      )}
      <Container showSlide={showSlide}>
        <div className="flex flex-col items-center gap-2 ">
          <Box className="bg-fuchsia-600">GAE + PAE (Manual ADT)</Box>
          <TbArrowNarrowDown size={20} />
          <Box className="bg-fuchsia-600">
            Inscrição no Sapiens (Link na divulgação)
          </Box>
          <TbArrowNarrowDown size={20} />
          <Box className="bg-fuchsia-600">Curso finalizado</Box>
          <TbArrowNarrowDown size={20} />
          <Box className="bg-fuchsia-600">GAE Finalizado</Box>
          <TbArrowNarrowDown size={20} />
          <Box className="bg-fuchsia-600">
            <MdCheckCircle size={20} />
            Currículo + Link-se
          </Box>
        </div>
      </Container>
    </>
  )
}
