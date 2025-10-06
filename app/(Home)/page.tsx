import Hero from "./sections/Hero"
import Categories from "./sections/Categories"
import NewArrival from "./sections/NewArrival"
import ProductScroller from "@/components/ProductScroller"
import SpecialProduct from "./sections/SpecialProduct"
import Perks from "./sections/Perks"

const Home = () => {

  return (
    <>
      <Hero />
      <ProductScroller type="special" heading="Flash Sales" subheading="Today's" category="flashSales" />
      <Categories />
      <ProductScroller type="special" subheading={"This Month"} heading="Best Selling Products" category="bestSelling" />
      <SpecialProduct />
      <NewArrival />
      <ProductScroller type="category" heading="Computing" subheading="Brand Festival Deals" category="computing" />
      <ProductScroller type="category" heading="Men's Fashion" subheading="Brand Festival Deals" category="men-s-fashion" />
      <ProductScroller type="category" heading="Women's Fashion" subheading="Brand Festival Deals" category="women-s-fashion" />
      <ProductScroller type="category" heading="Electronics" subheading="Brand Festival Deals" category="electronics" />
      <ProductScroller type="category" heading="Phones & Tablets" subheading="Brand Festival Deals" category="phones-and-tablet" />
      <ProductScroller type="category" heading="Gaming Deals" subheading="Brand Festival Deals" category="gaming" />
      <ProductScroller type="category" heading="Home and Office" subheading="Brand Festival Deals" category="home-and-office" />
      <ProductScroller type="category" heading="Health and Beauty" subheading="Brand Festival Deals" category="health-and-beauty" />
      <ProductScroller type="category" heading="Appliances" subheading="Brand Festival Deals" category="appliances" />
      <ProductScroller type="category" heading="Groceries" subheading="Brand Festival Deals" category="groceries" />
      <Perks />
    </>
  )
}

export default Home