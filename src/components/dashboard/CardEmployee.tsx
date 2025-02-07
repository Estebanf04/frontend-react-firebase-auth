import { useEmployee } from "@/hooks/useEmployee"
import { Employee } from "@/interfaces/employee"
import { FaTrashCan } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                <div className="flex flex-col gap-1">
                    <p className="text-sm md:text-lg font-semibold">
                        {employee.name} {employee.surname}
                    </p>
                    <p className="text-sm md:text-md text-gray-700">
                        {employee.job}
                    </p>
                    <Link 
                    to={`/home/employee/${employee.id}`} 
                    className="bg-gray-900 text-sm md:text-md py-1 px-3 w-fit text-gray-100 rounded-sm"
                    >
                    Ver detalles
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row gap-1">
                    <Link 
                    to={`/home/employee/${employee.id}/edit`} 
                    className="bg-orange-600 text-md md:text-xl p-2 md:p-3 text-gray-100 rounded-lg hover:opacity-95 transition"
                    >
                    <FaEdit />
                    </Link>

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
