import FormInput from "../components/FormInput"

const page = () => {

  return (
    <div className="w-[320px] max-w-[80vw]">
      <h1 className="relative mb-5 w-fit text-3xl md:text-4xl font-semibold before:w-[76px] before:mt-1 before:h-1 before:absolute before:top-full before:bg-btn-2">Reset Password</h1>
      <p className="mb-10">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link</p>
      <form className="grid gap-6">
        <FormInput name="email" type="email" label="Email" />
        <input className="bg-btn-1 rounded-md hover:bg-btn-2 hover:text-white mb-8 py-3 cursor-pointer" type="submit" value="Reset" />  
      </form>
      <p className="text-gray-700 text-[14px]">Don't have an account?
        <a className="text-btn-2 hover:text-btn-3" href="/signup"> Sign up</a>
      </p>
    </div>
  )
}

export default page