import { Link, Navigate } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import BentoTech from "@/components/BentoTech"
import Footer from "@/components/Footer"

export default function HomePage() {

  const {user, loading} = useAuth()

  if(loading) return (<p>Cargando...</p>)
  if(user) return <Navigate to={'/home'}/>

  return (
    <>
        <header className="bg-gray-900 p-5 font-primary">
            <nav className="flex gap-6 px-4 font-medium max-w-7xl mx-auto justify-center text-gray-100">
                <Link 
                to={'/login'}
                >
                Entrar
                </Link>

                <Link 
                to={'/register'}>
                Crear cuenta
                </Link>
            </nav>
        </header>

        <main className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-3 py-10 text-center">
                <p className="bg-gray-900 max-w-fit mx-auto px-5 py-1 rounded-full text-gray-100 shadow-xl font-medium font-primary">
                  FREE
                </p>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                  Administra a tu plantilla <br /> 
                  <span className="font-bold">
                    de forma eficaz
                  </span>
                </h1>

                <p className="text-lg pt-3 mb-5 font-medium text-gray-700 font-primary">
                  Gestiona tu plantilla de empleados de una manera muy sencilla con nosotros.
                </p>

                <Link 
                to={'/login'} 
                className="bg-gray-900 px-5 py-2 text-gray-100 rounded-lg font-medium hover:opacity-95 transition text-lg font-primary">
                Comenzar ahora
                </Link>
            </div>

            <div className="p-10">
              <BentoTech/>
            </div>
        </main>
        <Footer/>
    </>
  )
}
