import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UppyUpload from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UppyUpload />
  </StrictMode>,
)
