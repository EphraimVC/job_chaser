"use client";
import { useEffect, useState, useContext } from "react";
import { InputContext } from "../_helpers/StateContext"
import Image from "next/image";
import { PropagateLoader } from "react-spinners"

export default function JobTile() {
    const [isFiltered, setIsFiltered] = useState([]);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { inputValue } = useContext(InputContext);
     
    useEffect( () => {
        const fetchData = async () => { 
            setIsLoading(true)
            setError(null)
            try {
                const res = await fetch(`https://remotive.com/api/remote-jobs?category=software-dev&limit=50`);
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
    }, [])
    
    useEffect(() => { 
        if (!inputValue) {
            setIsFiltered(data)
        } else { 
            setIsFiltered(data.filter(job => job.title.toLowerCase().includes(inputValue)))
        }
    },[inputValue,data])
    return (
        <ol className=" h-fit">
            {isLoading && <PropagateLoader color="#c916b7" />}
            {error && <h1>Error: {error.message}</h1>}
            {data.length === 0 && !isLoading ? <h1>No data found</h1>: ""}
            {isFiltered.length > 0 &&  (isFiltered.map(jobs => (
                <li key={jobs.id}  className={`${isLoading ? "hidden" : " flex p-4   rounded-3xl m-2 bg-slate-200 dark:bg-slate-800 "} `}>
                    <div className="w-3/4">
                       <a href={jobs.url}>  <h1 className={`text-black dark:text-white text-lg font-bold cursor-pointer  `}>{jobs.title}</h1>
                         <p className="text-black dark:text-white"> {jobs.company_name.toUpperCase() } </p>
                            <p className=" text-black dark:text-white text-sm">{jobs.candidate_required_location}</p></a>
                            {jobs.tags && jobs.tags.length > 0 && (
                               <ul className="flex flex-row gap-2 flex-wrap w-[25rem] mt-3tags-list">
                                 {jobs.tags.map((tag, index) => (
                                  <li key={index}  className="inline-flex items-center mt-3 rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-700/10 ring-inset">{tag}</li>
                                 ))}
                               </ul>
                             )}
                   </div>
                    <div className="w-1/4 flex justify-end items-start">
                    <Image className="rounded-full" src={jobs.company_logo} alt="company logo" width={60} height={60}/>
                    </div>
            </li>
            )))}
        </ol>   
    )
}
