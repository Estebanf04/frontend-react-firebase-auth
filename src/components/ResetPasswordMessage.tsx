
type ResetPasswordMessageProps = {
    message: string
}
     
export default function ResetPasswordMessage({message} : ResetPasswordMessageProps) {
  return (
    <div className="p-2 rounded-md md:w-[60%] 2xl:w-1/2 bg-green-200 text-center my-2">
        <p className="text-green-800 font-medium">{message}</p>
    </div>
  )
}
