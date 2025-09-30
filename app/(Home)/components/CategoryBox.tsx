type Props = {
    category: string,
    imgUrl: string
}

const CategoryBox = ({category, imgUrl}: Props) => {
  return (
    <div className="flex justify-center items-center shrink-0 w-40 h-40 border-2 border-[#0000005d] rounded-sm">
        <div>
            <img className="block mx-auto" src={imgUrl} alt="" />
            <h3 className="mt-3">{category}</h3>
        </div>
    </div>
  )
}

export default CategoryBox