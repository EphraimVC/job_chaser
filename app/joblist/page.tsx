"use client";
import { ThemeContext } from "../_helpers/ThemeToggle";
import { useContext } from "react";
import InputForm from "../_components/InputForm";
import JobTile from "../_components/Jobtile";
import { StateContext } from "../_helpers/StateContext";
import { Provider } from "react-redux";
import { store} from "../store";

function Joblist() {
     const { theme } = useContext(ThemeContext)
    return (
        
        <div className={`${!theme ? "dark" : ""}  flex container  flex-col items-center w-full h-screen `}>
           <StateContext>
          <h1 className="text-2xl font-bold mt-10"> JOB CHASER</h1>
        <Provider store={store}>
          <InputForm/>
            <div className=" flex justify-center mt-3 w-[40rem] h-screen scroll-smooth overflow-scroll  ">
                <JobTile />
              </div>
                </Provider>
                </StateContext>
            </div>
            
  )
}
export default Joblist                      