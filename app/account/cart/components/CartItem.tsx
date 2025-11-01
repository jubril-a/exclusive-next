import { client } from "@/utils/sanityClient"
import CartItemClient from "./ItemClient"

const CartItem = async ({id}: {id: string}) => {

    const getProduct = async () => {

      const query = `
        *[_type == "product"][_id == "${id}"]{
          _id,
          productName,
          price,
          discount,
          "imageUrl": productImage.asset->url,
          stock,
        }`

      const data = await client.fetch(query)
      return data[0]

    }

    const productData = await getProduct()

  return <CartItemClient {...productData} />
}

export default CartItem

