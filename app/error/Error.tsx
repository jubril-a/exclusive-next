'use client'

import { ArrowLeftIcon } from "@heroicons/react/16/solid"

const Error = () => {
  return (
    <main className="flex justify-center items-center bg-dark h-[100%] grow-1 border-b border-gray-50 border-dashed">
        <div>
            <h1 className="text-5xl font-semibold text-btn-1 mb-6">An Error Occured</h1>
            <a onClick={(e) => {
                e.preventDefault()
                window.history.back()
            }} href="" className="bg-btn-2 text-white hover:bg-btn-3 px-8 py-3 text-sm rounded-full block w-fit mx-auto"><ArrowLeftIcon className="inline size-4 mr-1" /> Go back to previous page</a>
        </div>
    </main>
  )
}

export default Error

