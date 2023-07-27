import React, { useState } from 'react'
import './LaunchpadList.css'
import { Input, Tabs } from 'antd';
import { Select } from 'antd';
import CardItem from './cards/CardItem';
import Affiliate from './Affiliate/Affiliate';
import { Link, useNavigate } from 'react-router-dom';
import CardItemSection from './CardItemSection';
import AdvancedMode from './AdvancesMode/AdvancedMode';



const LaunchpadList = () => {
 
 
  const item = [  {
    label: `All launchpads`,
    key: "656",
    children: <CardItemSection/>,
  },{
    label: `Advanced Mode`,
    key: "666",
    children: <AdvancedMode/>,
    
  },
  {
    label: `My Contributions`,
    key: "6",
    children: <CardItemSection/>,
    
  }]
  
  return (
    <div className='container'>
      <div className='sub_container Current_Presales_section'>
        <div className='heading'>
          <h1>Current Presales</h1>
        </div>
        <div className='all_launchpad_section'>
        <Tabs
    defaultActiveKey="1"
    
    items={item}
  />
          {/* <span className={`launchpad_items ${active === 1 ? "activeMode" : ""}`} onClick={() => hendleActive(1)}><Link className='active' href="/launchpadlist">All launchpads</Link></span>
          <span className={`launchpad_items ${active === 2 ? "activeMode" : ""}`} onClick={() => hendleActive(2)}><Link to="advanced-mode">Advanced Mode</Link></span>
          <span className={`launchpad_items ${active === 3 ? "activeMode" : ""}`} onClick={() => hendleActive(3)}><Link to="advanced-contribution">My Contributions</Link></span> */}
        </div>
      
      </div>

      {/* */}
      <div className='footer container'>
        <p>Disclaimer: MetaSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <span>Binance Academy</span></p>
    </div>
    </div>
  )
}

export default LaunchpadList