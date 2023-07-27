import React from 'react'
import './CreateTokenInnerPage.css'


const CreateTokenInnerPage = () => {
  return (
    <>
    <div className='container'>
   <div className='create_tokan_main'>
 <div className='paragraph'>
  <p>Your tokan was created</p>
 </div>
 <div className='token_created_table_section'>
<table>
  <tr>
    <td>Name</td>
    <td className='td_right'>test</td>
  </tr>
  <tr>
    <td>Symbol</td>
    <td className='td_right'>bnb</td>
  </tr>
  <tr>
    <td>Total supply</td>
    <td className='td_right'>1,000</td>
  </tr>
  <tr>
    <td>Address</td>
    <td className='td_right'>abcdefghijk</td>
  </tr>
</table>
<div className='tokan_address'>
<button>View transaction</button>
<button>Copy address</button>
<button style={{backgroundColor:"#F95997", border:"none", color:"#ffffff"}}>Create launchpad</button>
<button style={{backgroundColor:"#F95997", border:"none", color:"#ffffff"}}>Create fairlaunch</button>
</div>
 </div>
   </div>
    </div>
    <div className='footer container'>
        <p>Disclaimer: MetaSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <span>Binance Academy</span></p>
    </div>
    </>
  )
}

export default CreateTokenInnerPage