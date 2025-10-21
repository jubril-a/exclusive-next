'use client'

import { createClient } from "@/utils/supabase/client"
import DisplayClient from "./DisplayClient"
import { useEffect, useState } from "react"
import EditInfo from "./EditInfo"

type DataType = {
    first_name: string,
    last_name: string, 
    email: string,
    phone: string,
    address: string
    city: string,
    state: string,
    country: string
}

const DisplayInfo = () => {

    const [userData, setUserData] = useState<DataType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const supabase = await createClient()
            const { data, error } = await supabase.from('Users')
            .select("*")

            if (data) {setUserData(data[0])}
            setLoading(false)
        }

        fetchData()
    }, [])

    if (loading) {
        return <p>Loading component</p>
    }

    return userData ? <DisplayClient userData={userData} /> : <EditInfo />
}

export default DisplayInfo