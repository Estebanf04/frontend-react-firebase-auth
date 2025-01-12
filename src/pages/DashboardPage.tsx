import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { MdLogout } from "react-icons/md";

export default function DashboardPage() {

  const {user, logout, loading} = useAuth()

  const profileImage = () => {
    if(user?.photoURL && user.photoURL !== ''){
      return user.photoURL
    } else {
      return './avatarDefecto.png'
    }
  }

  const [photoURL, setPhotoURL] = useState(profileImage()) // avatar por defecto

  const handleLogout = async() => {
    try{
      await logout()
      setPhotoURL('')
    } 
    catch(error){
      console.log(error)
    }
  }

  if(loading) return <h1>Cargando....</h1>
  
  return (
    <>
      <header className="bg-gray-900 py-4 px-5 md:px-12 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img src={photoURL} width={35} className="rounded-full"/>
            <p className="text-gray-100 font-primary">{user?.displayName || user?.email}</p>
          </div>

          <button 
          className="text-gray-100 text-xl"
          onClick={handleLogout}>
            <MdLogout/>
          </button>

      </header>
    </>
  )
}
