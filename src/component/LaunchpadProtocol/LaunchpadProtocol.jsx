import React from 'react'
import './LaunchpadProtocol.css'
import Totlevalue from '../totlevaluedescription/Totlevalue'
import TokenSalesMainLayout from '../TokenSales/TokenSalesMainLayout'
import EcoSystem from '../EcoSystem/EcoSystem'
import Footer from '../footer/Footer'
import {styled} from "@mui/material/styles"
import TokenSalesCard from '../TokenSales/TokenSalesCard/TokenSalesCard'

const LaunchpadProtocol = () => {
  return (
    <div className='launchpad_section'>
      <div className='container'>
        <div className='launchpad_main'>
          <div className='launchpad_protocol_text'>
            <h1>The Launchpad Protocol for Everyone!</h1>
            <p>MetaSale helps everyone to create their own tokens and token sales in few seconds.Tokens created on MetaSale will be verified and published on explorer websites.</p>
            <div className='button_container'>
              <button type='button' className='create_button' >Create Now</button>
              <button type='button' className='learn_more_button'>Learn More</button>
            </div>
          </div>
        </div>

        <Totlevalue/>
        <TokenSalesMainLayout/>
        <TokenSalesCard />

        <EcoSystem/>
        <Footer/>
      </div>
    </div>
  )
}

export default LaunchpadProtocol