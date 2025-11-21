'use client'

import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { addToCart } from "@/src/utils/data/supabase"
import AlertBox from "./AlertBox"
import { useState } from "react"

type Props = {
  id: string,
  imgUrl: string,
  imgDescription: string,
  name: string,
  price: number,
  isDiscounted: boolean,
  discount: number,
}

type alertType = {
  state: "Success" | "Error",
  message: string
}

const ProductCard = ({id, imgUrl, imgDescription, name, price, isDiscounted, discount}: Props) => {

  const [alertState, setAlertState] = useState<false | alertType>(false);

  function handleClick() {
   addToCart(id, 1).then((response) => {

    if (response == "success") {
      setAlertState({state: "Success", message: `A unit of ${name} added to cart.`})
    } else {
      setAlertState({state: "Error", message: `Make sure you are logged in then try again.`})
    }

   })
  }

  return (
    <div className="relative border border-gray-200 p-2 pb-4 rounded-lg w-fit">
      {alertState && <AlertBox heading={alertState.state} message={alertState.message} onClose={() => setAlertState(false)} />}
      <a className="absolute inset-0 z-2" href={`/product/${id}`}></a>
      <div className="relative flex justify-center rounded-lg items-center w-60 h-60 bg-gray-200">
          {discount != 0 && <span className="absolute top-2 left-2 bg-btn-2 text-white px-2 py-1 rounded-md inline-block text-sm">-{discount}%</span>}
          <div className="absolute z-3 right-2 top-2 grid gap-1">
            <button onClick={handleClick} className="bg-white p-1 rounded-full border border-gray-200 cursor-pointer">
              <ShoppingCartIcon className="size-6" />
            </button>
          </div>
          <img src={imgUrl} alt={imgDescription} />
      </div>
      <div className="w-60">
          <h4 className="font-medium my-2 line-clamp-1 text-gray-900">{name}</h4>
          <div className="flex gap-4">
            <span className="text-btn-2">₦{(price - (price * (discount / 100))).toLocaleString('en-US')}</span>
            {discount != 0 && <span className="text-gray-300 line-through">₦{price}</span>}
          </div>
      </div>
    </div>
  )
}

export default ProductCard