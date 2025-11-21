'use client'

import { createClient } from "@/src/utils/supabase/client"
import DisplayClient from "./DisplayClient"
import { useEffect, useState } from "react"
import EditInfo from "./InputInfo"
import Loading from "@/src/components/Loading"
import { Dispatch, SetStateAction } from "react"

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

const DisplayInfo = ({ switchMode }: {switchMode: [boolean, Dispatch<SetStateAction<boolean>>]}) => {

    const [userData, setUserData] = useState<DataType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const supabase = await createClient()
            const { data, error } = await supabase.from('users')
            .select("*")

            if (data) {setUserData(data[0])}
            setLoading(false)
        }

        fetchData()
    }, [])

    if (loading) {
        return <Loading />
    }

    return userData ? <DisplayClient userData={userData} switchMode={switchMode} /> : <EditInfo />
}

export default DisplayInfo