import React from 'react';
import BlockShadow from "../../../elements/BlockShadow";
import {Tooltip, Typography} from "@mui/material";
import {palette} from "../../../utils/theme";
import Chart from "../../../elements/Chart";
import {useSelector} from "react-redux";

const RealizationChartBlocks = ({item}) => {
    const mode = useSelector(state => state.header.mode);

    return (
        <div style={{display: 'inline-block', width: '50%'}} >
            <BlockShadow>
                <Tooltip title={<Typography variant="body2" gutterBottom>{item.Объект}</Typography>}>
                    <Typography sx={{mt: 2, pl: 1, pr: 1, color: mode === "dark" ? palette.white : palette.black, fontWeight: 600}}
                                noWrap
                                align='center'
                                variant="h6"
                                gutterBottom>
                        {item.Объект}
                    </Typography>
                </Tooltip>
                {/*<Chart item={item}/>*/}
            </BlockShadow>
        </div>
    );
};

export default RealizationChartBlocks;