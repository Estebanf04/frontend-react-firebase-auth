
import { useAuth } from "@/hooks/useAuth"
import Header from "@/components/dashboard/Header";
import EmployeesList from "@/components/dashboard/EmployeesList";

export default function DashboardPage() {

  const {loading} = useAuth()

  if(loading) return <h1>Cargando....</h1>

  return (
    <>
      <Header/>
      <EmployeesList/>
    </>
  )
}
