import { cn } from "@/utils/cn"

type Props = {
  stock: number,
  className: string
}

const Counter = ({stock, className}: Props) => {

  // const increment () => {
  //   let quantity = Number(inputRef.current.innerText)

  //   if (quantity < stock) {
  //     inputRef.current.innerText = quantity + 1
  //   }
  // }

  return (
    <div className={cn(
      "flex border border-gray-400 rounded-md overflow-hidden w-fit text-lg",
       className
      )}>
        <button className="py-2 px-5 bg-btn-2 hover:bg-btn-3 cursor-pointer text-white">-</button>
        <p className="py-2 px-7 border-x border-gray-400">0</p>
        <button className="py-2 px-5 bg-btn-2 hover:bg-btn-3 cursor-pointer text-white">+</button>
    </div>
  )
}

export default Counter