import ProductDisplay from "./ProductDisplay"
import ProductScroller from "@/components/ProductScroller"
import Footer from "@/components/Footer"

type Props = {
  data: {
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
    <>
        <ProductDisplay {...data} />
        <ProductScroller type="category" heading="You Might Also Like" subheading={"Related Items"} category={data.categorySlug}  />
        <Footer />
    </>
  )
}
