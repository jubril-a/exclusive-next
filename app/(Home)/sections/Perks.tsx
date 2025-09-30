import Section from "@/components/Section"

const Perks = () => {
  return (
    <Section>
        <div className="grid min-[640px]:grid-cols-3 gap-2">
            <div>
                <div className="rounded-full bg-gray-200 w-fit p-2 mx-auto mb-5">
                    <div className="grid justify-center content-center w-[56px] h-[56px] rounded-full bg-gray-900">
                        <img src="/icons/delivery.png" className="invert" alt="" />
                    </div>
                </div>
                <h3 className="text-center text-lg font-semibold  mb-1">FREE AND FAST DELIVERY</h3>
                <p className="text-center text-sm text-gray-600">Free delivery for all orders over $140</p>
            </div>
            <div>
                <div className="rounded-full bg-gray-200 w-fit p-2 mx-auto mb-5">
                    <div className="grid justify-center content-center w-[56px] h-[56px] rounded-full bg-gray-900">
                        <img src="/icons/support.png" className="invert" alt="" />
                    </div>
                </div>
                <h3 className="text-center text-lg font-semibold  mb-1">24/7 CUSTOMER SERVICE</h3>
                <p className="text-center text-sm text-gray-600">Friendly 24/7 customer support</p>
            </div>
            <div>
                <div className="rounded-full bg-gray-200 w-fit p-2 mx-auto mb-5">
                    <div className="grid justify-center content-center w-[56px] h-[56px] rounded-full bg-gray-900">
                        <img src="/icons/security.png" className="invert" alt="" />
                    </div>
                </div>
                <h3 className="text-center text-lg font-semibold  mb-1">MONEY BACK GUARANTEE</h3>
                <p className="text-center text-sm text-gray-600">We reurn money within 30 days</p>
            </div>
        </div>
    </Section>
  )
}

export default Perks