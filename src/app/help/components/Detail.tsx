'use client'

import { useState } from "react"
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline"

type Props = {
    question: string,
    answer: string
}

const Detail = ({ question, answer}: Props) => {
    const [visible, setVisibility] = useState(false)

  return (
    <div onClick={() => setVisibility(!visible)} className="p-8 [&:not(:last-child)]:border-b border-gray-200">
        <div className="flex gap-4 justify-between items-center">
            <h2 className="text-lg text-gray-800 font-medium">{question}</h2>
            {!visible && <PlusIcon className="size-5 text-gray-800" />}
            {visible && <MinusIcon className="size-5 text-gray-800" />}
        </div>
        {visible && <p className="text-gray-600 mt-4">{answer}</p>}
    </div>
  )
}

export default Detail