import { useContext } from "react";
import { authContext } from "@/context/authContext";

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context){
        throw new Error('useAuth must be used whitin an AuthProvider')
    }
    return context
}