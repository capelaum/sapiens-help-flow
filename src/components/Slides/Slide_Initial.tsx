import mat_thinking from '@/assets/man-thinking.svg'
import { useFlow } from '@/contexts/FlowContext'
import { Button } from '../Button'
import { Container } from '../Container'

export function Slide_Initial() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Slide_Initial'

  return (
    <Container showSlide={showSlide}>
      <img src={mat_thinking} alt="" />

      <div className="flex flex-col gap-4">
        <Button onClick={() => setCurrentSlide('Student_Slide_1')}>
          É Aluno?
        </Button>
        <Button>É Colaborador?</Button>
      </div>
    </Container>
  )
}
