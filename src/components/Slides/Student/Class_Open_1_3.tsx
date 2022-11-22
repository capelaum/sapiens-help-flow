import { Box } from '@/components/Box'
import { ButtonBack } from '@/components/ButtonBack'
import { Container } from '@/components/Container'
import { useFlow } from '@/contexts/FlowContext'
import { MdCheckCircle, MdOutlineDangerous } from 'react-icons/md'
import { TbArrowNarrowDown } from 'react-icons/tb'

export function Class_Open_1_3() {
  const { currentSlide, setCurrentSlide } = useFlow()

  const showSlide = currentSlide === 'Class_Open_1_3'

  return (
    <>
      {showSlide && (
        <ButtonBack onClick={() => setCurrentSlide('Class_Open_1_2')} />
      )}

      <Container showSlide={showSlide}>
        <div className="flex flex-col items-center gap-10">
          <Box className="bg-violet-600">Gestor imediato validou</Box>

          <div className="flex items-start gap-4">
            <Box className="bg-red-600">
              <MdOutlineDangerous size={24} />
              Curso Rejeitado
            </Box>

            <div className="flex flex-col items-center gap-2 flex-wrap">
              <Box className="bg-green-600 text-white">Curso Aceito</Box>
              <TbArrowNarrowDown size={20} />
              <Box className="bg-green-600 text-white">Curso Finalizado</Box>
              <TbArrowNarrowDown size={20} />
              <Box className="bg-green-600 text-white">
                <MdCheckCircle size={20} />
                Currículo + Link-se
              </Box>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
