import Navlink from "./Navlink";
import { createClient } from "@/utils/supabase/client"
import UserName from "./UserName";
import { useEffect, useState } from "react"

export const LoggedOut = () => {
  return (
    <div className="grid absolute top-full mt-3 max-[1200px]:right-0 min-[1200px]:left-1/2 min-[1200px]:-translate-x-1/2 bg-btn-1 text-white p-6 rounded-md">
        <Navlink className="bg-dark py-4 px-8 text-center hover:bg-btn-2 hover:text-white rounded-xl" href="/signup">Sign&nbsp;Up</Navlink>
        <Navlink className="bg-dark py-4 px-8 text-center hover:bg-btn-2 hover:text-white rounded-xl my-2" href="/login">Log&nbsp;In</Navlink>
        <Navlink className="bg-dark py-4 px-8 text-center hover:bg-btn-2 hover:text-white rounded-xl" href="/reset-password">Forgot&nbsp;Password</Navlink>
    </div>
  )
}

type DataType = {
    first_name: string,
    last_name: string, 
}

export const LoggedIn = () => {

  const [userData, setUserData] = useState<DataType | null>(null)

  useEffect(() => {
    const fetchUser = async () => {

        const supabase = await createClient()
        const { data, error } = await supabase.from('users')
        .select("first_name, last_name")

        if (data) setUserData(data[0])
    }

    fetchUser()
  }, [])

  const logout = async () => {
    const supabase = await createClient()
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.log("An error occured while signing out")
    } else {
      window.location.href = "/"
    }
  }

  return (
    userData &&
    <div className="grid absolute top-full mt-3 max-[1340px]:right-0 min-[1340px]:left-1/2 min-[1340px]:-translate-x-1/2 bg-[rgba(0,0,0,0.4)] text-white p-3 backdrop-blur-2xl border border-[rgba(255,255,255,0.4)] rounded-md">
      <UserName first_name={userData.first_name} last_name={userData.last_name} />
      <Navlink className="px-2 pb-3" href="/account/manage">Manage&nbsp;my&nbsp;Account</Navlink>
      <Navlink className="min-[400px]:hidden px-2 py-3" href="/account/cart">My&nbsp;Cart</Navlink>
      <Navlink className="px-2 py-3" href="/account/orders">My&nbsp;Orders</Navlink>
      <Navlink handleClick={() => logout()} className="px-2 py-3" href="/account/">Logout</Navlink>
    </div>
  )
}
