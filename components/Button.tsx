type Props = {
    children: string;
    clickHandler: () => void;
}

const Button = ({children, clickHandler}: Props) => {
  return (
    <button onClick={clickHandler} className="block bg-btn-2 text-white px-6 py-2.5 rounded-md hover:bg-btn-1 hover:text-gray-900 hover:cursor-pointer">{ children }</button>
  )
}

export default Button