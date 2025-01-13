import { useAuth } from "@/hooks/useAuth"
import { Employee, NewEmployeeData } from "@/interfaces/employee"
import { 
    createNewEmployeeService, 
    deleteAnEmployeeService, 
    editAnEmployeeService, 
    getEmployeeByIdService, 
    getMyEmployeesService 
} from "@/services/employeeService"
import { ReactNode, createContext, useState } from "react"

type EmployeeContextProps = {
    employees: Employee[],
    employeeDetail: Employee,
    getMyEmployees: () => Promise<void>,
    deleteAnEmployee: (id: Employee["id"]) => Promise<void>,
    createNewEmployee: (dataForm: NewEmployeeData) => Promise<Employee>,
    getEmployeeById: (id: Employee["id"]) => Promise<void>,
    resetValuesEmployeeDetails: () => void,
    editAnEmployee: (dataForm: NewEmployeeData, id: Employee["id"]) => Promise<Employee>,
    resetValuesEmployees: () => void
}

type EmployeeProviderProps = {
    children: ReactNode
}

export const employeeContext = createContext<EmployeeContextProps>(null!)

export const EmployeeProvider = ({children}: EmployeeProviderProps) => {

    const {user} = useAuth()
    const [employees, setEmployees] = useState<Employee[]>([])
    const [employeeDetail, setEmployeeDetail] = useState<Employee>({
        id: 0,
        name: '',
        surname: '',
        email: '',
        phone: '',
        job: '',
        nif: '',
        seguridadsocial: '',
        salary: '',
        user_id: ''
    })
    
    const getMyEmployees = async() => {
        const data : Employee[] = await getMyEmployeesService(user?.uid)
        setEmployees(data)
    }

    const getEmployeeById = async(id: Employee['id']) => {
        const data : Employee = await getEmployeeByIdService(id)
        setEmployeeDetail(data)
    }

    const createNewEmployee = async(dataForm: NewEmployeeData) => {
        const data : Employee = await createNewEmployeeService(dataForm, user?.uid)
        return data
    }

    const deleteAnEmployee = async(id: Employee['id']) => {
        await deleteAnEmployeeService(id)
        const newEmployees = employees.filter(employees => employees.id !== id)
        setEmployees(newEmployees)
    }

    const editAnEmployee = async(dataForm: NewEmployeeData, id: Employee['id']) => {
        const data : Employee = await editAnEmployeeService(dataForm, id, user?.uid)
        return data
    }

    const resetValuesEmployeeDetails = () => {
        setEmployeeDetail({
            id: 0,
            name: '',
            surname: '',
            email: '',
            phone: '',
            job: '',
            nif: '',
            seguridadsocial: '',
            salary: '',
            user_id: ''
        })
    }

    const resetValuesEmployees = () => {
        setEmployees([])
    }

    return (
        <employeeContext.Provider value={{
            employees, 
            getMyEmployees, 
            deleteAnEmployee, 
            createNewEmployee, 
            getEmployeeById, 
            employeeDetail, 
            resetValuesEmployeeDetails,
            editAnEmployee,
            resetValuesEmployees
        }}>
            {children}
        </employeeContext.Provider>
    )
}