import Form from "./Form"

const page = () => {
  return (
    <div className="w-[320px] max-w-[80vw]">
      <h1 className="relative mb-5 w-fit text-3xl md:text-4xl font-semibold before:w-[76px] before:mt-1 before:h-1 before:absolute before:top-full before:bg-btn-2">Reset Password</h1>
      <p className="mb-6">Insert your New Password</p>
      <Form />
    </div>
  )
}

export default page