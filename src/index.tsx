import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProvider from '@/provider/AppProvider/index'
import './index.css'

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
)
