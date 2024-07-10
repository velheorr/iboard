import {useQuery} from "react-query";
import axios from "axios";
import {BACK} from "../utils/links";



/*Realization block*/
async function fetchRealizationData(){
    return (await axios.get(`${BACK}/api/iboardData`)).data
}

export const useGetRealizationData = () => {
    return useQuery('realization', fetchRealizationData,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        })
}