import { client } from "@/src/utils/sanityClient"
import CategoriesClient from "./CategoriesClient"

const categoryQuery = `*[_type == "category"]{"slug": slug.current, category, "img": icon.asset->url}`

export default async function Categories() {
    const categories = await client.fetch(categoryQuery)

  return <CategoriesClient categories={categories} />
}