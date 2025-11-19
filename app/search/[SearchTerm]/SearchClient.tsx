import Section from "@/components/Section"
import ProductCard from "@/components/ProductCard"

type ProductType = {
  _id: string,
  imgUrl: string,
  imgDescription: string,
  productName: string,
  price: number,
  isDiscounted: boolean,
  discount: number,
}

const SearchClient = ({term, matchedProducts}: {term: string, matchedProducts: ProductType[]}) => {

  return (
    <Section>
        <h1 className="text-5xl font-semibold my-6 leading-14">Related Results:</h1>
        {matchedProducts.length == 0 && <span className="text-red-600">Sorry. No product matches the term "{term}"</span>}
        <div className="flex gap-4 flex-wrap">
            {matchedProducts.map((product: ProductType) => (
                <ProductCard
                id={product._id}
                key={product.productName}
                imgUrl={product.imgUrl}
                imgDescription={product.productName}
                name={product.productName}
                price={product.price}
                isDiscounted={true}
                discount={product.discount}
            />
            ))}
        </div>
    </Section>
  )
}

export default SearchClient