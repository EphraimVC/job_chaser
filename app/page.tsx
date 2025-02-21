
// import { useContext } from "react";
import JobTile from "./_components/Jobtile";
import InputForm from "./_components/InputForm";
import { StateContext } from "./_helpers/StateContext";
// import { ThemeContext } from "./_helpers/ThemeToggle";


export default function Home() {
  // const {theme} = useContext(ThemeContext)

  return (
    <div className={`  flex container  flex-col items-center w-full h-screen `}>
      <h1 className="text-2xl font-bold mt-10"> JOB CHASER</h1>
      <StateContext>
     
      <InputForm/>
        <div className=" flex justify-center mt-3 w-[40rem] h-screen scroll-smooth overflow-scroll  ">
        
            <JobTile />
      </div>
    
      </StateContext>
    </div>
  );
}
