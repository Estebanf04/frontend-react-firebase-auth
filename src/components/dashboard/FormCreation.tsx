import { NewEmployeeData } from "@/interfaces/employee";
import { useForm } from "react-hook-form"
import ErrorInput from "./ErrorInput";
import { useEmployee } from "@/hooks/useEmployee";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

export default function FormCreation() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewEmployeeData>();

  const navigate = useNavigate()

  const {createNewEmployee} = useEmployee()

  const dataForm = async(data : NewEmployeeData) => {
      const result = await createNewEmployee(data)
      if(result) return navigate('/home')
      reset()
  }

  return (
        <form 
        onSubmit={handleSubmit(dataForm)}
        className="flex flex-col gap-3 md:w-1/2 mx-auto mt-5 py-6 px-4 shadow-lg rounded-lg">

          <div className="flex flex-col gap-1">
              <input 
              type="text" 
              id="name"
              placeholder="Nombre:" 
              className="bg-gray-100 p-2 placeholder:text-gray-600 rounded-md" 
              required
              {...register('name', {pattern: /^[A-Za-z\s]+$/i, maxLength: 20 })}
              />

              {errors.name && <ErrorInput> Nombre no valido </ErrorInput>}
          </div>
            
          <div className="flex flex-col gap-1">
              <input 
              type="text" 
              id="surname" 
              placeholder="Apellido:" 
              required
              className="bg-gray-100 p-2 placeholder:text-gray-600 rounded-md"
              {...register('surname', {pattern: /^[A-Za-z\s]+$/i, maxLength: 20})}
              />

              {errors.surname && <ErrorInput> Apellido no valido </ErrorInput>}
          </div>

          <div className="flex flex-col gap-1">
              <input
              type="email" 
              id="email" 
              placeholder="Correo:" 
              required
              className="bg-gray-100 p-2 placeholder:text-gray-600 rounded-md"
              {...register('email', {maxLength: 30})}
              />
          </div>

          <div className="flex flex-col gap-1">
              <input 
              type="number" 
              id="phone" 
              placeholder="Telefono:" 
              required
              className="bg-gray-100 p-2 placeholder:text-gray-600 rounded-md"
              {...register('phone', {minLength: 9, maxLength: 9})}
              />

              {errors.phone && <ErrorInput>Telefono incorrecto</ErrorInput>}
          </div>

          <div className="flex flex-col gap-1">
              <input 
              type="text" 
              id="job" 
              placeholder="Puesto de trabajo:" 
              required
              className="bg-gray-100 p-2 placeholder:text-gray-600 rounded-md"
              {...register('job', {pattern: /^[A-Za-z\s]+$/i })}
              />

              {errors.job && <ErrorInput>Puesto incorrecto</ErrorInput>}
          </div>

          <div className="flex flex-col gap-1">
              <input
              type="text" 
              id="nif" 
              placeholder="NIF:" 
              required
              className="bg-gray-100 p-2 placeholder:text-gray-600 rounded-md"
              {...register('nif', {minLength: 9, maxLength: 9})}
              />

              {errors.nif && <ErrorInput>Formato no valido</ErrorInput>}
            </div>

          <div className="flex flex-col gap-1">
              <input 
              type="number" 
              id="seguridadsocial" 
              placeholder="Nº Seguridad social:" 
              required
              className="bg-gray-100 p-2 placeholder:text-gray-600 rounded-md"
              {...register('seguridadsocial', {required: true, minLength: 12, maxLength: 12})}
              />

              {errors.seguridadsocial && <ErrorInput>Formato no valido</ErrorInput>}
          </div>

          <div className="flex flex-col gap-1">
              <input 
              type="number"
              id="salary" 
              placeholder="Salario anual:" 
              className="bg-gray-100 p-2 placeholder:text-gray-600 rounded-md"
              {...register('salary', {required: true, minLength: 5, maxLength: 5})}
              />

              {errors.salary && <ErrorInput>Salario no valido</ErrorInput>}
          </div>

          <button className="bg-gray-900 mt-4 py-2 text-lg text-gray-100 rounded-md hover:opacity-95 transition">
              Crear empleado
           </button>

           <Link 
           to={'/home'} 
           className="absolute top-0 my-6 px-3 py-3 text-gray-100 bg-gray-900 rounded-full hover:opacity-95 hover:scale-105 transition">
             <MdKeyboardBackspace/>
           </Link>
            
        </form>

  )
}
