import Section from "@/components/Section"
import ProductInfo from "./ProductInfo"
import Action from "./Action"
import Perks from "./Perks"
import { ProductContext } from "@/app/productContext"
import { useContext } from "react"

const ProductDisplay = () => {

  const { productName, imageUrl} = useContext(ProductContext)
    
  return (
    <Section className="grid gap-6 min-[820px]:grid-cols-2 min-[880px]:gap-12">
        <div className="bg-gray-200 flex justify-center items-center p-8">
           <img src={imageUrl} alt={productName} />
        </div>
        <div className="py-6">
            <ProductInfo />
            <Action />
            <Perks />
        </div>
    </Section>
  )
}

export default ProductDisplay