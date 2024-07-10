import axios from "axios";
import {BACK} from "../utils/links";
import {useQuery} from "react-query";


export const useGetEconomics = (year) => {
    return useQuery('economics', async ()=> {
            const data = await axios.get(`${BACK}/api/iboardData/economics/${year}`)
            console.log(year)
            return data.data.Data
        },
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        })
}
export const useGetEconomics2 = (year) => {
    return useQuery('economics2', async ()=> {
            const data = await axios.get(`${BACK}/api/iboardData/economics/${year}`)
            console.log(year)
            return data.data.Data
        },
        {
            keepPreviousData: false,
            refetchOnWindowFocus: false,

        })
}





export const useGetEco = (year) => {
    return useQuery(['eco', year],  async ()=> {
        const data = await axios.get(`${BACK}/api/iboardData/economics/${year}`)
        return data.data.Data
        },
        {
            /*keepPreviousData: false,
            refetchOnWindowFocus: true,*/
            enabled: true
        })
}