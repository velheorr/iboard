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

export const useGetEcoFunnel = (year = 0, month = 0,rp = 'all', type = 'all') => {
    return useQuery(['ecofunnel', year, month, rp, type],  async ()=> {
            const data = await axios.get(`${link}/funnel/${year}/${month}/${rp}/${type}`)
            return data
        },
        {
            keepPreviousData: true,
            /*refetchOnWindowFocus: true,*/
            enabled: true
        })
}

export const useGet2charts = (year = 0, month = 0,rp = 'all', type = 'all') => {
    return useQuery(['twocharts', year, month, rp, type],  async ()=> {
            const data = await axios.get(`${link}/twocharts/${year}/${month}/${rp}/${type}`)
            return data
        },
        {
            keepPreviousData: true,
            /*refetchOnWindowFocus: true,*/
            enabled: true
        })
}