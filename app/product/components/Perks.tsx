import Image from "next/image"
import deliveryIcon from "@/public/icons/icon-delivery.png"
import returnIcon from "@/public/icons/Icon-return.png"

const Perks = () => {
    return (
        <div className="border border-gray-400 mt-8 rounded-lg">
            <div className="flex gap-3 min-[420px]:gap-4 items-center p-3 min-[420px]:p-5 border-b border-gray-400">
                <Image src={deliveryIcon} alt="" />
                <div>
                    <h3 className="font-medium">Free Delivery</h3>
                    <a href="" className="text-sm">Enter your postal code for Delivery Availability</a>
                </div>
            </div>
            <div className="flex gap-3 min-[420px]:gap-4 items-center p-3 min-[420px]:p-5">
                <Image src={returnIcon} alt="" />
                <div>
                    <h3 className="font-medium">Return Delivery</h3>
                    <p className="text-sm">Free 30 Days Delivery Returns. <a href="">Details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Perks