import React, {useEffect} from 'react';
import BlockShadow from "../../../elements/BlockShadow";
import ElemTableBlock from "./ElemTableBlock";
import '../economics.scss'
import {useDispatch, useSelector} from "react-redux";
import {useGetEco} from "../../../hook/useGetEconomics";
import {prepareData} from "../js/prepareData";
import {setEcoDet, setEconData, setEconData2} from "../js/EconomicsSlice";
import Skelet from "../../../elements/Skelet";

const TableBlock = ({year, month, target}) => {
    const dispatch = useDispatch();
    const {data: eco, isLoading, isError, refetch, status} = useGetEco(year, month)
    const ecoDet1 = useSelector(state => state.economics.ecoDet1);
    const ecoDet2 = useSelector(state => state.economics.ecoDet2);
    const ecoDet3 = useSelector(state => state.economics.ecoDet3);

    const converter = (target, eco)=>{

    }

    useEffect(()=>{
        if (status === 'success'){
            converter(target, eco)
            dispatch(setEcoDet({target, eco}))
        }
    },[eco, year])




    console.log(target, eco)
    if (isLoading) {return <Skelet option='eco'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!eco) {return <h3>Нет данных с сервера</h3>}

    return (
        <div className='header line'>
            <BlockShadow className='flexYear headBG headBlockItem'>{year}</BlockShadow>
            <ElemTableBlock bg={'lineBG'}>
                <div>ЗапроцентованоПлан/ЗапроцентованоПланНарастающимИтогом</div>
                <div>ЗапроцентованоФакт/ЗапроцентованоФактНарастающимИтогом</div>
                <div>ЗапроцентованоПрогноз/ЗапроцентованоПрогнозНарастающимИтогом</div>
            </ElemTableBlock>
            <ElemTableBlock bg={'lineBG'}>
                <div>ВаловаяПрибыльПлан/ВаловаяПрибыльПланНарастающимИтогом</div>
                <div>ВаловаяПрибыльФакт/ВаловаяПрибыльФактНарастающимИтогом</div>
                <div>ВаловаяПрибыльПрогноз/ВаловаяПрибыльПрогнозНарастающимИтогом</div>
            </ElemTableBlock>
            <ElemTableBlock bg={'lineBG'}>
                <div>ОперационнаяПрибыльПлан/ОперационнаяПрибыльПланНарастающимИтогом</div>
                <div>ОперационнаяПрибыльФакт/ОперационнаяПрибыльФактНарастающимИтогом</div>
                <div>ОперационнаяПрибыльПрогноз/ОперационнаяПрибыльПрогнозНарастающимИтогом</div>
            </ElemTableBlock>
            <ElemTableBlock bg={'lineBG'}>
                <div>НЗП /-</div>
                <div>-/-</div>
            </ElemTableBlock>
        </div>
    );
};

export default TableBlock;