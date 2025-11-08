'use client'

import FormInput from "../../../components/FormInput"
import { createClient } from "@/utils/supabase/client"
import { useRef } from "react"
import { MouseEvent } from "react"

const Form = () => {

    const formRef = useRef<HTMLFormElement>(null)

    async function initiateReset(e: MouseEvent<HTMLInputElement>) {
        e.preventDefault()
        const supabase = await createClient()

        if (formRef.current) {
            const email = (formRef.current.elements.namedItem('email') as HTMLInputElement)

            const { data, error } = await supabase.auth
            .resetPasswordForEmail(email.value, {redirectTo: "http://localhost:3000/update-password"})

            if (error) {
                // TODO: Error Message
                console.log("error", error)
            }
            if (data) {
                // TODO: Reset Link Sent Message
                console.log("data", data)
            }
        }  
    }

  return (
    <form ref={formRef} className="grid gap-6">
        <FormInput name="email" type="email" label="Email" />
        <input onClick={(e) => initiateReset(e)} className="bg-btn-1 rounded-md hover:bg-btn-2 hover:text-white mb-8 py-3 cursor-pointer" type="submit" value="Send Reset Link" />  
    </form>
  )
}

export default Form