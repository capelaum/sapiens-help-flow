import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'

export function Student_Initial() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Student_Initial'

  return (
    <>
      {showSlide && (
        <ButtonBack onClick={() => setCurrentSlide('Slide_Initial')} />
      )}

      <Container showSlide={showSlide}>
        <Box className="bg-blue-700">Qual é o tipo do curso?</Box>

        <div className="flex flex-col gap-6">
          <Button onClick={() => setCurrentSlide('Class_Open')}>
            Turma Aberta
          </Button>
          <Button onClick={() => setCurrentSlide('Class_Closed')}>
            Turma Fechada
          </Button>
        </div>
      </Container>
    </>
  )
}
