import { quantityContext } from "@/app/quantityContext"
import { useContext, useState } from "react"
import { addToCart } from "@/utils/data/supabase"
import AlertBox from "@/components/AlertBox"

type alertType = {
  state: "Success" | "Error",
  message: string
}

const CartButton = ({id}: {id: string}) => {

  const [alertState, setAlertState] = useState<false | alertType>(false);
  const {quantity, setQuantity} = useContext(quantityContext)

  const handleClick = () => {
    addToCart(id, quantity).then((response) => {

    if (response == "success") {
      setAlertState({state: "Success", message: "Product Added to Cart"})
    } else {
      setAlertState({state: "Error", message: `Make sure you are logged in then try again.`})
    }

   })
  }

  return (
    <>
      {alertState && <AlertBox heading={alertState.state} message={alertState.message} onClose={() => setAlertState(false)} />}
      <button onClick={handleClick} className="block bg-btn-2 border border-btn-2 text-white px-6 py-2.5 rounded-md hover:bg-btn-3 hover:cursor-pointer w-fit">Add to Cart</button>
    </>
  )
}

export default CartButton