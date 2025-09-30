import Hero from "./sections/Hero"
import Categories from "./sections/Categories"
import NewArrival from "./sections/NewArrival"
import ProductScroller from "@/components/ProductScroller"
import SpecialProduct from "./sections/SpecialProduct"
import Perks from "./sections/Perks"
import Footer from "./sections/Footer"


const Home = () => {

  return (
    <>
      <Hero />
      <ProductScroller heading="Flash Sales" subheading="Today's" />
      <Categories />
      <ProductScroller subheading={"This Month"} heading="Best Selling Products" />
      <SpecialProduct />
      <NewArrival />
      <ProductScroller heading="Men's Fashion" subheading="Brand Festival Deals" />
      <ProductScroller heading="Women's Fashion" subheading="Brand Festival Deals" />
      <ProductScroller heading="Appliances Deals" subheading="Brand Festival Deals" />
      <ProductScroller heading="Gaming Deals" subheading="Brand Festival Deals" />
      <Perks />
      <Footer />
    </>
  )
}

export default Home