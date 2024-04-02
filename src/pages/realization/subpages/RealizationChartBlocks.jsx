import React from 'react';
import BlockShadow from "../../../elements/BlockShadow";
import {Tooltip, Typography} from "@mui/material";
import {palette} from "../../../utils/theme";
import {useSelector} from "react-redux";
import RealizationChart from "./RealizationChart";

const RealizationChartBlocks = ({item}) => {
    const mode = useSelector(state => state.header.mode);

    return (
        <div style={{display: 'inline-block', width: '33%'}} >
            <BlockShadow>
                <Tooltip title={
                    <>
                        <Typography variant="body2" gutterBottom>{`${item.КодОбъекта}, ${item.Объект}`}</Typography>
                        <Typography variant="body2" gutterBottom><b>Контрагент:</b> </Typography>
                        <Typography variant="body2" gutterBottom>АМГ: </Typography>
                        <Typography variant="body2" gutterBottom>РП: </Typography>
                        <Typography variant="body2" gutterBottom>Дата окончания: </Typography>
                        <Typography variant="body2" gutterBottom>Сумма договора: </Typography>
                        <Typography variant="body2" gutterBottom>ВП на 1 чел, ПЛАН/ФАКТ:</Typography>
                        <Typography variant="body2" gutterBottom>ОП, ПЛАН/ФАКТ: </Typography>
                    </>
                    }
                >
                    <Typography sx={{mt: 2, pl: 1, pr: 1, color: mode === "dark" ? palette.white : palette.black, fontWeight: 600}}
                                noWrap
                                align='center'
                                variant="body1"
                                gutterBottom>
                        {`${item.КодОбъекта}, ${item.Объект}`}
                    </Typography>
                </Tooltip>
                <RealizationChart item={item}/>
            </BlockShadow>
        </div>
    );
};

export default RealizationChartBlocks;