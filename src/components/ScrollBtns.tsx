import { useContext } from "react"
import { scrollerContext } from "@/src/app/scrollerContext"

import {
    ArrowLeftIcon,
    ArrowRightIcon
} from "@heroicons/react/24/outline"

const ScrollBtns = () => {

  const scrollerRef = useContext(scrollerContext);

  const scroll = (direction: "forward" | "backward") => {
    if (scrollerRef?.current) {

      const multiplier = direction == "forward" ? 1 : -1
      scrollerRef.current.scrollBy({ left: multiplier * scrollerRef.current.clientWidth, behavior: "smooth" });
    }
  }

  return (
    <div className="max-sm:hidden">
        <button onClick={() => scroll("backward")} className="bg-[#F5F5F5] hover:bg-btn-1 cursor-pointer rounded-full p-2.5 md:p-3.5 mr-4">
            <ArrowLeftIcon className="size-6" />
        </button>
        <button onClick={() => scroll("forward")} className="bg-[#F5F5F5] hover:bg-btn-1 cursor-pointer rounded-full p-2.5 md:p-3.5">
            <ArrowRightIcon className="size-6" />
        </button>
    </div>
  )
}

export default ScrollBtns