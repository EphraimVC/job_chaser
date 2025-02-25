"use client";
import { useContext, useState } from "react"
import { InputContext } from "../_helpers/StateContext"


export default function InputForm() {
      const [input, setInput] = useState("")
      const { setInputValue } = useContext(InputContext);

      const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            setInput(e.target.value)
           
      }

      const passInput = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setInputValue(input.toLowerCase())
            console.log("submitted")
      }
            return (
                  <form className=" flex flex-col mt-10 " onSubmit={passInput} >
                        <div className="flex flex-row">
                        <input className="rounded-lg h-9 w-60 dark:bg-slate-600 dark:text-white  text-blue-800 pl-2" placeholder="Job search" onChange={handleInput} />
                        <button className=" rounded-md p-1 ml-5 text-black bg-[#EAFF56] text-base h-9 -tracking-tighter font-semibold w-20" type="submit" >Search</button>
                        </div>
                        
                        <div className="flex  gap-2 flex-wrap mt-4">
                        <span className="inline-flex items-center cursor-pointer rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">Javascript</span>
                        <span className="inline-flex items-center cursor-pointer rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">Node</span>
                        <span className="inline-flex items-center cursor-pointer rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">Python</span>
                        <span className="inline-flex items-center cursor-pointer rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">C++</span>
                        </div>
                  </form>
            )
      }
