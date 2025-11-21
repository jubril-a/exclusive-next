import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

const InfoBox = () => {
  return (
    <div className="flex min-[920px]:flex-col max-[640px]:flex-col gap-8 min-[920px]:max-w-76 text-gray-700">
        <div>
            <div className="flex items-center mb-5 gap-4">
                <div className="bg-btn-2 p-3 rounded-full">
                    <PhoneIcon className="size-6 text-white" /> 
                </div>
                <h2 className="font-medium text-xl text-gray-900">Call us</h2>
            </div>
            <p className="mb-2">We are available 24/7</p>
            <p>Phone: (+234) 9072306028</p>
        </div>
        <div>
            <div className="flex items-center mb-5 gap-4">
                <div className="bg-btn-2 p-3 rounded-full">
                    <EnvelopeIcon className="size-6 text-white" /> 
                </div>
                <h2 className="font-medium text-xl text-gray-900">Write to us</h2>
            </div>
            <p className="mb-2">Send us a mail and we'll contact you within 24 hours</p>
            <p>Email: support@exclusive.com</p>
            <p>Email: complaints@exclusive.com</p>
        </div>
    </div>
  )
}

export default InfoBox

