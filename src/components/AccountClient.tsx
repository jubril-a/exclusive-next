'use client'

import { useState, useRef, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline"
import { LoggedIn, LoggedOut } from "./AccountBox";

type User = {
    id: string;
    email?: string;
    role?: string;
}

type Props = {
    user: User | null;
}

const AccountClient = ({ user }: Props) => {

    const [accountVisible, setAccountVisible] = useState<boolean>(false)
    const accountBoxref = useRef<HTMLDivElement>(null)

    useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
                if (accountBoxref.current && !accountBoxref.current.contains(e.target as Node)) {
                    setAccountVisible(false)
                }
            }
    
            document.addEventListener("mousedown", handleClickOutside)
    
            return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    function displayAccountBox(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setAccountVisible(!accountVisible)
    }
    
  return (
    <div ref={accountBoxref} className="relative">
        <button  onClick={displayAccountBox} className="cursor-pointer w-7 h-7 rounded-full bg-btn-2 flex items-center justify-center">
          <UserIcon className="size-4 text-white" />
        </button>
        {
            accountVisible &&
            <div>
                {user ? <LoggedIn /> : <LoggedOut />}
            </div>
        }
    </div>
  )
}

export default AccountClient