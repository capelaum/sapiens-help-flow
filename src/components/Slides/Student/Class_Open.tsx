import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'

export function Class_Open() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Open'

  return (
    <Container showSlide={showSlide}>
      <ButtonBack onClick={() => setCurrentSlide('Student_Slide_1')} />

      <Box>Turma Aberta?</Box>

      <div className="flex flex-col gap-4">
        <Button onClick={() => setCurrentSlide('Class_Open_1_1')}>
          Solicitação de ação no Sapiens
        </Button>
        <Button onClick={() => setCurrentSlide('Class_Open_2_1')}>
          GAE + PE
        </Button>
      </div>
    </Container>
  )
}
