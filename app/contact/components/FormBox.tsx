import FormInput from "@/components/FormInput"

const FormBox = () => {
  return (
    <form action="https://formspree.io/f/mvgwwrpn" method="POST" className="flex-grow">
        <div className="flex max-[640px]:flex-col gap-4 mb-4">
            <FormInput className="flex-grow" name="name" type="text" label="Your Name" />
            <FormInput className="flex-grow" name="email" type="email" label="Your Email" />
            <FormInput className="flex-grow" name="phone" type="phone" label="Your Phone" />
        </div>
        <textarea name="messsage" className="px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-50 w-full mb-4"></textarea>
        <input className="block ml-auto bg-btn-2 rounded-md hover:bg-btn-1 text-white hover:text-gray-800 px-5 py-3 cursor-pointer" type="submit" value="Send Message" />  
    </form>
  )
}

export default FormBox