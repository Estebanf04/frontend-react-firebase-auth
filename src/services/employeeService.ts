import { Employee, NewEmployeeData } from "@/interfaces/employee"
import axios from "axios"

export const getMyEmployeesService = async(userId: string | undefined) => {
    const {data} = await axios.get(`https://estebanfandos-mysql-node.vercel.app/api/employees/${userId}/myemployees`)
    if(data) return data['data']
}

export const getEmployeeByIdService = async(employeeId: Employee['id']) => {
    const {data} = await axios.get(`https://estebanfandos-mysql-node.vercel.app/api/employees/${employeeId}`)
    if(data) return data['data']
}

export const createNewEmployeeService = async(dataForm: NewEmployeeData, userId: string | undefined) => {
    const {data} = await axios.post('https://estebanfandos-mysql-node.vercel.app/api/employees', {
        name: dataForm.name,
        surname: dataForm.surname,
        email: dataForm.email,
        phone: dataForm.phone,
        job: dataForm.job,
        nif: dataForm.nif,
        seguridadsocial: dataForm.seguridadsocial,
        salary: dataForm.salary,
        user_id: userId
    })
    if(data) return data['data']
}

export const deleteAnEmployeeService = async(employeeId: Employee['id']) => {
    await axios.delete(`https://estebanfandos-mysql-node.vercel.app/api/employees/${employeeId}`)
}

export const editAnEmployeeService = async(dataForm: NewEmployeeData, employeeId: Employee['id'], userId: string | undefined) => {
    const {data} = await axios.patch(`https://estebanfandos-mysql-node.vercel.app/api/employees/${employeeId}`, {
        name: dataForm.name,
        surname: dataForm.surname,
        email: dataForm.email,
        phone: dataForm.phone,
        job: dataForm.job,
        nif: dataForm.nif,
        seguridadsocial: dataForm.seguridadsocial,
        salary: dataForm.salary,
        user_id: userId
    })
    if(data.status) return data
}