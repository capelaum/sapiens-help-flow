import { Box } from '@/components/Box'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { TbArrowNarrowRight } from 'react-icons/tb'

export function Collaborator_2_1() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Collaborator_2_1'

  return (
    <>
      {showSlide && (
        <ButtonBack onClick={() => setCurrentSlide('Collaborator_Initial')} />
      )}
      <Container showSlide={showSlide}>
        <Box>É Titular da ação</Box>

        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <Box>Edição</Box>
            <TbArrowNarrowRight size={20} />
            <Box>Validação UniBC</Box>
          </div>

          <div className="flex items-center gap-2">
            <Box>Quer ser colaborador da ação?</Box>
            <TbArrowNarrowRight size={20} />
            <Box>Plano de Aula</Box>
          </div>
        </div>
      </Container>
    </>
  )
}
