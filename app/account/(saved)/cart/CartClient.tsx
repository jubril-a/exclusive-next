import Constraint from "@/components/Constraint"
import CartItem from "../components/CartItem"
import CartHead from "./CartHead"

type Props = {
    data: { product_id: string; }[] | null
}

const CartClient = ({ data }: Props) => {

  return (
    <div className="bg-gray-50 py-10 min-[1000px]:py-20">
        <Constraint size="960px">
            <CartHead />
            <div className="bg-white p-4 rounded-lg mb-10 shadow-md border border-gray-100">
                <div className="px-2 min-[480px]:px-10">
                    {data?.map((cart_item) => (
                        <CartItem key={cart_item.product_id} id={cart_item.product_id} />
                    ))}
                </div>
            </div>
        </Constraint>
    </div>
  )
}

export default CartClient