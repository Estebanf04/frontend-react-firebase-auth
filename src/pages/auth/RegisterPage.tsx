import { ChangeEvent, FormEvent, useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { Link, Navigate, useNavigate } from "react-router-dom"
import ErrorMessage from "@/components/ErrorMessage"
import { formatFirebaseMessages } from "@/utils/firebase-error-message"

export default function RegisterPage() {

  const {
    registerUser,
    user: userAuthenticated, 
    loading
  } = useAuth()

  const [error, setError] = useState<string | undefined>('')

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmit = async(e: FormEvent<HTMLFormElement> ) => {
      e.preventDefault()
      setError('')
      
      try{
        await registerUser(user.email, user.password)
        navigate('/login')
      }
      catch(error){

        if(error instanceof Error){
          const formatMessage = formatFirebaseMessages(error.message)
          setError(formatMessage)
        }
        else{
          setError('Error desconocido')
        }
      }
  }

  if(loading) return (<h1>Cargando...</h1>)
  if(userAuthenticated) return <Navigate to={'/home'}/>

  return (
      <>
        { error && ( <ErrorMessage message={error}/> ) }
        
          <form 
          onSubmit={handleSubmit}
          className="bg-white flex flex-col w-[85%] md:w-[60%] 2xl:w-1/2 rounded-lg px-6 py-10 gap-4"
          >
              <h1 
              className="text-2xl text-center pb-3 font-semibold text-gray-900">
                Crear cuenta
              </h1>

              <div className="flex flex-col gap-2 pb-3">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    className="py-2.5 px-4 rounded-md placeholder:text-gray-600 bg-slate-100"
                    onChange={handleChange}
                  />

                  <input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña"
                    className="py-2.5 px-4 rounded-md placeholder:text-gray-600 bg-slate-100"
                    onChange={handleChange}
                  />
              </div>

              <div className="flex flex-col gap-2 pb-4">
                  <button 
                  className="bg-gray-900 py-2 rounded-md text-gray-100 font-medium text-lg hover:opacity-95 transition"
                  > 
                  Registrarme
                  </button>

                  <Link 
                  className="border border-gray-600 text-gray-900 py-2 text-md text-center hover:bg-gray-100 transition"
                  to={'/login'}>
                    Ya tengo una cuenta
                  </Link>
                    
              </div>
        </form>
    </>
  )
}
