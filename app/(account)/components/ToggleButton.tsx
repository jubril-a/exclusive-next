const ToggleButton = () => {

  return (
    <>
      <label className="flex gap-2">
        <input type="checkbox" name="remember" id="remember" className="peer hidden" />
        <div className="w-10 h-6 p-0.5 bg-gray-500 rounded-2xl peer-checked:bg-btn-1 peer-checked:flex peer-checked:justify-end">
            <div className="h-full aspect-square bg-white rounded-full"></div>
        </div>
        <span>Remember me</span>
      </label>
    </>
  )
}

export default ToggleButton
