"use client";
import { useEffect, useState, useContext } from "react";
import { InputContext } from "../_helpers/StateContext"
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
        <ol className=" h-fit">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error: {error.message}</h1>}
            {data.length === 0 && <h1>No data found</h1>}
            {data.length > 0 &&  (data.map(jobs => (
                <li key={jobs.id}  className={`${isLoading ? "hidden" : " flex p-4   rounded-3xl m-2 bg-slate-200 dark:bg-slate-800 "} `}>
                    <div className="w-3/4">
                       <a href={jobs.url}>  <h1 className={`dark:text-white text-lg font-bold cursor-pointer  `}>{jobs.title}</h1>
                         <p className="text-black dark:text-white"> {jobs.company_name.toUpperCase() } </p>
                            <p className=" text-black dark:text-white text-sm">{jobs.candidate_required_location}</p></a>
                 </div>
                    <div className="w-1/4 flex justify-end items-start">
                    <Image className="rounded-full" src={jobs.company_logo} alt="company logo" width={60} height={60}/>
                    </div>
                
            </li>
            )))}
        </ol>   
    )
}