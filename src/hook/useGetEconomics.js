import axios from "axios";
import {BACK} from "../utils/links";
import {useQuery} from "react-query";


export const useGetEconomics = (year) => {
    return useQuery('economics', async ()=> {
            const data = await axios.get(`${BACK}/api/iboardData/economics/${year}`)
            return data.data.Data
        },
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        })
}
export const useGetEconomics2 = (year) => {
    /*let x = ''
    if (month){x = ``}*/
    return useQuery('economics2', async ()=> {
            const data = await axios.get(`${BACK}/api/iboardData/economics/${year}`)
            return data.data.Data
        },
        {
            keepPreviousData: false,
            refetchOnWindowFocus: false,

        })
}





export const useGetEco = (year, month = 0) => {
    return useQuery(['eco', year, month],  async ()=> {
        const data = await axios.get(`${BACK}/api/iboardData/economics/${year}/${month}`)
        return data.data.Data
        },
        {
            /*keepPreviousData: true,*/
            /*refetchOnWindowFocus: true,*/
            enabled: true
        })
}