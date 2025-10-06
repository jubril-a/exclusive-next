type Props = {
  name: string;
  type: string;
  label: string;
}

const FormInput = ({name, type, label}: Props) => {
  return (
    <label htmlFor={name}>
      <span className="block mb-2 text-gray-700">{label}</span>
      <input name={name} type={type} className="px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full" />
    </label>
  )
}

export default FormInput