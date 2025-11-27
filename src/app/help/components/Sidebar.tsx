import Category from './Category'
import {faq} from '../faq'
import { Dispatch, SetStateAction, RefObject } from 'react'
import { CategoryType } from '../faq'

type Props = {
  ref: RefObject<HTMLDivElement | null>,
  currentCategory: CategoryType,
  changeCategory: Dispatch<SetStateAction<CategoryType>>
}

const Sidebar = ({ ref, currentCategory, changeCategory }: Props) => {
  return (
    <div className="min-[720px]:w-fit border border-gray-200 rounded-xl overflow-hidden shrink-0">
      {Object.keys(faq).map((category) => (
        <Category 
          key={category} 
          label={category} 
          ref={ref}
          imgUrl={`/icons/${category.replace(/ & /g, '-').replace(/ /g, '-').toLowerCase()}.jpg`}
          currentCategory={currentCategory}
          changeCategory={changeCategory}
        />
      ))}
    </div>
  )
}

export default Sidebar