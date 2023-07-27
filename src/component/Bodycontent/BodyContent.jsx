import React from 'react'
import './BodyContent.css'
import { BiTrendingUp } from "react-icons/bi"
import { Link, Outlet } from 'react-router-dom'


const BodyContent = () => {
  return (
    <>
    <div className='tag'>
      <ul className='nav-ul'>
        <li><Link to="#"><span className='trending-icon'><BiTrendingUp/></span> <span className='trending-name'>Trending</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#1</span><span className='tag-name'>$ASTROCEO</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#2</span><span className='tag-name'>MIDAI</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#3</span><span className='tag-name'>NETADOGEAI</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#4</span><span className='tag-name'>FLASH</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#5</span><span className='tag-name'>TRUMPCEO</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#6</span><span className='tag-name'>Olefy</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#7</span><span className='tag-name'>AIWD</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#8</span><span className='tag-name'>AIDOGE</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#9</span><span className='tag-name'>USTCA</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#10</span><span className='tag-name'>CryptoTubeAI</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#11</span><span className='tag-name'>RULE</span></Link></li>
        <li><Link to="#"><span className='tag-no'>#12</span><span className='tag-name'>COW INU</span></Link></li>
      </ul>
    </div>
    <Outlet/>
    </>
     
  )
}
export default BodyContent