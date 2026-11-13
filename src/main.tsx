import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const mount = document.getElementById('kalyani-doodle-root')
if (!mount) throw new Error('Kalyani Foundation footer mount was not found.')

createRoot(mount).render(<StrictMode><App /></StrictMode>)
