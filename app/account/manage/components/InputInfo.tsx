'use client'

import { createClient } from "@/utils/supabase/client"
import FormInput from "@/components/FormInput"
import Constraint from "@/components/Constraint"
import Loading from "@/components/Loading"
import { MouseEvent, useRef, useEffect, useState } from "react"

const InputInfo = ({ editStage=false }: {editStage?: boolean}) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const getMail = async () => {
      const supabase = await createClient()

      if (editStage) {
        const { data, error } = await supabase.from('users')
        .select("*")

        if (formRef.current && data) {
          const userData = data[0]
          const fname = (formRef.current.elements.namedItem('firstname') as HTMLInputElement)
          const lname = (formRef.current?.elements.namedItem('lastname') as HTMLInputElement)
          const emailField = (formRef.current.elements.namedItem('email') as HTMLInputElement)
          const phone = (formRef.current?.elements.namedItem('phone') as HTMLInputElement)
          const address = (formRef.current?.elements.namedItem('address') as HTMLInputElement)
          const city = (formRef.current?.elements.namedItem('city') as HTMLInputElement)
          const state = (formRef.current?.elements.namedItem('state') as HTMLInputElement)
          const country = (formRef.current?.elements.namedItem('country') as HTMLInputElement)

          fname.value = userData['first_name']
          lname.value = userData['last_name']
          emailField.value = userData['email']
          emailField.disabled = true
          phone.value = userData['phone']
          address.value = userData['address']
          city.value = userData['city']
          state.value = userData['state']
          country.value = userData['country']
        }
      } else {
        const { data: { user } } = await supabase.auth.getUser()

        if (formRef.current && user && user.email) {
          const emailField = (formRef.current.elements.namedItem('email') as HTMLInputElement)
          emailField.value = user.email
          emailField.disabled = true
        }

      }

      setLoading(false)
    }

    getMail()
  }, [])


  async function handleClick(e:MouseEvent) {
    e.preventDefault()
    const supabase = await createClient()
    const { error } = await supabase
    .from('users')
    .upsert({
      first_name: (formRef.current?.elements.namedItem('firstname') as HTMLInputElement)?.value,
      last_name: (formRef.current?.elements.namedItem('lastname') as HTMLInputElement)?.value,
      phone: (formRef.current?.elements.namedItem('phone') as HTMLInputElement)?.value,
      email: (formRef.current?.elements.namedItem('email') as HTMLInputElement)?.value,
      address: (formRef.current?.elements.namedItem('address') as HTMLInputElement)?.value,
      city: (formRef.current?.elements.namedItem('city') as HTMLInputElement)?.value,
      state: (formRef.current?.elements.namedItem('state') as HTMLInputElement)?.value,
      country: (formRef.current?.elements.namedItem('country') as HTMLInputElement)?.value,
    }, { onConflict: 'email' })

    if (error) {
      console.log("See to this:")
      console.log(error)
    } else {
      window.location.href = "/account/manage"
    }

  }

  if (loading) {
    return <Loading />
  }

  return (
    <Constraint className="py-10 min-[1000px]:py-20" size="960px">
      <form ref={formRef} className="grid grid-cols-2 gap-4">
        <p className="col-span-full text-xl text-btn-2 font-medium">Personal Information</p>
        <FormInput name="firstname" type="text" label="First Name" />
        <FormInput name="lastname" type="text" label="Last Name" />

        <FormInput name="email" type="email" label="Email Address"/>
        <FormInput name="phone" type="phone" label="Phone" />

        <p className="mt-10 col-span-full text-xl text-btn-2 font-medium">Billing Information</p>
        <FormInput name="address" type="text" label="House No & Street Name" />
        <FormInput name="city" type="text" label="City" />

        <FormInput name="state" type="text" label="State" />
        <FormInput name="country" type="text" label="Country" />

        <input onClick={(e) => handleClick(e)} className="col-span-full bg-btn-1 rounded-md hover:bg-btn-2 hover:text-white my-8 py-3 cursor-pointer" type="submit" value="Save" />
      </form>
    </Constraint>
  )
}

export default InputInfo