'use client'

import { useState } from "react";
import {
    ShoppingCartIcon,
    Bars3Icon,
    XMarkIcon
} from "@heroicons/react/24/outline"
import SearchForm from "./SearchForm";
import Navlink from "./Navlink";

export const NavClient = () => {

    const [navbarVisible, setNavbarVisible] = useState<boolean>(false)
   

  return (
    <>
        <div className="flex items-center grow gap-4 justify-between">
            <a href="/" className="text-3xl font-bold text-primary tracking-tighter">Exclusive</a>
            <div className={"flex min-[920px]:gap-4 " + `${navbarVisible ? "max-[920px]:grid max-[920px]:absolute max-[920px]:bg-black max-[920px]:text-white max-[570px]:top-[130px] max-[920px]:top-[111px] max-[920px]:right-0 max-[920px]:left-0 max-[920px]:px-12 max-[920px]:py-8" : "max-[920px]:hidden"}`}>
                <Navlink href="/">Home</Navlink>
                <Navlink href="/contact">Contact</Navlink>
                <Navlink href="/help">Help Center</Navlink>
            </div>
        </div>
        <div className="flex items-center ml-8 min-[400px]:gap-4">
            <SearchForm />
            <Navlink href="/account/cart" className="max-[400px]:hidden cursor-pointer max-[920px]:p-0"><ShoppingCartIcon className="size-6" /></Navlink>
            <button className="mr-3 max-[400px]:ml-3 cursor-pointer" onClick={() => (setNavbarVisible(!navbarVisible))}>
                {navbarVisible ? <XMarkIcon className="min-[920px]:hidden size-8" /> : <Bars3Icon className="min-[920px]:hidden size-8" />}
            </button>
        </div>
    </>
  )
}
