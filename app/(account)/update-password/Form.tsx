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
            const email = (formRef.current.elements.namedItem('password') as HTMLInputElement)

            const { data, error } = await supabase.auth.updateUser({
                password: email.value
            })

            if (error) {
                // TODO: Show Error Message
                console.log("error", error)
            }
            if (data) {
                // TODO: redirect to login page
                console.log("data", data)
            }
        }  
    }

  return (
    <form ref={formRef} className="grid gap-6">
        <FormInput name="password" type="password" label="New Password" />
        <input onClick={(e) => initiateReset(e)} className="bg-btn-1 rounded-md hover:bg-btn-2 hover:text-white mb-8 py-3 cursor-pointer" type="submit" value="Reset Password" />  
    </form>
  )
}

export default Form