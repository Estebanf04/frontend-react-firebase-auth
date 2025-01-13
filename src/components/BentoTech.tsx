
export default function BentoTech() {
  return (
    <section className="px-4 py-14 lg:px-12 flex flex-col gap-6 justify-center max-w-5xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:p-0 w-full font-primary">
               <button className=" bg-gradient-to-tr from-black via-gray-800 to-gray-900 border-2 border-white/40 aspect-square w-full h-full rounded-2xl p-4 flex justify-start transition hover:scale-105 md:aspect-[16/8] md:col-span-2 md:row-span-1">
                    <span className="flex items-center font-medium text-2xl text-slate-200 text-left text-pretty pr-10">
                        Los datos personales de tus empleados en la palma de tu mano
                    </span>
               </button>

               <button className="bg-gradient-to-tr from-black via-gray-800 to-gray-900 border-2 border-white/40 aspect-square w-full rounded-2xl p-4 flex justify-start transition hover:scale-105 md:col-start-3 md:row-span-2 md:h-full">
                    <span className="flex items-center font-medium text-2xl text-slate-200 text-left text-pretty pr-10">
                        La organización como clave de tu gestión
                    </span>
               </button>

               <button className="bg-gradient-to-tr from-black via-gray-800 to-gray-900 border-2 border-white/40 aspect-square w-full rounded-2xl p-4 flex justify-start transition hover:scale-105 md:h-row-span-1">
                    <span className="flex items-center font-medium text-2xl text-slate-200 text-left text-pretty">
                        Datos <br /> persistentes
                    </span>
               </button>

               <button className="bg-gradient-to-tr from-black via-gray-800 to-gray-900 border-2 border-white/40 aspect-square w-full rounded-2xl p-4 flex justify-start transition hover:scale-105  md:h-row-span-1 md:h-full">
                     <span className="flex items-center font-medium text-2xl text-slate-200 text-left text-pretty">
                        100% <br /> gratuito
                    </span>
               </button>
         </div> 
    </section>  
  )
}
