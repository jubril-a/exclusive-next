'use client'

import { useState } from "react"
import InputInfo from "./InputInfo"
import DisplayInfo from "./DisplayInfo"

const Manage = () => {
  const [editState, setEditState] = useState(false)


  return (
    <main>
        {editState ? <InputInfo editStage={editState}  /> : <DisplayInfo switchMode={[editState, setEditState]} /> }
    </main>
  )
}

export default Manage