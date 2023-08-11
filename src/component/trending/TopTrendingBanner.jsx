import { Box, Typography } from '@mui/material'
import React from 'react'
import { BsGraphUpArrow } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BannerWraper } from './toptrendingcard.styled'
import { trending } from './data'
import styled from '@emotion/styled'

const TopTrendingBanner = () => {

    return (
        <BannerWraper>
            <Typography component='p' sx={{ textTransform: 'capitalize', fontSize: '16px', padding: '10px 8px', fontWeight: 'bold' }}>
                <BsGraphUpArrow color='#f95192' /> trending
            </Typography>
            {trending.map((trends) => (
                <Box sx={{ padding: '10px 8px' }} >
                    <Typography component='span' sx={{ fontSize: '13px' }}>
                        {trends?.sno}
                    </Typography>
                    <Link to={""} className="data-hover" style={{ fontSize: '13px', color: '#f95192', marginLeft: '5px' }}>{trends?.data}</Link>
                </Box>
            ))}
        </BannerWraper>
    )
}

export default TopTrendingBanner