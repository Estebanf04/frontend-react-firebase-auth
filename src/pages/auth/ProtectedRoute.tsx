import { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode
}

export default function ProtectedRoute({children} : ProtectedRouteProps) {
  
  const {user, loading} = useAuth()
  
  if(loading) return <h1>Cargando...</h1>
  if(!user) return <Navigate to={'/login'}/>

  return (
    <>
      {children}
    </>
  )
}
