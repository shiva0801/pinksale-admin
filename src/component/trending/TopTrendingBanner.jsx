import { Box, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineRise } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { BannerWraper } from './toptrendingcard.styled'
import { trending } from './data'
import styled from '@emotion/styled'

const TopTrendingBanner = () => {

    return (
        <BannerWraper>
            <Typography component='p' sx={{ textTransform: 'capitalize', fontSize: '16px', padding: '10px 8px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <AiOutlineRise color='#f95192' style={{ marginRight: '3px' }} />  trending
            </Typography>
            {trending.map((trends) => (
                <Box sx={{ padding: '10px 8px' }} >
                    <Typography component='span' sx={{ fontSize: '13px' }}>
                        {trends?.sno}
                    </Typography>
                    <Link to="" className="data-hover" style={{ fontSize: '13px', color: '#f95192', marginLeft: '5px' }}>{trends?.data}</Link>
                </Box>
            ))}
        </BannerWraper>
    )
}

export default TopTrendingBanner