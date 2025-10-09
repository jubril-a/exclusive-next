import { MouseEvent } from "react"

type Props = {
    id: string,
    category: string,
    imgUrl: string
}

const CategoryBox = ({id, category, imgUrl}: Props) => {

  function handleClick(e: MouseEvent<HTMLAnchorElement>, elm: string) {
    e.preventDefault()
    const section = document.querySelector(`#${elm}`)

    if (section) {
      const fromTop = section.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({top: fromTop, behavior: "smooth"})
    }
  }

  return (
    <a href={`#${id}`} onClick={(e) => handleClick(e, id)} className="flex justify-center items-center shrink-0 w-40 h-40 border-2 border-gray-700 rounded-sm">
        <div>
            <img className="block mx-auto w-12" src={imgUrl} alt="" />
            <h3 className="mt-3 text-gray-900">{category}</h3>
        </div>
    </a>
  )
}

export default CategoryBox