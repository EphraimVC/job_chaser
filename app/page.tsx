
import JobTile from "./_components/Jobtile";
import InputForm from "./_components/InputForm";
import { StateContext } from "./_helpers/StateContext";

export default function Home() {

  return (
    <div className=" flex container flex-col items-center mt-20  w-full h-full">
      <h1 className="text-2xl"> Job Chaser</h1>
      <StateContext>
      <InputForm/>
      <div className=" flex justify-center mt-10 border-white rounded-md border-2 w-[40rem] h-[35rem] p-5 overflow-y-auto "  >
        <ol>
            <JobTile />
        </ol>
      </div>
            </StateContext>
    </div>
  );
}
