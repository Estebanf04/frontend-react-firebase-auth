
type ErrorMessageProps = {
    message: string
}
     
export default function ErrorMessage({message} : ErrorMessageProps) {
  return (
    <div className="p-2 rounded-md md:w-[60%] 2xl:w-1/2 bg-red-200 text-center my-2">
        <p className="text-red-800 font-medium">{message}</p>
    </div>
  )
}
