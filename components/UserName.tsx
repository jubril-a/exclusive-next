import { useEffect, useState } from "react"
import { createClient } from "@/utils/supabase/client"

type DataType = {
    first_name: string,
    last_name: string, 
}

const UserName = () => {

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

  return (
    <div className="flex gap-2 items-center p-2 pr-6 rounded-md mb-4 bg-white cursor-pointer">
        <span className="w-8 h-8 flex items-center justify-center text-sm bg-btn-1 text-dark rounded-md">{userData?.first_name.at(0)}{userData?.last_name.at(0)}</span>
        <span className="w-30 overflow-hidden text-dark text-sm">{userData?.first_name}&nbsp;{userData?.last_name}</span>
    </div>
  )
}

export default UserName