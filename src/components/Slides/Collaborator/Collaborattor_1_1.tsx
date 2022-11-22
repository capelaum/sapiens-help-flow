import { Box } from '@/components/Box'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { MdCheckCircle, MdOutlineDangerous } from 'react-icons/md'

export function Collaborator_1_1() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Collaborator_1_1'

  return (
    <>
      {showSlide && (
        <ButtonBack onClick={() => setCurrentSlide('Collaborator_Initial')} />
      )}
      <Container showSlide={showSlide}>
        <Box>Validação da UniBC</Box>

        <div className="flex flex-col gap-4">
          <Box>
            <MdOutlineDangerous size={24} />
            Rejeitado
          </Box>
          <Box>
            <MdCheckCircle size={20} />
            Ação no portfólio
          </Box>
        </div>
      </Container>
    </>
  )
}
