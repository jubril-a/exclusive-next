import { client } from "@/utils/sanityClient"
import { categoryQuery } from "@/utils/queries"
import CategoriesClient from "./CategoriesClient"

export default async function Categories() {
    const categories = await client.fetch(categoryQuery)

  return <CategoriesClient categories={categories} />
}