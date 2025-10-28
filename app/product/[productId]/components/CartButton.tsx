import { createClient } from "@/utils/supabase/client"
import { quantityContext } from "@/app/quantityContext"
import { useContext } from "react"

const CartButton = ({id}: {id: string}) => {

    const {quantity, setQuantity} = useContext(quantityContext)

    async function getQuantity() {
      const supabase = await createClient()

      const { data, error } = await supabase
        .from('cart')
        .select()

        if (data && data[0].product_id == id) {
          return data[0].quantity
        }

        return 0
    }

    async function addToCart(e: React.MouseEvent) {
        const supabase = await createClient()
        const prev_quantity = await getQuantity()

        const { error } = await supabase
        .from('cart')
        .upsert({ product_id: id, quantity: prev_quantity + quantity }, { onConflict: 'product_id' })

        console.log(error)
    }

  return (
    <button onClick={(e) => addToCart(e)} className="block bg-btn-2 border border-btn-2 text-white px-6 py-2.5 rounded-md hover:bg-btn-3 hover:cursor-pointer w-fit">Add to Cart</button>
    
  )
}

export default CartButton