import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QuestionProvider } from './Context/QuestionContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuestionProvider>
    <App />
    </QuestionProvider>
  </React.StrictMode>,
)
