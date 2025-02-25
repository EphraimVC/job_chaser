"use client"
import { useEffect, useState } from "react";
import SignIn from "../app/signIn/page";
import Joblist from "./joblist/page";
import SignUp from "./signup/page";



export default function Home() {
  const [pathname, setPathname] = useState("");
  const [isUser, setIsUser]= useState(false);
console.log(isUser)
    useEffect(() => {
      setPathname(window.location.pathname);
      if (localStorage.getItem("user")) {
        setPathname("/joblist");
       setIsUser(true);
      }
    }, []);
  
    return (

      <div className="dark:bg-[#2a2972] ">
        {!isUser ? pathname === "/" && <SignIn login={{ setIsUser }} /> : <Joblist/> }
        {pathname === "/signup" && !isUser && <SignUp/>}
      </div>

    );
}

 