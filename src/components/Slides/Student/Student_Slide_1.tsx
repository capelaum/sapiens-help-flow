import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'

export function Student_Slide_1() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Student_Slide_1'

  return (
    <Container showSlide={showSlide}>
      <Box>Qual é o tipo do curso?</Box>

      <ButtonBack onClick={() => setCurrentSlide('Slide_Initial')} />

      <div className="flex flex-col gap-4">
        <Button onClick={() => setCurrentSlide('Class_Open')}>
          Turma Aberta?
        </Button>
        <Button onClick={() => setCurrentSlide('Class_Closed')}>
          Turma Fechada?
        </Button>
      </div>
    </Container>
  )
}
