import type React from "react"
import Constraint from "./Constraint"
import { cn } from "@/utils/cn"

type Props = {
    children: React.ReactNode,
    className?: string
}

const Section = ({className, children}:Props) => {
  return (
    <Constraint>
      <section className={cn("mt-20", className)}>
        {children}
      </section>
    </Constraint>
  )
}

export default Section