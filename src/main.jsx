import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeLocalProvider } from './context/ThemeLocalContext'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ThemeLocalProvider>
      <App />
    </ThemeLocalProvider>
  </React.StrictMode>
)
