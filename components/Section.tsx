import type React from "react"
import Constraint from "./Constraint"
import { cn } from "@/utils/cn"

type Props = {
    id?: string,
    children: React.ReactNode,
    className?: string
}

const Section = ({id, className, children}:Props) => {
  return (
    <Constraint>
      <section id={id} className={cn("mt-20", className)}>
        {children}
      </section>
    </Constraint>
  )
}

export default Section