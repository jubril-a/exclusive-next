'use client'

import { useState } from "react"
import EditInfo from "./EditInfo"
import DisplayInfo from "./DisplayInfo"

const Manage = () => {
  const [editState, setEditState] = useState(false)


  return (
    <main>
        {editState ? <EditInfo /> : <DisplayInfo /> }
    </main>
  )
}

export default Manage