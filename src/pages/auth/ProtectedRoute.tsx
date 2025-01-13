import { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode
}

export default function ProtectedRoute({children} : ProtectedRouteProps) {
  
  const {user, loading} = useAuth()
  
  if(loading) return (<p>Cargando...</p>)
  if(!user) return <Navigate to={'/login'}/>

  return (
    <>
      {children}
    </>
  )
}
