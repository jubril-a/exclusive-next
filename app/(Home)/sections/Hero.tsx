import { client } from "@/utils/sanityClient"
import { categoryQuery } from "@/utils/queries"
import HeroClient from "./HeroClient"

export default async function Hero() {
  const categories = await client.fetch(categoryQuery)

  return <HeroClient categories={categories} />
}
