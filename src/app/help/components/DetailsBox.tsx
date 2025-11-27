import Detail from "./Detail"
import {faq, CategoryType} from "../faq"
import { RefObject } from "react"

type Category = keyof typeof faq;

const DetailsBox = ({ ref, category }: {ref: RefObject<HTMLDivElement | null>, category: CategoryType}) => {
  return (
    <div ref={ref} id="faqs" className="bg-white border border-gray-200 rounded-xl grow">
      {
        faq[category].map((item) => (
          <Detail key={item.question} question={item.question} answer={item.answer} />
        ))
      }
    </div>
  )
}

export default DetailsBox