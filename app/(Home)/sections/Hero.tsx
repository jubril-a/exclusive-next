import { client } from "@/utils/sanityClient"
import HeroClient from "./HeroClient"

const categoryQuery = `*[_type == "category"]{"slug": slug.current, category, "img": icon.asset->url}`

export default async function Hero() {
  const categories = await client.fetch(categoryQuery)

  return <HeroClient categories={categories} />
}
