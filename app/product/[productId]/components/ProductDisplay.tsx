import Section from "@/components/Section"
import ProductInfo from "./ProductInfo"
import Action from "./Action"
import Perks from "./Perks"

type Props = {
  productName: string,
  imageUrl: string,
  price: number,
  discount: number,
  product_desc: string,
  stock: number,
}

const ProductDisplay = ({ productName, imageUrl, price, discount, product_desc, stock}:Props) => {
    
  return (
    <Section className="grid gap-6 min-[820px]:grid-cols-2 min-[880px]:gap-12">
        <div className="bg-gray-200 flex justify-center items-center p-8">
           <img src={imageUrl} alt={productName} />
        </div>
        <div className="py-6">
            <ProductInfo name={productName} stock={stock} price={price} description={product_desc} discount={discount} />
            <Action stock={stock}/>
            <Perks />
        </div>
    </Section>
  )
}

export default ProductDisplay