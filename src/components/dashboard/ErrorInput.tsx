import { ReactNode } from "react"

type ErrorInputProps = {
    children: ReactNode
}

export default function ErrorInput({children} : ErrorInputProps) {
  return (
      <p className="text-red-700 bg-red-200 text-start px-3 rounded-sm max-w-fit">
        {children}
      </p>
  )
}
