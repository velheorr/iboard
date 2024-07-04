import axios from "axios";
import {BACK} from "../utils/links";
import {useQuery} from "react-query";

async function fetchEconomics(){
   const year = '2024'
    const data = await axios.get(`${BACK}/api/iboardData/economics/${year}`)
    return data.data
}

export const useGetEconomics = () => {
    return useQuery('economics', fetchEconomics,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        })
}