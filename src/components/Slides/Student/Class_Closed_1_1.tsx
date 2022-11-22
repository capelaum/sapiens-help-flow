import { Box } from '@/components/Box'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { TbArrowNarrowDown } from 'react-icons/tb'

export function Class_Closed_1_1() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Closed_1_1'

  return (
    <Container showSlide={showSlide}>
      <ButtonBack onClick={() => setCurrentSlide('Class_Closed')} />

      <div className="flex flex-col items-center gap-2 ">
        <Box>EAD + Trilhas (Moodle)</Box>
        <TbArrowNarrowDown size={20} />
        <Box>Inscrição Livre no Sapiens (Moodle)</Box>
        <TbArrowNarrowDown size={20} />
        <Box>Curso finalizado</Box>
        <TbArrowNarrowDown size={20} />
        <Box>Registrado</Box>
        <TbArrowNarrowDown size={20} />
        <Box>
          Ainda não vai automaticamente <br /> para o Currículo + Link-se 😓
        </Box>
      </div>
    </Container>
  )
}
