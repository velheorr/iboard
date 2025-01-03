import React from 'react';
import {Skeleton} from "@mui/material";
import {useTheme} from "../hook/useTheme";

const Skelet = ({option = false}) => {


    let newSkelet
    switch (option) {
        case false:
            return  newSkelet = (
                <SkeletLine width={200}/>
            )
            break;
        case 'ecoData':
            return  newSkelet = (
                <div>
                    <div style={{marginBottom: '15px'}}>
                        <SkeletLine/>
                        <SkeletLine style={{textAlign: 'center'}} >Загрузка данных...</SkeletLine>
                        <SkeletLine style={{textAlign: 'center'}} >Пожалуйста подождите</SkeletLine>
                        <SkeletLine />
                    </div>
                    <SkeletEcoData/>
                    <SkeletEcoData/>
                    <SkeletEcoData/>
                    <SkeletEcoData/>
                </div>
            )
            break;
        case 'eco':
            return  newSkelet = (
                <div>
                    <SkeletLine />
                    <SkeletLine />
                    <SkeletLine style={{textAlign: 'center'}} >Идет загрузка данных...</SkeletLine>
                    <SkeletLine style={{textAlign: 'center'}} >Пожалуйста подождите</SkeletLine>
                    <SkeletLine />
                    <SkeletLine />
                    <SkeletLine />
                </div>
            )
            break;
        case 'ecoDet':
            return  newSkelet = (
                <div>
                    <SkeletLine style={{textAlign: 'center'}} >Идет загрузка данных...</SkeletLine>
                </div>
            )
            break;
        case 'realization':
            return  newSkelet = (
                <div style={{display: "flex", flexWrap: 'wrap'}}>
                    <SkeletRealiz/>
                    <SkeletRealiz/>
                    <SkeletRealiz/>
                    <SkeletRealiz/>
                    <SkeletRealiz/>
                    <SkeletRealiz/>
                </div>
            )
            break;
    }


    return (
        <div>
            newSkelet
        </div>

    );
};

export default Skelet;

const SkeletLine = ({width = '99%',style, children})=>{
    const bg = useTheme('skelet')

    return (
          <Skeleton style={style} width={width} variant="rounded" height={25} sx={{margin: '5px', backgroundColor: bg}}>
              {children}
          </Skeleton>
    )
}

const SkeletRealiz = ()=>{
    const bg = useTheme('skelet')

    return (
        <div>
            <SkeletLine width={200}/>
            <SkeletLine width={500}/>
            <SkeletLine width={500}/>
            <SkeletLine width={500}/>
            <SkeletLine width={500}/>
            <SkeletLine width={500}/>
            <SkeletLine  width={500} style={{textAlign: 'center'}} >Идет загрузка данных...</SkeletLine>
            <SkeletLine width={500}/>
            <SkeletLine width={500}/>
            <SkeletLine width={500}/>
            <SkeletLine width={500}/>
            <SkeletLine width={500}/>
        </div>
    )
}

const SkeletEcoData = () =>{
    return (
        <div style={{marginBottom: '15px'}}>
            <SkeletLine/>
            <SkeletLine/>
            <SkeletLine/>
            <SkeletLine/>
        </div>
    )
}