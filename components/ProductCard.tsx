import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline"

type Props = {
    imgUrl: string,
    imgDescription: string,
    name: string,
    price: number,
    isDiscounted: boolean,
    discount: number
}

const ProductCard = ({imgUrl, imgDescription, name, price, isDiscounted, discount}: Props) => {
  return (
    <div className="border border-gray-200 p-2 rounded-lg">
        <div className="relative flex justify-center rounded-lg items-center w-60 h-60 bg-gray-200">
            <span className="absolute top-2 left-2 bg-btn-2 text-white px-2 py-1 rounded-md inline-block text-sm">-{discount}%</span>
            <div className="absolute right-2 top-2">
              <div className="bg-white p-1 rounded-full mb-2"><HeartIcon className="max-[400px]:hidden size-6" /></div>
              <div className="bg-white p-1 rounded-full"><EyeIcon className="max-[400px]:hidden size-6" /></div>
            </div>
            <img src={imgUrl} alt={imgDescription} />
        </div>
        <div>
            <h4 className="font-medium my-2 line-clamp-2">{name}</h4>
            <div className="flex gap-4">
              {isDiscounted && <span className="text-btn-2">₦{price - (price * (discount / 100))}</span>}
              <span className="text-gray-300 line-through">₦{price}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard