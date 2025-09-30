"use client"

import SectionHeading from "./SectionHeading"
import Section from "./Section"
import ProductCard from "./ProductCard"
import { products } from "@/app/data"
import { useRef } from "react"
import { scrollerContext } from "@/app/scrollerContext"

type Props = {
  heading: string,
  subheading: string,
}

const ProductScroller = ({ heading, subheading }: Props) => {

  const scrollerRef = useRef<HTMLDivElement>(null)

  const data = products

  return (
    <scrollerContext.Provider value={scrollerRef}>
      <Section>
        <SectionHeading subheading={subheading} heading={heading} />
        <div ref={scrollerRef} className="flex gap-4 overflow-scroll scrollbar-hidden">
          {data.map((product: {name: string, image: string, price: number, discount: number}) => (
            <ProductCard
              key={product.name}
              imgUrl={product.image}
              imgDescription={product.name}
              name={product.name}
              price={product.price}
              isDiscounted={true}
              discount={product.discount}
          />
          ))}
        </div>
      </Section>
    </scrollerContext.Provider>
  )
}

export default ProductScroller

