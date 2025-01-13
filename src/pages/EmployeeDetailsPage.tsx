import Header from "@/components/dashboard/Header"
import { useEmployee } from "@/hooks/useEmployee"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { HiDocumentArrowUp } from "react-icons/hi2";
import { MdKeyboardBackspace } from "react-icons/md";

export default function EmployeeDetailsPage() {

  const {getEmployeeById, employeeDetail} = useEmployee()
  const {id} = useParams()

  useEffect(() => {
    getEmployeeById(Number(id))
  }, [])

  return (
    <>
        <Header/>
        <section className="max-w-9xl mx-auto px-4 relative">
            
            <Link 
             to={'/home'} 
             className="absolute -top-6 left-0 md:mx-12 ml-4 px-3 py-1 flex items-center gap-1 text-gray-100 text-sm bg-gray-900 rounded-md hover:opacity-95 hover:scale-105 transition">
             Back
            <MdKeyboardBackspace/>
            </Link>

            <div className="my-10 max-w-6xl mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold font-primary flex flex-col gap-1 items-center">
                        <FaUserCircle/>
                        {employeeDetail.name}{' '}{employeeDetail.surname}
                    </h1>
                    <p className="text-lg font-primary text-gray-700">
                        {employeeDetail.job}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 my-4 gap-4">

                    <div className="border border-gray-300 p-4 bg-gray-100 rounded-md">
                        <h1 className="text-xl font-primary flex items-center gap-2 px-2">
                            <FaPhoneSquareAlt/>
                            Contacto
                        </h1>
                        
                        <div className="text-start p-2 ">
                            <p>Email:{' '} 
                                <span className="font-semibold">
                                    {employeeDetail.email}
                                </span>
                            </p>

                            <p>Telefono:{' '}
                                <span className="font-semibold">
                                    {employeeDetail.phone}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="border border-gray-300 p-4 bg-gray-100 rounded-md">
                        <h1 className="text-xl font-primary flex items-center gap-2 px-2">
                            <HiDocumentArrowUp/>
                            Datos
                        </h1>

                        <div className="text-start p-2">
                            <p>NIF:{' '}
                                <span className="font-semibold">
                                    {employeeDetail.nif}
                                </span>
                            </p>

                            <p>Nº Seg. Social:{' '} 
                                <span className="font-semibold">
                                    {employeeDetail.seguridadsocial}
                                </span>
                            </p>

                            <p>Salario:{' '} 
                                <span className="font-semibold">
                                    {employeeDetail.salary}€/año
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
