'use client'

import Constraint from "@/components/Constraint"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import iPhone from "@/public/iphone.png"
import { useState } from "react"
// import { client } from "@/sanityClient";
import { categories } from "@/app/data"
import Image from "next/image"

// const categories = [
//   "Womens Fashion",
//   "Men's Fashion",
//   "Electronics",
//   "Home & Lifestyle",
//   "Sports & Outdoor",
//   "Health & Beauty",
//   "Medicine",
//   "Sports & Outdoor",
//   "Groceries and Pets"
// ]

const Hero = () => {
  const [categoryVisible, setCategoryVisible ] = useState<boolean>(false)
  // const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   client.fetch(`*[_type == "category"]{category}`).then((res) => setCategories(res))
  // }, [])

  return (
    <Constraint>
      <main className="flex max-[640px]:flex-col">

        <div className="max-[640px]:order-2 pt-8 min-[640px]:pr-8 min-[640px]:border-r min-[640px]:border-[#c6c6c648] shrink-0">
          <h2 className="bg-dark text-white min-[640px]:hidden font-semibold mb-4 border border-[#c6c6c648] p-4 cursor-pointer" onClick={() => (setCategoryVisible(!categoryVisible))}>Categories</h2>
          <ul className={categoryVisible ? "block max-[640px]:mx-4" : "max-[640px]:hidden"}>
            {categories.map((catg:{category:string}) => (
              <li key={catg.category} className="text-sm pb-4"><a href="">{catg.category}</a></li>
            ))}
          </ul>
        </div>
        
        <div className="min-[1080px]:flex bg-black text-white min-[640px]:ml-8 mt-8 grow px-8 min-[640px]:px-16 pt-16 justify-between">
          <div>
            <h2>iPhone 14 series</h2>
            <h1 className="text-5xl font-semibold my-6 leading-14">Up to 10% off Voucher</h1>
            <a href="" className="flex gap-1">
              <span className="border-b border-white">Shop Now</span>
              <ArrowRightIcon className="size-5"/>
            </a>
          </div>
          <div className="max-[1080px]:mt-8 min-[1080px]:shrink-0">
            <Image src={iPhone} className="block ml-auto" alt="image of an iphone" />
          </div>
        </div>

      </main>
    </Constraint>
  )
}

export default Hero