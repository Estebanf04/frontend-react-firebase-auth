import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router.tsx'
import { AuthProvider } from '@/context/authContext.tsx'
import { EmployeeProvider } from '@/context/employeeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
        <EmployeeProvider>
            <AppRouter />
        </EmployeeProvider>
    </AuthProvider>
  </StrictMode>,
)
