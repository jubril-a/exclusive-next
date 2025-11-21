import { client } from "@/src/utils/sanityClient"
import CartClient from "./CartClient"
import { createClient } from "@/src/utils/supabase/server"

const Cart = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase
  .from('cart')
  .select('product_id')

  if (data?.length) {
    const ids = data?.map((item) => `_id == "${item.product_id}"`) || []
    const getProduct = async () => {
    
      const query = `
        *[_type == "product"][${ids.join(" || ")}]{
          _id,
          productName,
          price,
          discount,
          "imageUrl": productImage.asset->url,
          stock,
        }`

      const data = await client.fetch(query)
      return data
    }
    
    const productsData = await getProduct()

    return <CartClient data={productsData} />
  } else {
    return <CartClient data={[]} />
  }

}

export default Cart


