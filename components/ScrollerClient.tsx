"use client"

import SectionHeading from "./SectionHeading"
import Section from "./Section"
import ProductCard from "./ProductCard"
import { useRef } from "react"
import { scrollerContext } from "@/app/scrollerContext"

type Props = {
  heading: string,
  subheading: string,
  data: any,
}

const ScrollerClient = ({ heading, subheading, data }:Props) => {

  const scrollerRef = useRef<HTMLDivElement>(null)

  return (
    <scrollerContext.Provider value={scrollerRef}>
      <Section>
        <SectionHeading subheading={subheading} heading={heading} />
        <div ref={scrollerRef} className="flex gap-4 overflow-scroll scrollbar-hidden">
          {data.map((product: {productName: string, imageUrl: string, price: number, discount: number}) => (
            <ProductCard
              key={product.productName}
              imgUrl={product.imageUrl}
              imgDescription={product.productName}
              name={product.productName}
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

export default ScrollerClient