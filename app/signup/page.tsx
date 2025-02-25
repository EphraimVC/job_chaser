"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";

function SignUp() {
    const { register, handleSubmit } = useForm();
    return (
        <div className="flex flex-col justify-center items-center h-screen">
             <h1 className="text-2xl font-bold mb-9" >Sign Up</h1>
              <form  className="w-96"  onSubmit={handleSubmit((data) => localStorage.setItem("user", JSON.stringify(data)))} >
               <input className="dark:bg-slate-600" {...register("userName", {required:true})} placeholder="Username" />
               <input className="dark:bg-slate-600" {...register("passWord", {required:true})} placeholder="Password" />
               <input  type="submit" value="Create new user" />
             </form>
            <p className="mt-7 text-base" >If you already are a user, click here to <Link className="text-pink-500 font-semibold" href="/">Sign in</Link> </p> 
      </div>
    
  );
}

export default SignUp;

