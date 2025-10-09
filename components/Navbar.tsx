'use client'

import { useState, useEffect, useRef } from "react";
import {
    ShoppingCartIcon,
    HeartIcon,
    Bars3Icon,
    XMarkIcon
} from "@heroicons/react/24/outline"
import Constraint from "./Constraint";
import SearchForm from "./SearchForm";
import { cn } from "@/utils/cn";

type Props = {
    children: React.ReactNode;
    href: string;
    className?: string;
    handleClick?: (e:React.MouseEvent<HTMLAnchorElement>) => void;
}

const Navlink = ({children, href, className, handleClick}: Props) => {
    return (
        <a href={href} className={cn("text-sm max-[840px]:p-4 border-b border-[#ffffff30] last:border-0 hover:text-btn-1", className)} onClick={handleClick}>{children}</a>
    )
}

const Navbar = () => {
    const [navbarVisible, setNavbarVisible] = useState<boolean>(false)
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


    function displayAccountBox(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        setAccountVisible(!accountVisible)
    }

  return (
    <div className="border-b border-b-[#c6c6c648] sticky top-0 z-100 bg-white">
        <div className="bg-black p-2">
            <p className="text-[#FAFAFA] text-center text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <a className="underline text-white font-semibold" href="">Shop Now</a></p>
        </div>
        <Constraint>
            <nav className="flex items-center py-4 gap-8">
                <div className="flex items-center grow gap-4 justify-between">
                    <a href="/" className="text-3xl font-bold text-primary tracking-tighter">Exclusive</a>
                    <div className={"flex min-[840px]:gap-4 " + `${navbarVisible ? "max-[840px]:grid max-[840px]:absolute max-[840px]:bg-black max-[840px]:text-white max-[570px]:top-[130px] max-[840px]:top-[111px] max-[840px]:right-0 max-[840px]:left-0 max-[840px]:px-12 max-[840px]:py-8" : "max-[840px]:hidden"}`}>
                        <Navlink href="/">Home</Navlink>
                        <Navlink href="/contact">Contact</Navlink>
                        <div ref={accountBoxref} className="relative flex items-center">
                            <Navlink href="" handleClick={displayAccountBox}>Account</Navlink>
                            {accountVisible && <div className="grid absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-btn-1 text-white p-6">
                                <Navlink className="bg-dark py-4 px-8 text-center hover:bg-btn-2 hover:text-white rounded-xl" href="/signup">Sign&nbsp;Up</Navlink>
                                <Navlink className="bg-dark py-4 px-8 text-center hover:bg-btn-2 hover:text-white rounded-xl my-2" href="/login">Log&nbsp;In</Navlink>
                                 <Navlink className="bg-dark py-4 px-8 text-center hover:bg-btn-2 hover:text-white rounded-xl" href="/reset-password">Forgot&nbsp;Password</Navlink>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1 min-[400px]:gap-4">
                    <SearchForm />
                    <button className="cursor-pointer"><HeartIcon className="max-[400px]:hidden size-6" /></button>
                    <button className="cursor-pointer"><ShoppingCartIcon className="max-[400px]:hidden size-6" /></button>
                    <button className="cursor-pointer" onClick={() => (setNavbarVisible(!navbarVisible))}>
                        {navbarVisible ? <XMarkIcon className="min-[840px]:hidden size-8" /> : <Bars3Icon className="min-[840px]:hidden size-8" />}
                    </button>
                </div>
            </nav>
        </Constraint>
    </div>
  )
}

export default Navbar