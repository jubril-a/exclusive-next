type Props = {
  name: string;
  type: string;
  label: string;
  value?: string;
  className?: string;
}

const FormInput = ({name, type, label, value, className}: Props) => {
  return (
    <label htmlFor={name} className={className}>
      <span className="block mb-2 text-gray-700">{label}</span>
      <input name={name} type={type} value={value} className="px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full" />
    </label>
  )
}

export default FormInput