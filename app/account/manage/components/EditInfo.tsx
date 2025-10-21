'use client'

import { createClient } from "@/utils/supabase/client"
import FormInput from "@/components/FormInput"
import Constraint from "@/components/Constraint"
import { MouseEvent } from "react"

const EditInfo = () => {


  async function handleClick(e:MouseEvent) {
    e.preventDefault()
    const supabase = await createClient()
    const { error } = await supabase
    .from('Users')
    .insert({
      first_name: "Abdulsalam",
      last_name: "Jubril", 
      email: "abdulsalamjubr3@gmail.com",
      phone: "09072306028",
      address: "41, Alhaji Oladipupo Street",
      city: "Oko-Oba",
      state: "Lagos",
      country: "Nigeria"
    })

  if (error) {
    console.log("See to this:")
    console.log(error)
  }

  }

  return (
    <Constraint className="my-25" size="960px">
      <form className="grid grid-cols-2 gap-4">
        <p className="col-span-full text-xl text-btn-2 font-medium">Personal Information</p>
        <FormInput name="firstname" type="text" label="First Name" />
        <FormInput name="lastname" type="text" label="Last Name" />

        <FormInput name="email" type="email" label="Email Address" />
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

export default EditInfo