'use client'

import Counter from "../../../../components/Counter"
import {
    HeartIcon,
} from "@heroicons/react/24/outline"
import { cn } from "@/utils/cn"
import { useState, useContext } from "react"
import CartButton from "./CartButton"
import { ProductContext } from "@/app/productContext"
import { quantityContext } from "@/app/quantityContext"

const Action = () => {
    const [isFavorite, setIsFavorite] = useState(false)
    const { _id, stock } = useContext(ProductContext)
    const [ quantity, setQuantity ] = useState(1)

    function addToWishList() {
        setIsFavorite(true)
    }

    return (
        <quantityContext.Provider value={{ quantity, setQuantity }}>
            <div className={cn(
                "mt-4 min-[420px]:flex min-[420px]:gap-3 min-[420px]:items-center",
                stock == 0 && "hidden"
                )}>
                <Counter className="max-[420px]:mb-4" stock={stock} />
                <div className="flex gap-3">
                    <CartButton id={_id} />
                    <button onClick={addToWishList} className={cn(
                        "block cursor-pointer border border-gray-400 p-2.5 rounded-md hover:border-btn-2",
                        isFavorite && "bg-btn-2"
                    )}>
                        <HeartIcon className={cn("size-6", isFavorite && "invert-100")} />
                    </button>
                </div>
            </div>
        </quantityContext.Provider>
    )
}

export default Action