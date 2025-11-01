import FormInput from "../../../components/FormInput"
import Submit from "../components/Submit"
import { signup } from "../actions"

const page = () => {
  return (
    <div className="relative w-[320px]">
      <h1 className="relative mb-10 w-fit text-3xl md:text-4xl font-semibold before:w-[76px] before:mt-1 before:h-1 before:absolute before:top-full before:bg-btn-2">Register</h1>
      <form action={signup} className="grid gap-6 max-w-80">
        <FormInput name="email" type="email" label="Email" />
        <FormInput name="password" type="password" label="Password" />
        <FormInput name="verify-pass" type="password" label="Re-type Password" />
        <label htmlFor="terms">
          <input type="checkbox" name="terms" />
          <span className="text-sm text-gray-700">    I agree to the Terms of Service & Privacy Policy</span>
        </label>
        <Submit action="signup" />
      </form>
      <p className="text-gray-700 text-[14px]">Already have an account? <a className="text-btn-2 hover:text-btn-3" href="/login">Log in instead</a></p>
    </div>
  )
}

export default page