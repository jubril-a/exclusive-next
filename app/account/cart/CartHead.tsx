'use client'

import Button from "@/components/Button"

const CartHead = () => {

  function handleClick() { 
    // TODO: Check out
  }

  return (
    <div className="mb-4 flex justify-between items-center">
        <h1 className="font-semibold text-xl">My Cart</h1>
        <Button clickHandler={handleClick}>Check Out</Button>
    </div>
  )
}

export default CartHead