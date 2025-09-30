import ProductDisplay from "./components/ProductDisplay"
import ProductScroller from "@/components/ProductScroller"
import Footer from "../(Home)/sections/Footer"

const page = () => {

  return (
    <>
      <ProductDisplay id="gamepad" />
      <ProductScroller heading="You Might Also Like" subheading={"Related Items"} />
      <Footer />
    </>
  )
}

export default page