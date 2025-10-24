'use client'

import Constraint from "@/components/Constraint"
import Product from "../components/Product"
import Button from "@/components/Button"

const CartClient = () => {

    function handleClick() {

    }

  return (
    <div className="bg-gray-50 py-10 min-[1000px]:py-20">
        <Constraint size="960px">
            <div className="mb-4 flex justify-between items-center">
                <h1 className="font-semibold text-xl">My Cart ()</h1>
                <Button clickHandler={handleClick}>Check Out</Button>
            </div>
            <div className="bg-white p-4 rounded-lg mb-10 shadow-md border border-gray-100">
                <div className="px-2 min-[480px]:px-10">
                    <Product />
                </div>
            </div>
        </Constraint>
    </div>
  )
}

export default CartClient