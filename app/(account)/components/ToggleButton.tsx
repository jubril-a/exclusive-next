'use client'

import { useState } from "react"
import { cn } from "@/utils/cn"

const ToggleButton = () => {
    const [toggleState, setToggleState] = useState(false)

  return (
    <div className="flex gap-2" onClick={() => setToggleState(!toggleState)}>
        <div className={cn("w-10 h-6 p-0.5 bg-gray-500 rounded-2xl", toggleState && "bg-btn-1 flex justify-end")}>
            <div className="h-full aspect-square bg-white rounded-full"></div>
        </div>
        <span>Remember me</span>
    </div>
  )
}

export default ToggleButton