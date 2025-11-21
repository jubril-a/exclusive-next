'use client'

import Counter from "../../../../components/Counter"
import { cn } from "@/src/utils/cn"
import { useState, useContext } from "react"
import CartButton from "./CartButton"
import { ProductContext } from "@/src/app/productContext"
import { quantityContext } from "@/src/app/quantityContext"

const Action = () => {
    const { _id, stock } = useContext(ProductContext)
    const [ quantity, setQuantity ] = useState(1)

    return (
        <quantityContext.Provider value={{ quantity, setQuantity }}>
            <div className={cn(
                "mt-4 min-[420px]:flex min-[420px]:gap-3 min-[420px]:items-center",
                stock == 0 && "hidden"
                )}>
                <Counter className="max-[420px]:mb-4" stock={stock} />
                <CartButton id={_id} />
            </div>
        </quantityContext.Provider>
    )
}

export default Action