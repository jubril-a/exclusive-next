import Rating from "@/components/Rating"

type Props = {
    name: string,
    stock: number,
    price: number,
    description: string,
    colors: string[],
    discount: number
}

const ProductInfo = ({name, stock, price, description, colors, discount}: Props) => {
    return (
        <>
            <h1 className="text-3xl sm:text-3xl font-bold">{name}</h1>
            <div className="flex gap-4 my-4">
                <Rating />
                <span className="text-btn-1 pl-4 border-l border-black">{stock ? "In Stock" : "Out of Stock"}</span>
            </div>
            <span className="text-2xl font-medium">₦{price - (price * (discount / 100))}</span>
            <div className="my-4 pb-4 border-b border-black"><p className="max-w-140">{description}</p></div>

            {colors && <div className="flex gap-1 items-center">
                <span className="pr-2">Colors:</span>
                {colors.map((color) => <span className="p-2.5 rounded-full" style={{"backgroundColor": color}}></span>)}
            </div>}
        </>
    )
}

export default ProductInfo