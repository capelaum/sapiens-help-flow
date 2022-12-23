import { Box } from '@/components/Box'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { MdCheckCircle, MdOutlineDangerous } from 'react-icons/md'
import { TbArrowNarrowDown } from 'react-icons/tb'

export function Collaborator_2_1() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Collaborator_2_1'

  return (
    <>
      {showSlide && (
        <ButtonBack onClick={() => setCurrentSlide('Collaborator_Initial')} />
      )}
      <Container showSlide={showSlide}>
        <div className="flex flex-col items-center gap-10">
          <Box className="bg-purple-600">É titular da ação?</Box>

          <div className="flex">
            <div className="flex flex-col items-center gap-2">
              <Box className="bg-green-600">
                <MdCheckCircle size={20} />
                Sim
              </Box>
              <TbArrowNarrowDown size={20} />
              <Box className="bg-orange-600">Edição</Box>
              <TbArrowNarrowDown size={20} />
              <Box className="bg-orange-600">Validação UniBC</Box>
              <TbArrowNarrowDown size={20} />

              <div className="flex gap-4">
                <Box className="bg-red-600">
                  <MdOutlineDangerous size={24} />
                  Rejeitado
                </Box>
                <Box className="bg-green-600">
                  <MdCheckCircle size={20} />
                  Ação no portfólio
                </Box>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Box className="bg-red-600">
                <MdOutlineDangerous size={24} />
                Não
              </Box>
              <TbArrowNarrowDown size={20} />
              <Box className="bg-sky-600">Quer ser colaborador da ação?</Box>
              <TbArrowNarrowDown size={20} />
              <Box className="bg-sky-600">Elaborar plano de Aula</Box>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
