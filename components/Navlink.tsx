import { cn } from "@/utils/cn"

type Props = {
    children: React.ReactNode;
    href: string;
    className?: string;
    handleClick?: (e:React.MouseEvent<HTMLAnchorElement>) => void;
}

const Navlink = ({children, href, className, handleClick}: Props) => {
    return (
        <a href={href} className={cn("text-sm max-[920px]:p-4 border-b border-[#ffffff30] last:border-0 hover:text-btn-1", className)} onClick={handleClick}>{children}</a>
    )
}

export default Navlink