import axios from "axios";
import {BACK} from "../utils/links";
import {useQuery} from "react-query";

const link = `${BACK}/api/iboardData/getGoals`

const options = {
    keepPreviousData: true,
    /*refetchOnWindowFocus: true,*/
    enabled: true
}

export const useGetGoalsUser = () => {
    return useQuery(['goaluser'],  async ()=> {
            const data = await axios.get(`${link}/user`)
            return data
        },
        options)
}
