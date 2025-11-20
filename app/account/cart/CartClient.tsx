'use client'

import Constraint from "@/components/Constraint"
import CartItem from "./components/CartItem"
import Button from "@/components/Button"
import { useState } from "react"


type Props = {
    data: {
        _id: string,
        productName: string,
        imageUrl: string,
        price: number,
        discount: number,
        stock: number
    }[] | null
}

const CartClient = ({ data }: Props) => {

    const reload = useState(false)

    function handleCheckOut() { 
        // TODO: Check out
    }

  return (
    <div className="bg-gray-50 py-10 min-[1000px]:py-20">
        <Constraint className="flex gap-4 align-top" size="960px">
            <div className="bg-white p-4 rounded-lg mb-10 shadow-md border border-gray-100 grow">
                <div className="px-2 min-[480px]:px-4 py-6">
                 <h2 className="font-semibold text-xl mb-5 border-b border-gray-300 pb-4">{`Cart (${data?.length})`}</h2>
                    {data?.map((cart_item) => (
                        <CartItem key={cart_item._id} reload={reload} _id={cart_item._id} productName={cart_item.productName} imageUrl={cart_item.imageUrl} price={cart_item.price} discount={cart_item.discount} stock={cart_item.stock} />
                    ))}
                </div>
            </div>
            <div className="bg-white p-2 rounded-lg mb-10 shadow-md border border-gray-100 min-w-fit h-fit">
                <div className="p-5">
                    <h2 className="font-medium text-lg border-b border-gray-300 pb-4">Cart Summary</h2>
                    <p className="my-5 text-lg">{`Items Total (${data?.length}): ₦${data?.map((item) => item.price).reduce((a, b) => a + b, 0).toLocaleString('en-US')}`}</p>
                    <Button clickHandler={handleCheckOut}>Check Out</Button>
                </div>
            </div>
        </Constraint>
    </div>
  )
}

export default CartClient