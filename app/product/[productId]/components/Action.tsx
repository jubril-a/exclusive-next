'use client'

import Counter from "./Counter"
import {
    HeartIcon,
} from "@heroicons/react/24/outline"
import { cn } from "@/utils/cn"
import { useState } from "react"

const Action = ({stock}: {stock: number}) => {
    const [isFavorite, setIsFavorite] = useState(false)

    function addToWishList() {
        setIsFavorite(true)
    }

    function addToCart() {
        // add to cart
    }

    return (
        <div className={cn(
            "mt-4 min-[420px]:flex min-[420px]:gap-3 min-[420px]:items-center",
            stock == 0 && "hidden"
            )}>
            <Counter className="max-[420px]:mb-4" stock={stock} />
            <div className="flex gap-3">
                <button onClick={addToCart} className="block bg-btn-2 border border-btn-2 text-white px-6 py-2.5 rounded-md hover:bg-btn-3 hover:cursor-pointer w-fit">Add to Cart</button>
                <button onClick={addToWishList} className={cn(
                    "block cursor-pointer border border-gray-400 p-2.5 rounded-md hover:border-btn-2",
                    isFavorite && "bg-btn-2"
                )}>
                    <HeartIcon className={cn("size-6", isFavorite && "invert-100")} />
                </button>
            </div>
        </div>
    )
}

export default Action