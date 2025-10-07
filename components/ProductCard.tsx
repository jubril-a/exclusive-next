import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { cn } from "@/utils/cn"

type Props = {
    imgUrl: string,
    imgDescription: string,
    name: string,
    price: number,
    isDiscounted: boolean,
    discount: number,
    productId: string
}

const ProductCard = ({imgUrl, imgDescription, name, price, isDiscounted, discount, productId}: Props) => {

  const [isFavorite, setIsFavorite] = useState(false)
  const [isInCart, setIsIncart] = useState(false)
  
  function addToWishList() {
    setIsFavorite(!isFavorite)
  }

  function addToCart() {
    setIsIncart(!isInCart)
  }

  return (
    <div className="relative border border-gray-200 p-2 pb-4 rounded-lg">
      <a className="absolute inset-0 z-2" href={`/product/${productId}`}></a>
      <div className="relative flex justify-center rounded-lg items-center w-60 h-60 bg-gray-200">
          {discount != 0 && <span className="absolute top-2 left-2 bg-btn-2 text-white px-2 py-1 rounded-md inline-block text-sm">-{discount}%</span>}
          <div className="absolute z-3 right-2 top-2 grid gap-1">
            <button onClick={addToWishList} className={cn(
              "bg-white p-1 rounded-full border border-gray-200 cursor-pointer",
              isFavorite && "bg-btn-2"
              )}>
              <HeartIcon className={cn(
                "size-6",
                isFavorite && "invert-100"
                )} />
            </button>
            <button onClick={addToCart} className={cn(
              "bg-white p-1 rounded-full border border-gray-200 cursor-pointer",
              isInCart && "bg-btn-2"
              )}>
              <ShoppingCartIcon className={cn(
                "size-6",
                isInCart && "invert-100"
                )} />
            </button>
          </div>
          <img src={imgUrl} alt={imgDescription} />
      </div>
      <div>
          <h4 className="font-medium my-2 line-clamp-1">{name}</h4>
          <div className="flex gap-4">
            <span className="text-btn-2">₦{(price - (price * (discount / 100))).toLocaleString('en-US')}</span>
            {discount != 0 && <span className="text-gray-300 line-through">₦{price}</span>}
          </div>
      </div>
    </div>
  )
}

export default ProductCard