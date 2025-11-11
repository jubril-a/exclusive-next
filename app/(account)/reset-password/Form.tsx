'use client'

import FormInput from "../../../components/FormInput"
import { createClient } from "@/utils/supabase/client"
import { useRef, useState } from "react"
import { MouseEvent } from "react"
import AlertBox from "@/components/AlertBox"
import Loading from "@/components/Loading"

const Form = () => {

    const formRef = useRef<HTMLFormElement>(null)
    const [success, setSuccess] = useState<boolean | undefined>(undefined)
    const [loading, setLoading] = useState(false)

    async function initiateReset(e: MouseEvent<HTMLInputElement>) {
        e.preventDefault()
        setLoading(true)
        const supabase = await createClient()

        if (formRef.current) {
            const email = (formRef.current.elements.namedItem('email') as HTMLInputElement)

            const { data, error } = await supabase.auth
            .resetPasswordForEmail(email.value, {redirectTo: "https://exclusive-next-fawn.vercel.app/update-password"})

            if (error) {
                email.value = ""
                setLoading(false)
                setSuccess(false)
            }
            if (data) {
                setLoading(false)
                setSuccess(true)
            }
        }  
    }

    return (
        success ?
            <div className="absolute inset-0 bg-white">
                <h1 className="relative mb-5 w-fit text-3xl md:text-4xl font-semibold before:w-[76px] before:mt-1 before:h-1 before:absolute before:top-full before:bg-btn-2">Reset Password</h1>
                <p>If that email exists in our system, we've sent a reset link. Please check your inbox.</p>
            </div>
        :
            <form ref={formRef} className="grid gap-6">
                {loading && <div className="relative flex justify-center"><Loading className="absolute" /></div>}
                <FormInput name="email" type="email" label="Email" />
                <input onClick={(e) => initiateReset(e)} className="bg-btn-1 rounded-md hover:bg-btn-2 hover:text-white mb-8 py-3 cursor-pointer" type="submit" value="Send Reset Link" />  
                {success == false && <AlertBox heading="Something went wrong" message="We couldn't process your request right now. Please try again later or contact support if this continues." onClose={() => setSuccess(undefined)} />}
            </form>
    )
  
}

export default Form