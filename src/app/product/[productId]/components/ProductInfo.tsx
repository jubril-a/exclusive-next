import { ProductContext } from "@/src/app/productContext"
import Rating from "@/components/Rating"
import { useContext } from "react"

const ProductInfo = () => {

    const {productName, stock, price, product_desc, discount} = useContext(ProductContext)

    return (
        <>
            <h1 className="text-3xl sm:text-3xl font-bold">{productName}</h1>
            <div className="flex gap-4 my-4">
                <Rating />
                <span className="text-btn-1 pl-4 border-l border-black">{stock ? "In Stock" : "Out of Stock"}</span>
            </div>
            <span className="text-3xl font-bold">₦{(price - (price * (discount / 100))).toLocaleString('en-US')}</span>
            <div className="my-4 pb-4 border-b border-black"><p className="max-w-140">{product_desc}</p></div>
        </>
    )
}

export default ProductInfo