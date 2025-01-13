import { ChangeEvent, FormEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ResetPasswordMessage from "@/components/ResetPasswordMessage";
import { useAuth } from "@/hooks/useAuth";
import ErrorMessage from "@/components/ErrorMessage";
import { formatFirebaseMessages } from "@/utils/firebase-error-message";

export default function ResetPassword() {

    const [email, setEmail] = useState('')

    const [resetPasswordMessage, setResetPasswordMessage] = useState(false)

    const [error, setError] = useState<string | undefined>('')

    const {
      resetPassword, 
      user: userAuthenticated
    } = useAuth()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
    
        if(!email) return setError('Ingrese su email para restablecer la contraseña')
    
        try{
            await resetPassword(email)
            setResetPasswordMessage(true)
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

      if(userAuthenticated) return <Navigate to={'/home'}/>

    return (
      <>
          { error && ( <ErrorMessage message={error}/> ) }
          { resetPasswordMessage && ( <ResetPasswordMessage message={'Se ha enviado un email de verificación a tu correo electronico.'}/> ) }
          
          <form 
            onSubmit={handleSubmit}
            className="bg-white flex flex-col w-[85%] md:w-[60%] 2xl:w-1/2 rounded-lg px-6 py-10 gap-4"
          >
              <h1 
              className="text-2xl text-center pb-3 font-semibold text-gray-900">
                  Restablecer contraseña
              </h1>

              <input 
              type="email" 
              name="email" 
              placeholder="Email"
              className="py-2.5 px-4 rounded-md placeholder:text-gray-600 bg-slate-100 mb-3"
              onChange={handleChange}
              />

              <div 
              className="pb-4 flex flex-col gap-2"
              >
                  <button 
                  className="bg-gray-900 py-2 rounded-md text-gray-100 font-medium text-lg hover:opacity-95 transition"
                  > 
                  Verificar
                  </button>

                  <Link
                  className="border border-gray-600 text-gray-900 py-2 text-md text-center hover:bg-gray-100 transition"
                  to={'/login'}>
                  Regresar
                  </Link>        
              </div>
          </form>
      </>
    )
}
