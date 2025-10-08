import { cn } from "@/utils/cn"

type Props = {
  size?: string,
  className?: string,
  children: React.ReactNode
}

const Constraint = ({size="1200px", className, children}: Props) => {
  return (
    <div className={cn("px-4 mx-auto min-[640px]:px-8 w-[100%]", className)} style={{maxWidth: size}}>{children}</div>
  )
}

export default Constraint