import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'

export function Class_Open() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Open'

  return (
    <>
      {showSlide && (
        <ButtonBack onClick={() => setCurrentSlide('Student_Initial')} />
      )}

      <Container showSlide={showSlide}>
        <Box className="bg-violet-700">Turma Aberta</Box>

        <div className="flex flex-col gap-6">
          <Button onClick={() => setCurrentSlide('Class_Open_1_1')}>
            Solicitação de ação no Sapiens
          </Button>
          <Button onClick={() => setCurrentSlide('Class_Open_2_1')}>
            GAE + PE
          </Button>
        </div>
      </Container>
    </>
  )
}
