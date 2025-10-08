import { client } from "@/utils/sanityClient"
import SearchClient from "./SearchClient"

export default async function page({ params }: {params: {SearchTerm: string}}) {

    const { SearchTerm } = await params

    const query = `
        *[_type == "product" && productName match "*${SearchTerm}*"]{
            productName,
            price,
            discount,
            "imgUrl": productImage.asset->url,
            stock,
            "categorySlug": category->slug.current
    }`

    const data = await client.fetch(query)
 
  return <SearchClient term={SearchTerm} matchedProducts={data} />
}
