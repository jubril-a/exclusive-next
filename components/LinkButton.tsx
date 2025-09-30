type Props = {
    children: React.ReactNode
    href: string
}

const LinkButton = ({children, href}: Props) => {
  return (
    <a href={href} className="mx-auto bg-btn-2 px-6 py-3 mt-4 block w-fit text-white">{children}</a>
  )
}

export default LinkButton