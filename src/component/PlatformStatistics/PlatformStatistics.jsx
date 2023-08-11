import { Box } from '@mui/material'
import React from 'react'
import CardItemSection from '../LaunchpadList/CardItemSection';
import AdvancedMode from '../LaunchpadList/AdvancesMode/AdvancedMode';
import { Tabs } from 'antd';
import TopTrendingCard from '../trending/TopTrendingCard';
const PlatformStatistics = () => {
    const item = [{
        label: `All launchpads`,
        key: "656",
        children: <CardItemSection />,
    }, {
        label: `Advanced Mode`,
        key: "666",
        children: <AdvancedMode />,
    },
    ]
    return (
        <Box>

            <div className='container'>
                <div className='sub_container Current_Presales_section'>
                    <div className='heading'>
                        <h1>Blocked Sales</h1>
                    </div>
                    <div className='all_launchpad_section'>
                        <Tabs
                            defaultActiveKey="1"
                            items={item}
                        />
                    </div>
                </div>
                <div className='footer container'>
                    <p>Disclaimer: Metasale_Admin will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <span>Binance Academy</span></p>
                </div>
            </div>

            <Box sx={{ marginBottom: 10 }}>
                <TopTrendingCard />
            </Box>
        </Box>

    )
}

export default PlatformStatistics