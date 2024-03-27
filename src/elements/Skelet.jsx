import React from 'react';
import {Skeleton} from "@mui/material";
import BlockShadow from "./BlockShadow";

const Skelet = () => {
    return (
        <div style={{margin: '0 auto',padding: '20px 0'}}>
                <div style={{display: 'inline-flex'}}>
                    <Skeleton variant="text" sx={{ fontSize: '2rem', mr: 1 }} width={300}/>
                    <Skeleton variant="text" sx={{ fontSize: '2rem',  mr: 1 }} width={300}/>
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={300}/>
                </div>
                <div>
                    <Skeleton variant="text" sx={{ fontSize: '2rem', margin: '0 auto' }} width={300}/>
                </div>
               <div style={{display: "flex", flexWrap: 'wrap'}}>
                   <BlockShadow style={{width: '50%'}}>
                       <Skeleton variant="text" sx={{ fontSize: '2rem', margin: '0 auto'}} width={300}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}} width={600}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                   </BlockShadow>
                   <BlockShadow style={{width: '50%'}}>
                       <Skeleton variant="text" sx={{ fontSize: '2rem', margin: '0 auto'}} width={300}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}} width={600}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                   </BlockShadow>
                   <BlockShadow style={{width: '50%'}}>
                       <Skeleton variant="text" sx={{ fontSize: '2rem', margin: '0 auto'}} width={300}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}} width={600}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                   </BlockShadow>
                   <BlockShadow style={{width: '50%'}}>
                       <Skeleton variant="text" sx={{ fontSize: '2rem', margin: '0 auto'}} width={300}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}} width={600}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                       <Skeleton variant="rounded" height={40} sx={{m: 1}}/>
                   </BlockShadow>
               </div>
        </div>
    );
};

export default Skelet;