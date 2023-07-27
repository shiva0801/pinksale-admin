import React from 'react'
import './token.css'
import { Pagination, Tabs } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Tokentab from './Tokentab';


const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `All`,
    children: <Tokentab/>,
  },
  {
    key: '2',
    label: `My lock`,
    children: `Content of Tab Pane 2`,
  },
];

const Token = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='container'>
     <div className='token_main'>
      <input type="text" placeholder='Search by token address...'/>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
     </div>
     <div className='footer container'>
        <p>Disclaimer: MetaSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <span>Binance Academy</span></p>
    </div>
    </div>
    </>
  )
}

export default Token