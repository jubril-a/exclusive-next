'use client'

import DetailsBox from "./DetailsBox"
import Sidebar from "./Sidebar"
import { useState, useRef } from "react"
import { CategoryType } from "../faq"


const Faq = () => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>("Payments");
    const faqRef = useRef<HTMLDivElement>(null);

  return (
    <>
        <Sidebar ref={faqRef} currentCategory={selectedCategory} changeCategory={setSelectedCategory} />
        <DetailsBox ref={faqRef} category={selectedCategory}/>
    </>
  )
}

export default Faq