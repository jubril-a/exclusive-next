import { client } from "@/utils/sanityClient"
import ProductClient from "./components/ProductClient"

export default async function page({ params }: { params: {productId: string}}) {

  const { productId } = await params
  const query = `
    *[_type == "product"][_id == "${productId}"]{
      productName,
      price,
      discount,
      "imageUrl": productImage.asset->url,
      desc,
      stock,
  }`

  const productData = await client.fetch(query)

  return <ProductClient data={productData[0]} />
}