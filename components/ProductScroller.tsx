import { client } from "@/utils/sanityClient"
import ScrollerClient from "./ScrollerClient"

type Props = {
  type: 'category' | 'special',
  heading: string,
  subheading: string,
  category: string,
}

export default async function ProductScroller({ type, heading, subheading, category }: Props) {

  let query = ""

  switch (type) {
    case 'category':
      query = `
        *[_type == "product" && category->slug.current == "${category}"]{
          _id,
          productName,
          price,
          discount,
          "imageUrl": productImage.asset->url,
        }`
       break;

    case 'special':
      query = `
        *[_type == "${category}"]{
          ...productReference->{
          _id,
          productName,
          price,
          discount,
          "imageUrl": productImage.asset->url,
          desc}
        }`
       break;
  }


  const data = await client.fetch(query)

  return <ScrollerClient categoryId={category} heading={heading} subheading={subheading} data={data} />
}

