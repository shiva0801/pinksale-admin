import React from 'react'
import tokenimg  from '../../Images/Token.png'
import { Pagination } from 'antd';
const Tokentab = () => {
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
      };
      
const talerow = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

  return (
    <div> <table>
    <tr>
      <th className='data'>Token</th>
      <th className='data'>Amount</th>
      <th className='data'>View</th>
    </tr>
    {talerow.map((table)=>(
      <tr>
      <td>
        <div className='token_details'>
        <div><img src={tokenimg} alt="" /></div>
         <div className='text_content'>
         <p>HKMoon</p>
         <p>PEPEAI</p>
         </div>
        </div>
      </td>
      <td>9,999,999.347 kk</td>
      <td><a href='/TokenView' 
      // onClick={()=>navigate('TokenView')}
      >view</a></td>
    </tr>
    ))}
     </table>
    <div className='pagination_container'>
    <Pagination
  showSizeChanger
  onShowSizeChange={onShowSizeChange}
  defaultCurrent={3}
  total={500}
/>
    </div></div>
  )
}

export default Tokentab