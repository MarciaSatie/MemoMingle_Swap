import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 class="text-3xl font-bold underline text-red-600">
    Hello world!
  </h1>
    <App />
  </StrictMode>,
)
