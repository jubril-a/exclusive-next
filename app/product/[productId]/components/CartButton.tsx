import { quantityContext } from "@/app/quantityContext"
import { useContext } from "react"
import { addToCart } from "@/utils/data/supabase"

const CartButton = ({id}: {id: string}) => {

    const {quantity, setQuantity} = useContext(quantityContext)

    const handleClick = () => {
      const response = addToCart(id, quantity)
      // TODO: show error/success message on response resolve
    }

  return (
    <button onClick={handleClick} className="block bg-btn-2 border border-btn-2 text-white px-6 py-2.5 rounded-md hover:bg-btn-3 hover:cursor-pointer w-fit">Add to Cart</button>
    
  )
}

export default CartButton