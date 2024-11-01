import axios from "axios";
import {BACK} from "../utils/links";
import {useQuery} from "react-query";

const link = `${BACK}/api/iboardData/eco`

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

export const useGetEcoLineChart = (year = 0, type = 'all') => {
    return useQuery(['ecolinechart', year],  async ()=> {
            const data = await axios.get(`${link}/linechart/${year}/${type}`)
            return data
        },
        {
            keepPreviousData: true,
            /*refetchOnWindowFocus: true,*/
            enabled: true
        })
}

export const useGetEcoBarChart = (year = 0, type = 'all') => {
    return useQuery(['ecobarchart', year],  async ()=> {
            const data = await axios.get(`${link}/barchart/${year}/${type}`)
            return data
        },
        {
            keepPreviousData: true,
            /*refetchOnWindowFocus: true,*/
            enabled: true
        })
}

export const useGetEcoCards = (year = 0, month = 0, type = 'all') => {
    return useQuery(['ecocards', year, month],  async ()=> {
            const data = await axios.get(`${link}/cards/${year}/${month}/${type}`)
            return data
        },
        {
            keepPreviousData: true,
            /*refetchOnWindowFocus: true,*/
            enabled: true
        })
}