"use client"

import SectionHeading from "./SectionHeading"
import Section from "./Section"
import ProductCard from "./ProductCard"
import { useRef } from "react"
import { scrollerContext } from "@/app/scrollerContext"

type Props = {
  categoryId: string,
  heading: string,
  subheading: string,
  data: any,
}

type ProductType = {
  _id: string,
  productName: string,
  imageUrl: string,
  price: number,
  discount: number
}

const ScrollerClient = ({ categoryId, heading, subheading, data }:Props) => {

  const scrollerRef = useRef<HTMLDivElement>(null)

  return (
    <scrollerContext.Provider value={scrollerRef}>
      <Section id={categoryId}>
        <SectionHeading subheading={subheading} heading={heading} />
        <div ref={scrollerRef} className="flex gap-4 overflow-scroll scrollbar-hidden mb-20">
          {data.map((product: ProductType) => (
            <ProductCard
              key={product.productName}
              id={product._id}
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