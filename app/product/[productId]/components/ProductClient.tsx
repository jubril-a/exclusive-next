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
    colors: string[],
  }
}

export default function ProductClient({ data }: Props) {
  return (
    <>
        <ProductDisplay {...data} />
        <ProductScroller type="special" heading="You Might Also Like" subheading={"Related Items"} category="bestSelling"  />
        <Footer />
    </>
  )
}
