import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'
import ToastContainer from './components/ui/ToastContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <ToastProvider>
            <App />
            <ToastContainer />
          </ToastProvider>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
