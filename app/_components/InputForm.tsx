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
                  <form className="mt-10" onSubmit={passInput} >
                        <input className="rounded-lg h-9 w-60 text-blue-800 pl-2" placeholder="Job search" onChange={handleInput} />
                        <button className=" border-white border-2 rounded-md p-1 ml-5" type="submit" >Search</button>
                  </form>
            )
      }

      