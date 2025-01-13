import FormCreation from "@/components/dashboard/FormCreation";
import Header from "@/components/dashboard/Header";

export default function CreateEmployeePage() {
  return (
    <>
    <Header/>
    <section className="max-w-6xl mx-auto p-6 mt-4 font-primary relative">
        <h1 className="text-2xl font-bold text-center text-gray-800">
            Crea un nuevo empleado
        </h1>
        <FormCreation/>
    </section>
    </>
  )
}
