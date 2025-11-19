'use client'

import Button from "@/components/Button"
import Counter from "@/components/Counter"
import { removeFromCart } from "@/utils/data/supabase"
import { useState } from "react"

type Props = {
  _id: string,
  productName: string,
  imageUrl: string,
  price: number,
  discount: number,
  stock: number
}

const ItemClient = ({ _id, productName, imageUrl, price, discount, stock }: Props) => {

  const [isInCart, setInCart] = useState(true)

  function handleClick() {
    const response = removeFromCart(_id)
    setInCart(false)
  }

  return (
    isInCart &&
    <div className="py-4 border-b border-gray-100">
      <div className="min-[480px]:flex min-[480px]:justify-between items-center mb-4 min-[480px]:gap-8">
        <div className="flex gap-4 max-[480px]:mb-4 items-center">
          <img className="h-[80px]" src={imageUrl} alt="" />
          <h2 className="max-w-[400px] line-clamp-2">{productName}</h2>
        </div>
        <span className="text-xl font-semibold">₦{(price - (price * (discount / 100))).toLocaleString('en-US')}</span>
      </div>
      <div className="flex max-[360px]:flex-col min-[360px]:justify-between min-[360px]:items-center gap-4">
        <Button clickHandler={handleClick}>Remove</Button>
        <Counter className="order-[-1]" stock={stock}/>
      </div>
    </div>
  )
}

export default ItemClient