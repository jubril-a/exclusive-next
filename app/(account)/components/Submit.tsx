'use client'

import Loading from "@/components/Loading"
import { useState } from "react"

type Props = {
  action: "login" | "signup"
}

const labels = {
  login: "Log In",
  signup: "Register"
}

const Submit = ({action}: Props) => {
  const [isLoading, setLoading] = useState(false)

  return (
    <>
     {isLoading &&
      <div className="absolute inset-0 bg-[#ffffff7e] grid justify-center items-center">
        <Loading />
      </div>
      }
      <input onClick={() => setLoading(true)} className="bg-btn-1 rounded-md hover:bg-btn-2 hover:text-white mb-8 py-3 cursor-pointer" type="submit" value={labels[action]} />  
    </>
  )
}

export default Submit