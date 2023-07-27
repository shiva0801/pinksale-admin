import React from 'react'
import VerifyToken from './VerifyToken/VerifyToken'
import TokenAddress from './TokenAddress/TokenAddress'
import Footer from '../footer/Footer'

const CreateSubscription = () => {
  return (
    <>
    <div className='createLaunchPad'>
      <VerifyToken/>
        <TokenAddress />
        <Footer/>
    </div>
     
    </>
  )
}

export default CreateSubscription