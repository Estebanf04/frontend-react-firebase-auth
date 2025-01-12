import { createContext, ReactNode, useEffect, useState } from "react"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    User,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    UserCredential,
    sendPasswordResetEmail
} from "firebase/auth"
import {auth} from '../firebaseCredentials'

type AuthContextProps = {
    user: User | null,
    loading: boolean,
    registerUser: (email : string, password : string) => void,
    loginUser: (email : string, password : string) => void,
    logout: () => void,
    loginWithGoogle: () => Promise<UserCredential>,
    resetPassword: (email: string) => Promise<void>
}

type AuthProviderProps = {
    children: ReactNode
}

export const authContext = createContext<AuthContextProps>(null!)

// ----

export const AuthProvider = ({children} : AuthProviderProps) => {

    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    const registerUser = async(email : string, password : string) => {
       await createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = async(email: string, password : string) => {
        await signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = async(email : string) => {
        await sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])


    return (
        <authContext.Provider value={{registerUser, loginUser, user, logout, loading, loginWithGoogle, resetPassword}}>
            {children}
        </authContext.Provider>
    )
}
