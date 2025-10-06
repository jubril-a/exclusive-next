import Counter from "./Counter"
import {
    HeartIcon,
} from "@heroicons/react/24/outline"
import { cn } from "@/utils/cn"

const Action = ({stock}: {stock: number}) => {
    return (
        <div className={cn(
            "mt-4 min-[420px]:flex min-[420px]:gap-3 min-[420px]:items-center",
            stock == 0 && "hidden"
            )}>
            <Counter className="max-[420px]:mb-4" stock={stock} />
            <div className="flex gap-3">
                <a href="" className="block bg-btn-2 border border-btn-2 text-white px-6 py-2.5 rounded-md hover:bg-btn-3 hover:cursor-pointer w-fit">Buy Now</a>
                <button className="block cursor-pointer border border-gray-400 p-2.5 rounded-md hover:bg-btn-2 hover:invert-100"><HeartIcon className="size-6" /></button>
            </div>
        </div>
    )
}

export default Action