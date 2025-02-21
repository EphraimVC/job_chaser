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
            setInputValue(input)
      }
            return (
                  <form className=" flex mt-10 " onSubmit={passInput} >
                        <input className="rounded-lg h-9 w-60 dark:bg-slate-600 dark:text-white  text-blue-800 pl-2" placeholder="Job search" onChange={handleInput} />
                        <button className=" rounded-md p-1 ml-5 text-black bg-[#EAFF56] text-base h-9 -tracking-tighter font-semibold w-20" type="submit" >Search</button>
                  </form>
            )
      }

      