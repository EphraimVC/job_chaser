"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";

function SignIn() {
    const { register, handleSubmit } = useForm();

    return (
        <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-2xl font-bold mb-9" >Sign In</h1>
    <form  className="w-96"  onSubmit={handleSubmit((data) => localStorage.setItem("user", JSON.stringify(data)))}>
      <input {...register("userName", {required:true})} placeholder="Username" />
                <input {...register("passWord", {required:true})} placeholder="Password" />
      <input type="submit" value="Sign In" />
            </form>
            <p className="mt-7 text-base" >If you are new, click here to create a user <Link className="text-pink-500 font-semibold" href="/signup">Sign up</Link> </p> 
      </div>
    
  );
}

export default SignIn;

