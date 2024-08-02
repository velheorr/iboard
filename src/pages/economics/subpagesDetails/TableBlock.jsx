import React, {useEffect, useState} from 'react';
import BlockShadow from "../../../elements/BlockShadow";
import ElemTableBlock from "./ElemTableBlock";
import '../economics.scss'
import {useGetEco} from "../../../hook/useGetEconomics";
import Skelet from "../../../elements/Skelet";

const TableBlock = ({year, month, bg}) => {
    const {data: eco, isLoading, isError, refetch, status} = useGetEco(year, month)
    const [data, setData] = useState({})

    const mln = (num) =>{
        let newNum = num !== 0 ? num / 1000000 : 0
        return newNum.toFixed(0)
    }

    const converter = (data)=>{
        let x = {}
        let color = {
            g: /*#1DBE03'*/ '#17fa2f',
            y: '#FFF505',
            r: /*#F11010'*/ '#FF3131'
        }
        Object.entries(data).forEach(function([key, value]) {
            value = mln(value)
            x = {...x, [key]:value}
        });
        const colored = (x, y) => {
            let result = (x/y)*100
            if (result - y <= 15){return color.g}
            else if(result - y > 15 && result - y <= 30){return color.y}
            else {return color.r}
        }
        return (
            <div className='header' style={{backgroundColor: bg}}>
                <BlockShadow className='flexYear headBG headBlockItem'>{year}</BlockShadow>
                <ElemTableBlock bg={'lineBG'} >
                    <div>{x.ЗапроцентованоПлан}/{x.ЗапроцентованоПланНарастающимИтогом}</div>
                    <div>
                        <span style={{color: colored(x.ЗапроцентованоФакт, x.ЗапроцентованоПлан)}}>{x.ЗапроцентованоФакт} </span>
                         /
                        <span style={{color: colored(x.ЗапроцентованоФакт, x.ЗапроцентованоПланНарастающимИтогом)}}> {x.ЗапроцентованоФактНарастающимИтогом}</span>
                    </div>
                    <div>
                        <span style={{color: colored(x.ЗапроцентованоПрогноз, x.ЗапроцентованоПлан)}}>{x.ЗапроцентованоПрогноз} </span>
                        /
                        <span> {x.ЗапроцентованоПрогнозНарастающимИтогом}</span>
                    </div>
                </ElemTableBlock>
                <ElemTableBlock bg={'lineBG'}>
                    <div>{x.ВаловаяПрибыльПлан}/{x.ВаловаяПрибыльПланНарастающимИтогом}</div>
                    <div>
                        <span style={{color: colored(x.ВаловаяПрибыльФакт, x.ВаловаяПрибыльПлан)}}>{x.ВаловаяПрибыльФакт} </span>
                        /
                        <span style={{color: colored(x.ВаловаяПрибыльФактНарастающимИтогом, x.ВаловаяПрибыльПланНарастающимИтогом)}}> {x.ВаловаяПрибыльФактНарастающимИтогом}</span>
                    </div>
                    <div>
                        <span style={{color: colored(x.ВаловаяПрибыльПрогноз, x.ВаловаяПрибыльПлан)}}>{x.ВаловаяПрибыльПрогноз} </span>
                        /
                        <span style={{color: colored(x.ВаловаяПрибыльПрогнозНарастающимИтогом, x.ВаловаяПрибыльПланНарастающимИтогом)}}> {x.ВаловаяПрибыльПрогнозНарастающимИтогом}</span>
                    </div>
                </ElemTableBlock>
                <ElemTableBlock bg={'lineBG'}>
                    <div>{x.ОперационнаяПрибыльПлан}/{x.ОперационнаяПрибыльПланНарастающимИтогом}</div>
                    <div>
                        <span style={{color: colored(x.ОперационнаяПрибыльФакт, x.ОперационнаяПрибыльПлан)}}>{x.ОперационнаяПрибыльФакт} </span>
                        /
                        <span style={{color: colored(x.ОперационнаяПрибыльФактНарастающимИтогом, x.ОперационнаяПрибыльПланНарастающимИтогом)}}> {x.ОперационнаяПрибыльФактНарастающимИтогом}</span>
                    </div>
                    <div>
                        <span style={{color: colored(x.ОперационнаяПрибыльПрогноз, x.ОперационнаяПрибыльПлан)}}>{x.ОперационнаяПрибыльПрогноз} </span>
                        /
                        <span style={{color: colored(x.ОперационнаяПрибыльПрогнозНарастающимИтогом, x.ОперационнаяПрибыльПланНарастающимИтогом)}}> {x.ОперационнаяПрибыльПрогнозНарастающимИтогом}</span>
                    </div>
                </ElemTableBlock>
                <ElemTableBlock bg={'lineBG'}>
                    <div>{x.НЗП} /-</div>
                    <div>-/-</div>
                </ElemTableBlock>
            </div>
        )
    }

    useEffect(()=>{
        if (status === 'success'){
            setData(eco)
        }
    },[eco, year])

    const render = converter(data)


    if (isLoading) {return <Skelet option='ecoDet'/>}
    if (isError) {return <h3>Нет подключения к серверу</h3>}
    if (!eco) {return <h3>Нет данных с сервера</h3>}

    return (
        <>
            {render}
        </>
    );
};

export default TableBlock;