import CartClient from "./CartClient"
import { createClient } from "@/utils/supabase/server"

const Cart = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase
  .from('cart')
  .select('product_id')

  return <CartClient data={data} />
}

export default Cart


