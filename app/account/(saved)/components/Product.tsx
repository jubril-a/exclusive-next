import Button from "@/components/Button"
import Counter from "@/components/Counter"

const Product = () => {

  function handleClick() {

  }

  return (
    <div className="py-4 border-b border-gray-100">
      <div className="min-[480px]:flex min-[480px]:justify-between mb-4 min-[480px]:gap-8">
        <div className="flex gap-4 max-[480px]:mb-4">
          <img className="h-[80px]" src="/mic.jpg" alt="" />
          <h2 className="max-w-[400px] line-clamp-2">Professional Vlogging Wired Mini For Camera lapel condenser Phone And Laptop mic Microphone</h2>
        </div>
        <span className="text-xl font-semibold">₦4,990</span>
      </div>
      <div className="flex max-[360px]:flex-col min-[360px]:justify-between min-[360px]:items-center gap-4">
        <Button clickHandler={handleClick}>Remove</Button>
        <Counter className="order-[-1]" stock={34}/>
      </div>
    </div>
  )
}

export default Product