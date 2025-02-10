import Buttons from "./Buttons"


export default function JobTile() { 
    return (
        <li className=" flex my-4">
            <div className="w-[20rem]">
            <p>Jobb title</p>
            <p>Jobb description jhfjkkgjfkgkjvchckhckhchjfjkkgkkhlkh</p>
            <p>Company name</p>
            <p>Location</p>
          </div>
            <div className="flex h-10 w-20" >
            <Buttons clickedText="Applied" defaultColor=" bg-blue-500" clickedColor="bg-green-600">Apply</Buttons>
            </div>
        </li>
    )
}
