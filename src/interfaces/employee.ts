
export interface Employee {
    id: number,
    name: string,
    surname: string,
    email: string,
    phone: string,
    job: string,
    nif: string,
    seguridadsocial: string,
    salary: number,
    user_id: string
}

export type NewEmployeeData = Omit<Employee, 'id'>