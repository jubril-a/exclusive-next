import { RefObject } from "react"
import ScrollBtns from "./ScrollBtns"

type Props = {
    id?: string,
    heading?: string,
    subheading: string,
    showBtns?: boolean
}

const SectionHeading = ({id, heading="", subheading, showBtns=true}: Props) => {

  return (
    <div className="mb-8">
        <div className="flex gap-2 items-center mb-4">
            <div className="w-5 h-10 bg-btn-2"></div>
            <h3 className="text-gray-800">{subheading}</h3>
        </div>
        <div className="flex justify-between items-center">
          <h2 id={id} className="text-3xl md:text-4xl font-semibold text-gray-950">{heading}</h2>
          {showBtns && <ScrollBtns />}
        </div>
    </div>
  )
}

export default SectionHeading