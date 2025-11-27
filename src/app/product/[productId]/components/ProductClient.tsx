'use client'

import Section from "@/src/components/Section"
import ProductInfo from "./ProductInfo"
import Action from "./Action"
import Perks from "./Perks"
import { ProductContext } from "@/src/contexts/productContext"

type Props = {
  data: {
    _id: string,
    productName: string,
    imageUrl: string,
    price: number,
    discount: number,
    product_desc: string,
    stock: number,
    categorySlug: string
  }
}

export default function ProductClient({ data }: Props) {

  return (
    <ProductContext.Provider value={data}>
        <Section className="grid gap-6 min-[820px]:grid-cols-2 min-[880px]:gap-12">
        <div className="bg-gray-200 flex justify-center items-center p-8">
           <img src={data.imageUrl} alt={data.productName} />
        </div>
        <div className="py-6">
            <ProductInfo />
            <Action />
            <Perks />
        </div>
    </Section>
    </ProductContext.Provider>
  )
}
