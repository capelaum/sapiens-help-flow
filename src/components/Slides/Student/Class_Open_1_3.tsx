import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { MdOutlineDangerous } from 'react-icons/md'

export function Class_Open_1_3() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Open_1_3'

  return (
    <Container showSlide={showSlide}>
      <ButtonBack onClick={() => setCurrentSlide('Class_Open_1_2')} />

      <Box>Gestor imediato validou</Box>

      <div className="flex flex-col gap-4">
        <Button onClick={() => setCurrentSlide('Class_Open_1_4')}>
          Curso Aceito
        </Button>
        <Box>
          <MdOutlineDangerous size={24} />
          Curso Rejeitado
        </Box>
      </div>
    </Container>
  )
}
