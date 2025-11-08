'use client'

import FormInput from "../../../components/FormInput"
import { createClient } from "@/utils/supabase/client"
import { useRef, useState } from "react"
import { MouseEvent } from "react"
import { useRouter } from "next/navigation"

const Form = () => {

    const router = useRouter()
    const formRef = useRef<HTMLFormElement>(null)
    const [success, setSuccess] = useState<boolean>(false)

    async function initiateReset(e: MouseEvent<HTMLInputElement>) {
        e.preventDefault()
        const supabase = await createClient()

        if (formRef.current) {
            const email = (formRef.current.elements.namedItem('email') as HTMLInputElement)

            const { data, error } = await supabase.auth
            .resetPasswordForEmail(email.value, {redirectTo: "http://localhost:3000/update-password"})

            if (error) {
                router.push('/error')
            }
            if (data) {
                setSuccess(true)
            }
        }  
    }

  return (
    success ?
    <div className="absolute inset-0 bg-white">
        <h1 className="relative mb-5 w-fit text-3xl md:text-4xl font-semibold before:w-[76px] before:mt-1 before:h-1 before:absolute before:top-full before:bg-btn-2">Reset Password</h1>
        <p>A link has been sent to your mail. Click it to reset your password</p>
    </div>
    :
    <form ref={formRef} className="grid gap-6">
        <FormInput name="email" type="email" label="Email" />
        <input onClick={(e) => initiateReset(e)} className="bg-btn-1 rounded-md hover:bg-btn-2 hover:text-white mb-8 py-3 cursor-pointer" type="submit" value="Send Reset Link" />  
    </form>
  )
}

export default Form