'use client'

import Constraint from "@/src/components/Constraint"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import iPhone from "@/public/iphone.png"
import { useState } from "react"
import Image from "next/image"
import { MouseEvent } from "react"

type Category = {
    slug: string,
    category: string,
    img: string
}

export default function HeroClient({categories}:{categories: Category[]}) {
  const [categoryVisible, setCategoryVisible ] = useState<boolean>(false)

  function handleClick(e: MouseEvent<HTMLAnchorElement>, elm: string) {
    e.preventDefault()
    const section = document.querySelector(`#${elm}`)

    if (section) {
      const fromTop = section.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({top: fromTop, behavior: "smooth"})
    }
  }

  return (
    <Constraint>
      <main className="flex max-[640px]:flex-col">

        <div className="max-[640px]:order-2 pt-8 min-[640px]:pr-8 min-[640px]:border-r min-[640px]:border-[#c6c6c648] shrink-0">
          <h2 className="bg-dark text-white min-[640px]:hidden font-semibold mb-4 border border-[#c6c6c648] p-4 cursor-pointer" onClick={() => (setCategoryVisible(!categoryVisible))}>Categories</h2>
          <ul className={categoryVisible ? "block max-[640px]:mx-4" : "max-[640px]:hidden"}>
            {categories.map((catg:{slug: string, category:string}) => (
              <li key={catg.category} className="text-sm pb-4 text-gray-800"><a onClick={(e) => handleClick(e, catg.slug)} href={`#${catg.slug}`}>{catg.category}</a></li>
            ))}
          </ul>
        </div>
        
        <div className="min-[1080px]:flex bg-black text-white min-[640px]:ml-8 mt-4 min-[640px]:mt-8 grow px-8 min-[640px]:px-16 pt-16 justify-between">
          <div>
            <h2>iPhone 14 series</h2>
            <h1 className="text-5xl font-semibold my-6 leading-14">Up to 10% off Voucher</h1>
            <a href="/product/ed661682-049a-4334-ac41-4c300b211b5d" className="flex gap-1">
              <span className="border-b border-white">Shop Now</span>
              <ArrowRightIcon className="size-5"/>
            </a>
          </div>
          <div className="max-[1080px]:mt-8 min-[1080px]:shrink-0">
            <Image src={iPhone} priority={true} className="block ml-auto" alt="image of an iphone" />
          </div>
        </div>
      </main>
    </Constraint>
  )
}
