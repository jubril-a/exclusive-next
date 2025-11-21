import { client } from "@/src/utils/sanityClient"
import ProductClient from "./components/ProductClient"
import ProductScroller from "@/src/components/ProductScroller"

export default async function page({ params }: { params: {productId: string}}) {

  const { productId } = await params
  const query = `
    *[_type == "product"][_id == "${productId}"]{
      _id,
      productName,
      price,
      discount,
      "imageUrl": productImage.asset->url,
      desc,
      stock,
      "categorySlug": category->slug.current
  }`

  const productData = await client.fetch(query)

  return (
    <>
      <ProductClient data={productData[0]} />
      <ProductScroller type="category" heading="You Might Also Like" subheading={"Related Items"} category={productData[0].categorySlug} exclude={productId}  />
    </>
  )
}