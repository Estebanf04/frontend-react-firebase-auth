import { useAuth } from "@/hooks/useAuth"
import { Employee, NewEmployeeData } from "@/interfaces/employee"
import axios from "axios"
import { ReactNode, createContext, useState } from "react"

type EmployeeContextProps = {
    employees: Employee[],
    getMyEmployees: () => Promise<void>,
    deleteAnEmployee: (id: Employee["id"]) => Promise<void>,
    createNewEmployee: (dataForm: NewEmployeeData) => Promise<Employee>
}

type EmployeeProviderProps = {
    children: ReactNode
}

export const employeeContext = createContext<EmployeeContextProps>(null!)

export const EmployeeProvider = ({children}: EmployeeProviderProps) => {

    const {user} = useAuth()
    const [employees, setEmployees] = useState<Employee[]>([])
    
    const getMyEmployees = async() => {
        const {data} = await axios.get(`https://estebanfandos-mysql-node.vercel.app/api/employees/${user?.uid}/myemployees`)
        const listEmployees : Employee[] = data['data']
        setEmployees(listEmployees)
    }

    const createNewEmployee = async(dataForm: NewEmployeeData) => {
        const {data} = await axios.post('https://estebanfandos-mysql-node.vercel.app/api/employees', {
            name: dataForm.name,
            surname: dataForm.surname,
            email: dataForm.email,
            phone: dataForm.phone,
            job: dataForm.job,
            nif: dataForm.nif,
            seguridadsocial: dataForm.seguridadsocial,
            salary: dataForm.salary,
            user_id: user?.uid
        })
        if(data.status) return data

    }

    const deleteAnEmployee = async(id: Employee['id']) => {
        await axios.delete(`https://estebanfandos-mysql-node.vercel.app/api/employees/${id}`)
        const newEmployees = employees.filter(employees => employees.id !== id)
        setEmployees(newEmployees)
    }

    return (
        <employeeContext.Provider value={{employees, getMyEmployees, deleteAnEmployee, createNewEmployee}}>
            {children}
        </employeeContext.Provider>
    )
}