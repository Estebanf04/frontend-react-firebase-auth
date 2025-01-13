import { useAuth } from "@/hooks/useAuth"
import { useEmployee } from "@/hooks/useEmployee"
import { useState } from "react"
import { MdLogout } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Header() {

  const {
    user, 
    logout
  } = useAuth()

  const {resetValuesEmployees} = useEmployee()

  const profileImage = () => {
      if(user?.photoURL && user.photoURL !== ''){
        return user.photoURL
      } 
      else {
        return 'https://myemployees-estebanfandos.vercel.app/avatarDefecto.png'
      }
  }

  const [photoURL, setPhotoURL] = useState(profileImage()) 

  const handleLogout = async() => {
      await logout()
      setPhotoURL('')
      resetValuesEmployees()
  }
    

  return (
          <header className="bg-gray-900 py-4 px-5 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    {
                      photoURL && (
                        <img 
                        src={photoURL} 
                        width={35} 
                        className="rounded-full"
                        />
                      )
                    }
                    <Link 
                    to={'/home'} 
                    className="text-gray-100 font-primary"
                    >
                    {user?.displayName || user?.email}
                    </Link>
                </div>
            
                <button 
                className="text-gray-100 text-xl"
                onClick={handleLogout}>
                <MdLogout/>
                </button>
          </header>
    )
}
