import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ProtectedRoute from "@/pages/auth/ProtectedRoute";
import HomePage from "@/pages/HomePage";
import AuthLayout from "@/layouts/AuthLayout";
import ResetPassword from "@/pages/auth/ResetPassword";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import EditEmployeePage from "./pages/EditEmployeePage";

export default function AppRouter() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={
                    <ProtectedRoute>
                        <DashboardPage/>
                    </ProtectedRoute>
                }/>

                <Route path="/home/crear" element={
                    <ProtectedRoute>
                        <CreateEmployeePage/>
                    </ProtectedRoute>
                }/>

                <Route path="/home/employee/:id" element={
                    <ProtectedRoute>
                        <EmployeeDetailsPage/>
                    </ProtectedRoute>
                }/>

                <Route path="/home/employee/:id/edit" element={
                    <ProtectedRoute>
                        <EditEmployeePage/>
                    </ProtectedRoute>
                }/>

                <Route path="/" element={ <HomePage/> } />

                <Route element={<AuthLayout/>}>
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/reset-password" element={<ResetPassword/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 