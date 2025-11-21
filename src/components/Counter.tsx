'use client'

import { cn } from "@/src/utils/cn"
import { useRef, useState, useContext } from "react"
import AlertBox from "./AlertBox"
import { quantityContext } from "@/src/app/quantityContext"

type Props = {
  stock: number,
  className?: string
}

const Counter = ({stock, className}: Props) => {

  const [showAlert, setShowAlert] = useState(false)
  const alertContent = useRef({heading: "", message: ""})
  const counterRef = useRef<HTMLInputElement>(null)
  const { quantity, setQuantity } = useContext(quantityContext)

  function increment() {
    let quantity = Number(counterRef.current?.value)

    if (counterRef.current && quantity < stock) {
      setQuantity(quantity + 1)
      counterRef.current.value = String(quantity + 1)
    }
    
    if (quantity == stock) { 
        alertContent.current = {heading: "Error", message: `Sorry, we only have ${stock} of this product in stock`}
        setShowAlert(true)
    }
  }

  function decrement() {
    let quantity = Number(counterRef.current?.value)

    if (counterRef.current && quantity != 1) {
      setQuantity(quantity - 1)
      counterRef.current.value = String(quantity - 1)
    }
    
    if (quantity == 1) { 
        alertContent.current = {heading: "Error", message: "You can't order less than 1 unit"}
        setShowAlert(true)
    }
  }

  function checkStock() {
    let quantity = Number(counterRef.current?.value)

    if (counterRef.current && (quantity < 1 || quantity > stock)) {
      counterRef.current.value = "1"
      alertContent.current = {heading: "Error", message: "Quantity should be between 10 and 100"}
      setShowAlert(true)
    }
  }
 
  return (
    <div className={cn(
      "flex border border-gray-400 rounded-md overflow-hidden w-fit text-lg",
       className
      )}>
        {showAlert && <AlertBox {...alertContent.current} onClose={() => {setShowAlert(false)}} />}
        <button onClick={decrement} className="py-1 px-3 bg-btn-2 hover:bg-btn-3 cursor-pointer text-white">-</button>
        <input ref={counterRef} onBlur={checkStock} type="text" defaultValue="1" className="text-center p-2 border-x border-gray-400 w-[50px]" />
        <button onClick={increment} className="py-1 px-3 bg-btn-2 hover:bg-btn-3 cursor-pointer text-white">+</button>
    </div>
  )
}

export default Counter