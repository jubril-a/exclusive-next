'use client'

import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { Dispatch, SetStateAction, RefObject } from "react"
import { CategoryType } from "../faq"

type Props = {
  label: string,
  imgUrl: string,
  ref: RefObject<HTMLDivElement | null>,
  currentCategory: CategoryType,
  changeCategory:  Dispatch<SetStateAction<CategoryType>>
}

const Category = ({ label, imgUrl, ref, currentCategory, changeCategory }:Props) => {

  function handleClick() {
    changeCategory(label as CategoryType)

    const element = ref.current
    if (!element) return;
    
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: offsetPosition, behavior: "smooth"});
  }

  return (
    <button onClick={handleClick} className={`flex items-center justify-between w-full p-4 bg-white [&:not(:last-child)]:border-b border-gray-200 hover:bg-gray-50 ${currentCategory === label && 'border-l-4 border-l-btn-2'}`}>
      <div className="flex gap-2 items-center">
        <img className="w-6" src={imgUrl} alt="" />
        <span className="ml-3 mr-12">{ label }</span>
      </div>
      <ChevronRightIcon className="text-btn-2 size-4" />
    </button>
  )
}

export default Category