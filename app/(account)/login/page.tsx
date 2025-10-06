import FormInput from "../components/FormInput"
import ToggleButton from "../components/ToggleButton"

const page = () => {

  return (
    <div className="w-[320px] max-w-[80vw]">
      <h1 className="relative mb-10 w-fit text-3xl md:text-4xl font-semibold before:w-[70%] before:mt-1 before:h-1 before:absolute before:top-full before:bg-btn-2">Login</h1>
      <form className="grid gap-6">
        <FormInput name="email" type="email" label="Email" />
        <FormInput name="password" type="password" label="Password" />
        <ToggleButton />
        <input className="bg-btn-1 rounded-md hover:bg-btn-2 hover:text-white mb-8 py-3 cursor-pointer" type="submit" value="Log In" />  
      </form>
      <p className="text-gray-700 text-[14px]">Forgot your password?
        <a className="text-btn-2 hover:text-btn-3" href="/login"> Reset it</a>
      </p>
      <p className="text-gray-700 text-[14px]">Don't have an account?
        <a className="text-btn-2 hover:text-btn-3" href="/signup">Sign up</a>
      </p>
    </div>
  )
}

export default page