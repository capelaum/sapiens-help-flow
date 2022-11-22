import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@/styles/global.css'
import { FlowProvider } from './contexts/FlowContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FlowProvider>
      <App />
    </FlowProvider>
  </React.StrictMode>
)
