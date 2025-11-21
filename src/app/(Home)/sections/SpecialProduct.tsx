import Section from "@/src/components/Section"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Speaker from "@/public/jbl.png"
import Image from "next/image"

const SpecialProduct = () => {
  return (
    <Section>
        <div className="min-[1080px]:flex gap-4 bg-black max-[1080px]:pt-12 text-white px-8 min-[640px]:px-16 justify-between items-center">
          <div>
            <h2>Special Offer: <span className="text-btn-1">JBL Speaker</span></h2>
            <h3 className="text-[32px] min-[400px]:text-5xl font-semibold my-6 leading-10 min-[400px]:leading-14 max-w-[392px]">Enhance Your Music Experience</h3>
            <a href="/product/2555156e-2274-4955-af76-3cab87e8d290" className="flex gap-1">
              <span className="border-b border-white">Shop Now</span>
              <ArrowRightIcon className="size-5"/>
            </a>
          </div>
          <div className="max-[1080px]:mt-8 min-[1080px]:shrink-0">
            <Image src={Speaker} className="block ml-auto" alt="image of an iphone" />
          </div>
        </div>
    </Section>
  )
}

export default SpecialProduct
