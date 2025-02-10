export async function fetchData(searchValue:string) {
    
    try {
        const response = await fetch(`https://jobsearch.api.jobtechdev.se/search?q=${searchValue}`)
        const data = await response.json()
        return data;
    }
     
    catch (error) {
        console.error(error)
        throw error
    }

}