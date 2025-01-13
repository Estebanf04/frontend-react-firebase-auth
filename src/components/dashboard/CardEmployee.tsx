import { useEmployee } from "@/hooks/useEmployee"
import { Employee } from "@/interfaces/employee"
import { FaTrashCan } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa";

type CardEmployeeProps = {
    employee: Employee
}

export default function CardEmployee({employee} : CardEmployeeProps) {

  const {deleteAnEmployee} = useEmployee()

  const deleteEmployee = async() => {
    await deleteAnEmployee(employee.id)
  }
  
  return (
    <div className="flex items-center justify-between py-4 px-4 md:px-6 shadow-lg bg-white rounded-md">
        <div>
            <p className="text-sm md:text-lg font-semibold">
                {employee.name} {employee.surname}
            </p>
            <p className="text-sm md:text-md text-gray-700">
                {employee.job}
            </p>
            <button className="bg-gray-900 text-sm md:text-md mt-1 py-1 px-3 text-gray-100 rounded-sm">
                Ver detalles
            </button>
        </div>
        <div className="flex flex-col md:flex-row gap-1">

            <button className="bg-orange-600 text-md md:text-xl p-2 md:p-3 text-gray-100 rounded-lg hover:opacity-95 transition">
                <FaEdit />
            </button>

            <button 
            onClick={deleteEmployee}
            className="bg-red-600 text-md md:text-xl p-2 md:p-3 text-gray-100 rounded-lg hover:opacity-95 transition"
            >
                <FaTrashCan />
            </button>
        </div>
    </div>
  )
}
