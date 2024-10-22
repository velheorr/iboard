import React, {useEffect, useState} from 'react';
import BlockShadow from "../../../../elements/BlockShadow";
import ElemTableBlock from "./ElemTableBlock";
import '../../econ.scss'
import {useGetEco} from "../../../../hook/useGetEconomics";
import Skelet from "../../../../elements/Skelet";
import {useTheme} from "../../../../hook/useTheme";

const TableBlock = ({year, month, bg}) => {
    const {data: eco, isLoading, isError, refetch, status} = useGetEco(year, month)
    const [data, setData] = useState({})
    const theme = useTheme() ? 'dark' : 'light'

    const mln = (num) =>{
        let newNum = num !== 0 ? num / 1000000 : 0
        return newNum.toFixed(0)
    }

    const converter = (data)=>{
        let x = {}
        let color = {
            dark: {
                g: '#17fa2f',
                y: '#FFF505',
                r: '#FF3131',
            },
            light: {
                g: '#138807',
                y: '#fba104',
                r: '#FF3131',
            }
        }
        Object.entries(data).forEach(function([key, value]) {
            value = mln(value)
            x = {...x, [key]:value}
        });
        const colored = (x, y) => {
            let result = (x/y)*100
            if (result - y <= 15){return color[theme].g}
            else if(result - y > 15 && result - y <= 30){return color[theme].y}
            else {return color[theme].r}
        }
        return (
            <div className={`header ${theme}`} style={{backgroundColor: bg}}>
                <BlockShadow className={`flexYear headBG ${theme} headBlockItem`}>{year}</BlockShadow>
                <ElemTableBlock bg={`lineBG ${theme} z`} >
                    <div className='flexItem'>
                        <div className='flexL pointL'>{x.ЗапроцентованоПлан}</div>
                        <div className='flexR pointR'>{x.ЗапроцентованоПланНарастающимИтогом}</div>
                    </div>
                    <div className='flexItem'>
                        <div className='flexL pointL' style={{color: colored(x.ЗапроцентованоФакт, x.ЗапроцентованоПлан)}}>{x.ЗапроцентованоФакт} </div>
                        <div className='flexR pointR' style={{color: colored(x.ЗапроцентованоФакт, x.ЗапроцентованоПланНарастающимИтогом)}}> {x.ЗапроцентованоФактНарастающимИтогом}</div>
                    </div>
                    <div className='flexItem'>
                        <div className='flexL pointL' style={{color: colored(x.ЗапроцентованоПрогноз, x.ЗапроцентованоПлан)}}>{x.ЗапроцентованоПрогноз} </div>
                        <div className='flexR pointR'> {x.ЗапроцентованоПрогнозНарастающимИтогом}</div>
                    </div>
                </ElemTableBlock>
                <ElemTableBlock bg={`lineBG ${theme} v`}>
                    <div className='flexItem'>
                        <div className='flexL pointL'>{x.ВаловаяПрибыльПлан}</div>
                        <div className='flexR pointR'>{x.ВаловаяПрибыльПланНарастающимИтогом}</div>
                    </div>
                    <div className='flexItem'>
                        <div className='flexL pointL' style={{color: colored(x.ВаловаяПрибыльФакт, x.ВаловаяПрибыльПлан)}}>{x.ВаловаяПрибыльФакт} </div>
                        <div className='flexR pointR' style={{color: colored(x.ВаловаяПрибыльФактНарастающимИтогом, x.ВаловаяПрибыльПланНарастающимИтогом)}}> {x.ВаловаяПрибыльФактНарастающимИтогом}</div>
                    </div>
                    <div className='flexItem'>
                        <div className='flexL pointL' style={{color: colored(x.ВаловаяПрибыльПрогноз, x.ВаловаяПрибыльПлан)}}>{x.ВаловаяПрибыльПрогноз} </div>
                        <div className='flexR pointR' style={{color: colored(x.ВаловаяПрибыльПрогнозНарастающимИтогом, x.ВаловаяПрибыльПланНарастающимИтогом)}}> {x.ВаловаяПрибыльПрогнозНарастающимИтогом}</div>
                    </div>
                </ElemTableBlock>
                <ElemTableBlock bg={`lineBG ${theme} o`}>
                    <div className='flexItem'>
                        <div className='flexL pointL'>{x.ОперационнаяПрибыльПлан}</div>
                        <div className='flexR pointR'>{x.ОперационнаяПрибыльПланНарастающимИтогом}</div>
                    </div>
                    <div className='flexItem'>
                        <div className='flexL pointL' style={{color: colored(x.ОперационнаяПрибыльФакт, x.ОперационнаяПрибыльПлан)}}>{x.ОперационнаяПрибыльФакт} </div>
                        <div className='flexR pointR' style={{color: colored(x.ОперационнаяПрибыльФактНарастающимИтогом, x.ОперационнаяПрибыльПланНарастающимИтогом)}}> {x.ОперационнаяПрибыльФактНарастающимИтогом}</div>
                    </div>
                    <div className='flexItem'>
                        <div className='flexL pointL' style={{color: colored(x.ОперационнаяПрибыльПрогноз, x.ОперационнаяПрибыльПлан)}}>{x.ОперационнаяПрибыльПрогноз} </div>
                        <div className='flexR pointR' style={{color: colored(x.ОперационнаяПрибыльПрогнозНарастающимИтогом, x.ОперационнаяПрибыльПланНарастающимИтогом)}}> {x.ОперационнаяПрибыльПрогнозНарастающимИтогом}</div>
                    </div>
                </ElemTableBlock>
                <ElemTableBlock bg={`lineBG ${theme} n`}>
                    <div className='flexItem'>
                        <div className='flexL pointL'>{x.НЗП}</div>
                        <div className='flexR pointR'>-</div>
                    </div>
                    <div className='flexItem'>
                        <div className='flexL pointL'>-</div>
                        <div className='flexR pointR'>-</div>
                    </div>
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