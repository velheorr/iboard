import axios from "axios";
import {BACK} from "../utils/links";
import {useQuery} from "react-query";

const link = `${BACK}/api/iboardData/eco`

const options = {
    keepPreviousData: true,
    /*refetchOnWindowFocus: true,*/
    enabled: true
}

export const useGetEco = (year, month = 0) => {
    return useQuery(['eco', year, month],  async ()=> {
        const data = await axios.get(`${BACK}/api/iboardData/economics/${year}/${month}`)
        return data.data.Data
        },
        options)
}

export const useGetEcoLineChart = (year = 0, type = 'all') => {
    return useQuery(['ecolinechart', year],  async ()=> {
            const data = await axios.get(`${link}/linechart/${year}/${type}`)
            return data
        },
        options)
}

export const useGetEcoBarChart = (year = 0, type = 'all') => {
    return useQuery(['ecobarchart', year],  async ()=> {
            const data = await axios.get(`${link}/barchart/${year}/${type}`)
            return data
        },
        options)
}

export const useGetEcoCards = (year = 0, month = 0, type = 'all') => {
    return useQuery(['ecocards', year, month],  async ()=> {
            const data = await axios.get(`${link}/cards/${year}/${month}/${type}`)
            return data
        },
        options)
}

export const useGetEcoFunnel = (year = 0, month = 0,rp = 'all', type = 'all') => {
    return useQuery(['ecofunnel', year, month, rp, type],  async ()=> {
            const data = await axios.get(`${link}/funnel/${year}/${month}/${rp}/${type}`)
            return data
        },
        options)
}

export const useGetEco2charts = (year = 0, month = 0,rp = 'all', type = 'all') => {
    return useQuery(['twocharts', year, month, rp, type],  async ()=> {
            const data = await axios.get(`${link}/twocharts/${year}/${month}/${rp}/${type}`)
            return data
        },
        options)
}
export const useGetEcoBullet = (year = 0, month = 0,rp = 'all', type = 'all') => {
    return useQuery(['bullet', year, month, rp, type],  async ()=> {
            const data = await axios.get(`${link}/bullet/${year}/${month}/${rp}/${type}`)
            return data
        },
        options)
}

export const useGetEcoFunnelDetails = (year = 0, month = 0, type = 'all',rp = 'all', par = 'prodano') => {
    return useQuery(['funnelinfo', year, month, type, rp, par],  async ()=> {
            const data = await axios.get(`${link}/funneldetails/${year}/${month}/${type}/${rp}/${par}`)
            return data
        },
        options)
}