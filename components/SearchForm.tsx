import { FormEvent, useEffect, useRef, useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { cn } from "@/utils/cn"

const SearchForm = () => {
    const [searchVisible, setSearchVisible] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {

        if (searchVisible) {
            inputRef.current?.focus()
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }

    }, [searchVisible])

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const searchTerm =  inputRef.current?.value

        if (searchTerm) {
            window.location.href = `/search/${searchTerm}`;
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className={cn("max-[720px]:hidden", searchVisible && "max-[720px]:flex flex-col gap-5 items-center justify-start pt-30 absolute h-[100vh] inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.85)]")}>
                <div className={cn(
                    "bg-[#F5F5F5] flex rounded-md border border-transparent focus-within:border-gray-300",
                    searchVisible && "w-fit"
                )}>
                    <input ref={inputRef} type="text" placeholder="What are you looking for?" className="w-[240px] h-[40px] focus:outline-0 pl-4"/>
                    <label htmlFor="submitBtn" className="p-2 hover:bg-btn-1">
                        <MagnifyingGlassIcon className="size-6" />
                        <input id="submitBtn" className="hidden" type="submit" value="" />
                    </label>
                </div>
                <button onClick={() => setSearchVisible(!searchVisible)} className="min-[720px]:hidden text-white underline cursor-pointer">close</button>
            </div>
            <button type="button" onClick={() => setSearchVisible(!searchVisible)} className="bg-[#F5F5F5] rounded-md p-2 hover:bg-btn-1 cursor-pointer min-[720px]:hidden">
                <MagnifyingGlassIcon className="size-6" />
            </button>
        </form>
    )
}

export default SearchForm