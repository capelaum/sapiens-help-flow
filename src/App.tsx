import { Collaborator_Initial } from './components/Slides/Collaborator/Collaborator_Initial'
import { Collaborator_1_1 } from './components/Slides/Collaborator/Collaborattor_1_1'
import { Collaborator_2_1 } from './components/Slides/Collaborator/Collaborattor_2_1'
import { Slide_Initial } from './components/Slides/Slide_Initial'
import { Class_Closed } from './components/Slides/Student/Class_Closed'
import { Class_Closed_1_1 } from './components/Slides/Student/Class_Closed_1_1'
import { Class_Closed_2_1 } from './components/Slides/Student/Class_Closed_2_1'
import { Class_Open } from './components/Slides/Student/Class_Open'
import { Class_Open_1_1 } from './components/Slides/Student/Class_Open_1_1'
import { Class_Open_1_2 } from './components/Slides/Student/Class_Open_1_2'
import { Class_Open_1_3 } from './components/Slides/Student/Class_Open_1_3'
import { Class_Open_1_4 } from './components/Slides/Student/Class_Open_1_4'
import { Class_Open_2_1 } from './components/Slides/Student/Class_Open_2_1'
import { Student_Initial } from './components/Slides/Student/Student_Initial'
import { useFlow } from './contexts/FlowContext'

import bc_logo from '@/assets/bc_logo.svg'

export default function App() {
  const { resetFlow } = useFlow()

  return (
    <>
      <img
        src={bc_logo}
        alt=""
        className="absolute top-6 left-1/2 transform -translate-x-1/2"
      />

      <Slide_Initial />

      <Student_Initial />

      <Class_Open />
      <Class_Open_2_1 />
      <Class_Open_1_1 />
      <Class_Open_1_2 />
      <Class_Open_1_3 />
      <Class_Open_1_4 />

      <Class_Closed />
      <Class_Closed_1_1 />
      <Class_Closed_2_1 />

      <Collaborator_Initial />
      <Collaborator_1_1 />
      <Collaborator_2_1 />

      <button
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-md text-white rounded-xl hover:underline underline-offset-2"
        onClick={resetFlow}
      >
        Resetar
      </button>
    </>
  )
}
