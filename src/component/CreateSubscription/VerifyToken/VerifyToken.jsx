import React, { useState } from 'react'
import "./VerifyToken.css"
import veri from '../../../Verify.json'
import { Steps } from 'antd';
import { useSelector } from 'react-redux';
import { lounchPadFormSelector } from '../../selector/selector';


const VerifyToken = () => {
 const lounchPadTab = useSelector(lounchPadFormSelector);
  return (
    <>
    <div className='main-container container'>
      {/* {
        veri?.map((res)=>{
          return(
            <div className='card'>
              <div className='titals' onClick={()=>handleActive(res?.id)}>
              <p className={`number ${active == res?.id? "active":""}`} >{res?.id}</p> 
                <h2 className=''>{res?.tital}</h2>
              </div>
              <div>
                <p className='desc'>{res?.des}</p>
              </div>
            </div>
          )
        })
      } */}
         <Steps
        current={lounchPadTab.progressBar}
        items={[
          {
            title: 'token',
            description:"Enter the token address and verify",
          },
          {
            title: 'DeFi Launchpad Info',
            description:"Enter the launchpad information that you want to raise , that should be enter all details about your presale"
          },
          {
            title: 'Add Additional Info',
            description:"Let people know who you are"
          },
          {
            title: 'Finish',
            description:"Review your information"
          },
        ]}
      />
    </div>
    </>
  )
}

export default VerifyToken