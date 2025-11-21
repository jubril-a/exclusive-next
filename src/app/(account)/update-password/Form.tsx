'use client'

import FormInput from "../../../components/FormInput"
import { createClient } from "@/src/utils/supabase/client"
import { useState, useRef, MouseEvent } from "react"
import { useRouter } from "next/navigation"
import Loading from "@/src/components/Loading"

const Form = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const formRef = useRef<HTMLFormElement>(null)

    async function initiateReset(e: MouseEvent<HTMLInputElement>) {
        e.preventDefault()
        setLoading(true)
        const supabase = await createClient()

        if (formRef.current) {
            const email = (formRef.current.elements.namedItem('password') as HTMLInputElement)

            const { data, error } = await supabase.auth.updateUser({
                password: email.value
            })

            if (error) {
                router.push('/error')
            }
            if (data) {
                router.push('/login')
            }
        }  
    }

  return (
    <form ref={formRef} className="grid gap-6">
        {loading && <div className="relative flex justify-center"><Loading className="absolute" /></div>}
        <FormInput name="password" type="password" label="New Password" />
        <input onClick={(e) => initiateReset(e)} className="bg-btn-1 rounded-md hover:bg-btn-2 hover:text-white mb-8 py-3 cursor-pointer" type="submit" value="Reset Password" />  
    </form>
  )
}

export default Form