import { useEmployee } from "@/hooks/useEmployee";
import CardEmployee from "./CardEmployee";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function EmployeesList() {

  const {
    employees,
    getMyEmployees, 
    resetValuesEmployeeDetails
  } = useEmployee()

  useEffect(() => {
     resetValuesEmployeeDetails()
     getMyEmployees()
  }, [])

  const employeesIsEmpty = employees.length >= 1 ? true : false 


  return (
      <section className="max-w-[1450px] mx-auto p-6 mt-4 font-primary">
            <Link 
            to={'/home/crear'} 
            className="bg-green-800 px-4 py-2 text-gray-100 rounded-md font-primary hover:opacity-95 transition"
            >
            Añadir nuevo empleado
            </Link>

            <div className="bg-gray-100 border border-gray-200 mt-3 flex flex-col gap-3 p-4 rounded-md">
                {
                  employeesIsEmpty ? (

                    employees.map((employee) => (
                        <CardEmployee 
                        employee={employee} 
                        key={employee.id}
                        />
                    ))
                  ) : (
                    <div className="text-center">
                        <p>
                          Aun no has añadido ningun registro
                        </p>
                    </div>
                  )
                }
            </div>
      </section>
  )
}
