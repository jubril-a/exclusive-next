'use client'

import Section from "@/components/Section"
import SectionHeading from "@/components/SectionHeading"
import CategoryBox from "../components/CategoryBox"
import { scrollerContext } from "@/app/scrollerContext"
import { useRef } from "react"

type Category = {
    slug: string,
    category: string,
    img: string
}

export default function CategoriesClient({categories}: {categories: Category[]}) {
    const scrollerRef = useRef<HTMLDivElement>(null)

  return (
    <scrollerContext.Provider value={scrollerRef}>
      <Section>
        <SectionHeading subheading="Categories" heading="Browse by Category" />
          <div ref={scrollerRef} className="flex gap-4 overflow-scroll scrollbar-hidden">
              {categories.map((catg:{slug: string, category: string, img: string}) => <CategoryBox id={catg.slug} key={catg.category} imgUrl={catg.img} category={catg.category} />)}
          </div>
      </Section>
    </scrollerContext.Provider>
  )
}