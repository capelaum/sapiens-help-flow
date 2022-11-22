import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'

export function Class_Closed() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Closed'

  return (
    <Container showSlide={showSlide}>
      <ButtonBack onClick={() => setCurrentSlide('Student_Initial')} />

      <Box>Turma Fechada</Box>

      <div className="flex flex-col gap-4">
        <Button onClick={() => setCurrentSlide('Class_Closed_1_1')}>
          EAD + Trilhas (Moodle)
        </Button>
        <Button onClick={() => setCurrentSlide('Class_Closed_2_1')}>
          GAE + PAE (Manual ADT)
        </Button>
      </div>
    </Container>
  )
}
