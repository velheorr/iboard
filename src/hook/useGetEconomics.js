import axios from "axios";
import {BACK} from "../utils/links";
import {useQuery} from "react-query";


export const useGetEco = (year, month = 0) => {
    return useQuery(['eco', year, month],  async ()=> {
        const data = await axios.get(`${BACK}/api/iboardData/economics/${year}/${month}`)
        return data.data.Data
        },
        {
            keepPreviousData: true,
            /*refetchOnWindowFocus: true,*/
            enabled: true
        })
}