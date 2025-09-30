'use client'

import Section from "@/components/Section"
import SectionHeading from "@/components/SectionHeading"
import CategoryBox from "../components/CategoryBox"
import { scrollerContext } from "@/app/scrollerContext"
// import { useState, useEffect } from "react"
import { useRef } from "react"
// import { client } from "@/sanityClient";
import { categories } from "@/app/data"

const Categories = () => {
    // const [categories, setCategories] = useState([])

    const scrollerRef = useRef<HTMLDivElement>(null)

    // useEffect(() => {
    //     client.fetch(`*[_type == "category"]{category, "img": icon.asset->url}`).then((res) => setCategories(res))
    // })

  return (
    <scrollerContext.Provider value={scrollerRef}>
      <Section>
        <SectionHeading subheading="Categories" heading="Browse by Category" />
          <div ref={scrollerRef} className="flex gap-4 overflow-scroll scrollbar-hidden">
              {categories.map((catg:{category: string, img: string}) => <CategoryBox key={catg.category} imgUrl={catg.img} category={catg.category} />)}
          </div>
      </Section>
    </scrollerContext.Provider>
  )
}

export default Categories