import {useEffect,useState} from 'react'

async function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(async() => {
        try {
            const response = await fetch(url);
            if(!response.ok) throw new Error("Failed to fetch data");
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            
        }
    }   , []);
    return data;

}

export default useFetch
