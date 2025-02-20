"use client";
import { useEffect, useState, useContext } from "react";
import { InputContext } from "../_helpers/StateContext"
import Buttons from "./Buttons"
import Image from "next/image";

export default function JobTile() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
    const { inputValue } = useContext(InputContext);

    useEffect( () => {
        const fetchData = async () => { 
            setIsLoading(true)
            setError(null)
            try {
                const res = await fetch(`https://remotive.com/api/remote-jobs?category=software-dev&limit=50&search=${inputValue}`);
                const fetchedData = await res.json();
                if (!fetchedData) {
                    console.log("no fetched data")
                }
                console.log("fetched data: ", fetchedData.jobs)
                setData(fetchedData.jobs)
            } catch (error) { 
                setError(error)
                console.error("error message: ", error)
            }finally {
                setIsLoading(false)
            }
        }
        fetchData();
    },[inputValue])
        
    return (
        
        <ol>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error: {error.message}</h1>}
            {data.length === 0 && <h1>No data found</h1>}
            {data.length > 0 &&  (data.map(jobs => (
                <li key={jobs.id} className={`${isLoading ? "hidden" : "border-2 border-white rounded-md p-2 m-2"} `}>
                <Image className="rounded-full" src={jobs.company_logo} alt="company logo" width={60} height={60}/>
                <h1 className="text-lg font-bold ">{jobs.title}</h1>
                <p>{jobs.company_name.toUpperCase() }</p>
                <p>{jobs.candidate_required_location}</p>
                <a className="underline-offset-8 text-blue-400" href={jobs.url}>Link to job description</a>
                <div className="flex h-10 w-20">
                    <Buttons clickedText="Saved" defaultColor="bg-blue-500" clickedColor="bg-green-600">
                        Save
                    </Buttons>
                </div>
            </li>
            )))}
        </ol>
    )
}