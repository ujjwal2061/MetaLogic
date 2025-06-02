
import { createRoot } from 'react-dom/client'
import './index.css'
import {HeroUIProvider} from '@heroui/react'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')!).render(
 
  <BrowserRouter>
   <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </BrowserRouter>
 
)
