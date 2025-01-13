import FormEdition from "@/components/dashboard/FormEdition";
import Header from "@/components/dashboard/Header";
import { useEmployee } from "@/hooks/useEmployee";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditEmployeePage() {

    const {getEmployeeById, employeeDetail} = useEmployee()
    const {id} = useParams()

    useEffect(() => {
      getEmployeeById(Number(id))
    }, [])

  return (
    <>
      <Header/>
      <section className="max-w-9xl mx-auto p-6 mt-10 md:mt-4 font-primary relative">
          <h1 className="text-2xl font-bold text-center text-gray-800">
              Editar empleado
          </h1>
          <FormEdition employee={employeeDetail}/>
      </section>
    </>
  )
}