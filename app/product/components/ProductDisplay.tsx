import Section from "@/components/Section"
import { products } from "@/app/data"
import ProductInfo from "./ProductInfo"
import Action from "./Action"
import Perks from "./Perks"

type Props = {
    id: string
}

const ProductDisplay = ({id}:Props) => {
    
    const product = products.filter((product) => product.id == id)[0]

  return (
    <Section className="grid gap-6 min-[820px]:grid-cols-2 min-[880px]:gap-12">
        <div className="bg-gray-200 flex justify-center items-center p-8">
           <img src={product.image} alt={product.name} />
        </div>
        <div className="py-6">
            <ProductInfo name={product.name} stock={product.stock} price={product.price} description={product.description} colors={product.colors} />
            <Action stock={product.stock}/>
            <Perks />
        </div>
    </Section>
  )
}

export default ProductDisplay