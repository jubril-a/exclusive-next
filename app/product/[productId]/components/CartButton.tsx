import { createClient } from "@/utils/supabase/client"
import { quantityContext } from "@/app/quantityContext"
import { useContext } from "react"

const CartButton = ({id}: {id: string}) => {

    const {quantity, setQuantity} = useContext(quantityContext)

    async function addToCart(e: React.MouseEvent) {
        const supabase = await createClient()
        const { error } = await supabase
        .from('cart')
        .insert({ product_id: id, quantity: quantity })

        console.log(error)
    }

  return (
    <button onClick={(e) => addToCart(e)} className="block bg-btn-2 border border-btn-2 text-white px-6 py-2.5 rounded-md hover:bg-btn-3 hover:cursor-pointer w-fit">Add to Cart</button>
    
  )
}

export default CartButton