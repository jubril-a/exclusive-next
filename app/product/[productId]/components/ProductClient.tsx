'use client'

import ProductDisplay from "./ProductDisplay"
import ProductScroller from "@/components/ProductScroller"
import { ProductContext } from "@/app/productContext"

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
        <ProductDisplay />
        {/* <ProductScroller type="category" heading="You Might Also Like" subheading={"Related Items"} category={data.categorySlug}  /> */}
    </ProductContext.Provider>
  )
}
