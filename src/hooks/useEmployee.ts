import { useContext } from "react";
import {employeeContext} from '@/context/employeeContext'

export const useEmployee = () => {
    const context = useContext(employeeContext)
    if(!context){
        throw new Error('useAuth must be used whitin an AuthProvider')
    }
    return context
}