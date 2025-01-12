import { Link, Outlet } from "react-router-dom"
import Footer from "@/components/Footer"
import { MdKeyboardBackspace } from "react-icons/md";

export default function AuthLayout() {
  return (
    <>
        <main className="min-h-screen flex justify-center items-center">
            <div className="w-full font-primary flex flex-col-reverse md:flex-row lg:h-screen">
                <div className="md:w-1/2 w-full p-10 md:p-20 flex justify-center border-r-2 border-gray-200">
                  <img src="banner-auth.svg"/>
                </div>

                <section className="bg-gray-100 flex flex-col items-center justify-center h-[80vh] lg:h-full md:w-1/2 w-full relative">
                  <Link to={'/'} className="absolute top-0 left-0 m-6 px-3 py-3 text-gray-100 bg-gray-900 rounded-full hover:opacity-95 hover:scale-105 transition"><MdKeyboardBackspace/></Link>
                    <Outlet />
                </section>
            </div>
        </main>
        <Footer/>
    </>
  )
}
