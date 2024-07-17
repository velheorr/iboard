import React from 'react';
import {Skeleton} from "@mui/material";
import BlockShadow from "./BlockShadow";
import {useTheme} from "../hook/useTheme";

const Skelet = ({option = false}) => {


    let newSkelet
    switch (option) {
        case false:
            return  newSkelet = (
                <div style={{display: "flex", flexWrap: 'wrap'}}>
                    <SkeletikBody/>
                    <SkeletikBody/>
                    <SkeletikBody/>
                    <SkeletikBody/>
                    <SkeletikBody/>
                    <SkeletikBody/>
                    <SkeletikBody/>
                </div>
            )
            break;
        case 'eco':
            return  newSkelet = (
                <div>
                    <SkeletLine width={200}/>
                    <SkeletLine />
                    <SkeletLine />
                    <SkeletLine style={{textAlign: 'center'}} >Идет загрузка данных...</SkeletLine>
                    <SkeletLine style={{textAlign: 'center'}} >Пожалуйста подождите</SkeletLine>
                    <SkeletLine />
                    <SkeletLine />
                    <SkeletLine />
                </div>
            )
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

const SkeletikBody = ()=>{
    const bg = useTheme('skelet')

    return (
        <BlockShadow style={{width: '30%'}}>
            <Skeleton variant="text" sx={{ fontSize: '2rem', margin: '0 auto', backgroundColor: bg}} width={300}/>
            <Skeleton variant="rounded" height={20} sx={{m: 1}} width={500}/>
            <Skeleton variant="rounded" height={20} sx={{m: 1}}/>
            <Skeleton variant="rounded" height={20} sx={{m: 1}}/>
            <Skeleton variant="rounded" height={20} sx={{m: 1}}/>
            <Skeleton variant="rounded" height={20} sx={{m: 1}}/>
            <Skeleton variant="rounded" height={20} sx={{m: 1}}/>
            <Skeleton variant="rounded" height={20} sx={{m: 1}}/>
            <Skeleton variant="rounded" height={20} sx={{m: 1}}/>
            <Skeleton variant="rounded" height={20} sx={{m: 1}}/>
            <Skeleton variant="rounded" height={20} sx={{m: 1}}/>
        </BlockShadow>
    )
}