'use client'

import { useState } from "react";
import {
    ShoppingCartIcon,
    HeartIcon,
    MagnifyingGlassIcon,
    Bars3Icon
} from "@heroicons/react/24/outline"
import Constraint from "./Constraint";

type Props = {
    children: React.ReactNode;
    href: string
}

const Navlink = ({children, href}: Props) => {
    return (
        <a href={href} className="text-sm max-[840px]:p-4 border-b border-[#ffffff30] last:border-0">{children}</a>
    )
}

const Navbar = () => {
    const [navbarVisible, setNavbarVisible] = useState<boolean>(false)

  return (
    <div className="border-b border-b-[#c6c6c648]">
        <div className="bg-black p-2">
            <p className="text-[#FAFAFA] text-center text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <a className="underline text-white font-semibold" href="">Shop Now</a></p>
        </div>
        <Constraint>
            <nav className="flex items-center py-4 gap-8">
                <div className="flex items-center grow gap-4 justify-between">
                    <span className="text-3xl font-bold text-primary tracking-tighter">Exclusive</span>
                    <div className={"flex min-[840px]:gap-4 " + `${navbarVisible ? "max-[840px]:grid max-[840px]:absolute max-[840px]:bg-black max-[840px]:text-white max-[840px]:top-[111px] max-[840px]:right-0 max-[840px]:left-0 max-[840px]:px-12 max-[840px]:py-8" : "max-[840px]:hidden"}`}>
                        <Navlink href="">Home</Navlink>
                        <Navlink href="/contact">Contact</Navlink>
                        <Navlink href="">Account</Navlink>
                    </div>
                </div>
                <div className="flex items-center gap-1 min-[400px]:gap-4">
                    <form action="" className="bg-[#F5F5F5] flex rounded-md border border-transparent focus-within:border-gray-300">
                        <input type="text" placeholder="What are you looking for?" className="max-[640px]:hidden w-[240px] h-[40px] focus:outline-0 pl-4"/>
                        <button type="submit" className="p-2 hover:bg-btn-1">
                            <MagnifyingGlassIcon className="size-6" />
                        </button>
                    </form>
                    <button className="cursor-pointer"><HeartIcon className="max-[400px]:hidden size-6" /></button>
                    <button className="cursor-pointer"><ShoppingCartIcon className="max-[400px]:hidden size-6" /></button>
                    <button className="cursor-pointer" onClick={() => (setNavbarVisible(!navbarVisible))}><Bars3Icon className="min-[840px]:hidden size-8" /></button>
                </div>
            </nav>
        </Constraint>
    </div>
  )
}

export default Navbar