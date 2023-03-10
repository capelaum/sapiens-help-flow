import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'

export function Collaborator_Initial() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Collaborator_Initial'

  return (
    <>
      {showSlide && (
        <ButtonBack onClick={() => setCurrentSlide('Slide_Initial')} />
      )}

      <Container showSlide={showSlide}>
        <Box className="bg-teal-700">Sapiens</Box>

        <div className="flex flex-col gap-4">
          <Button onClick={() => setCurrentSlide('Collaborator_1_1')}>
            Nova Ação? <br />
            (Proposta de ação educacional)
          </Button>
          <Button onClick={() => setCurrentSlide('Collaborator_2_1')}>
            Tem no Portfolio
          </Button>
        </div>
      </Container>
    </>
  )
}
