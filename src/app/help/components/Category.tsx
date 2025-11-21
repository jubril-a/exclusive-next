'use client'

import { ChevronRightIcon } from "@heroicons/react/24/outline"

type Props = {
  label: string
  imgUrl: string
}

const Category = ({ label, imgUrl }:Props) => {

  function handleClick() {
    console.log("Hello")
  }

  return (
    <button onClick={handleClick} className="flex items-center p-4 bg-white [&:not(:last-child)]:border-b border-gray-200">
      <img className="w-6" src={imgUrl} alt="" />
      <span className="ml-3 mr-12">{ label }</span>
      <ChevronRightIcon className="text-btn-2 size-4" />
    </button>
  )
}

export default Category