import React from 'react'
import './AirdropCard.css'
import  cardProfileimage from '../../../Images/cardProfileimage.png'
import {AiOutlineLock, AiOutlineBell, AiOutlineHeart} from 'react-icons/ai'
import { Progress } from 'antd'
import { Link } from 'react-router-dom'

const AirdropCard = () => {
  return (
    <>
    <div className='card-main'>
                <div className='card-title'>
                    <div className='card-image'>
                        <img src={cardProfileimage} alt="" />
                    </div>
                    <div className='button_section'>
                            <button className='button_upcoming'><span><AiOutlineLock /></span>Upcoming</button>
                    </div>
                </div>
                <div className='official_heading'>
                    <h1>official</h1>
                </div>
                <table>
                    <tr>
                        <td>Token</td>
                        <td className='td_right'>BART</td>
                    </tr>
                    <tr>
                        <td>Total Token</td>
                        <td className='td_right'>0</td>
                    </tr>
                    <tr>
                        <td>Participants</td>
                        <td className='td_right'>0</td>
                    </tr>
                </table>
                <div className='view_airdrop_button_section'>
                 <div>Starts In:</div>
                 <div className='view_airdrp_button'>
                    <button className='view_air_button'>View Airdrop</button>
                 </div>
                </div>
            </div>

    </>
  )
}

export default AirdropCard