import { Slide_Initial } from './components/Slides/Slide_Initial'
import { Class_Closed } from './components/Slides/Student/Class_Closed'
import { Class_Closed_1_1 } from './components/Slides/Student/Class_Closed_1_1'
import { Class_Open } from './components/Slides/Student/Class_Open'
import { Class_Open_1_1 } from './components/Slides/Student/Class_Open_1_1'
import { Class_Open_1_2 } from './components/Slides/Student/Class_Open_1_2'
import { Class_Open_1_3 } from './components/Slides/Student/Class_Open_1_3'
import { Class_Open_1_4 } from './components/Slides/Student/Class_Open_1_4'
import { Class_Open_2_1 } from './components/Slides/Student/Class_Open_2_1'
import { Student_Slide_1 } from './components/Slides/Student/Student_Slide_1'

export default function App() {
  return (
    <>
      <Slide_Initial />
      <Student_Slide_1 />

      <Class_Open />
      <Class_Open_2_1 />
      <Class_Open_1_1 />
      <Class_Open_1_2 />
      <Class_Open_1_3 />
      <Class_Open_1_4 />

      <Class_Closed />
      <Class_Closed_1_1 />
    </>
  )
}
