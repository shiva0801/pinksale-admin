import React from 'react'
import './AdvancedMode.css'
import { BiSearch } from "react-icons/bi";
import { FaSort } from "react-icons/fa"
import { AiFillFilter } from "react-icons/ai"
import BSC from '../../../Images/BSC.png'
import bsc from '../../../Images/bsc.svg'
import { BiGlobe } from "react-icons/bi"
import { FiTwitter } from "react-icons/fi"
import { FaTelegramPlane } from "react-icons/fa"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { Pagination } from 'antd';
const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};

const AdvancedMode = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='current_presale_main'>
                    {/* <div className='heading'>
                        <h1>Current Presales</h1>
                    </div> */}
                    <div className='table_data'>
                        <table>
                            <tr>
                                <th>
                                    <div className='name_section'>
                                        <div>Name</div>
                                        <div className='icon'><BiSearch /></div>
                                    </div>
                                </th>
                                <th>
                                    <div className='hc'>
                                        <div>HC</div>
                                        <div className='icon'><span><FaSort /></span><span><AiFillFilter /></span></div>
                                    </div>
                                </th>
                                <th>
                                    <div className='coin'>
                                        <span>Coin</span><span className='icon'><AiFillFilter /></span>
                                    </div>
                                </th>
                                <th>
                                    <div className='InitialCap'>
                                        <span>InitialCap</span>
                                        <span className='icon'><FaSort /></span>
                                    </div>
                                </th>
                                <th>
                                    <div className='kycaudit'>
                                        <span>KYC/Audit</span>
                                        <span className='icon'><AiFillFilter /></span>
                                    </div>
                                </th>
                                <th>
                                    <div className='Status'>
                                        <div>Status</div>
                                        <div className='icon'><span><FaSort /></span><span><AiFillFilter /></span></div>
                                    </div>
                                </th>
                                <th>
                                    <div className='links'>Links</div>
                                </th>
                                <th>
                                    <div className='TGOnline'>
                                        <span>TGOnline</span>
                                        <span className='icon'><FaSort /></span>
                                    </div>
                                </th>
                                <th>
                                    <div className='countdown'>
                                        <span>Countdown</span>
                                        <span className='icon'><FaSort /></span>
                                    </div>
                                </th>
                                <th>
                                    <div className='saleindin'>
                                        <span>Saleindin</span>
                                        <span className='icon'><FaSort /></span>
                                    </div>
                                </th>
                                <th>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span> Mbap Page</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>Hazbin Hotel</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>4CHAN BNB</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross' id='check_green'><AiOutlineCheckCircle /></span>
                                        <span className='cross' id='check_pink'><AiOutlineCheckCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>Pink Ghost</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>PMbap Page</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>Roll Safe</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross' id='check_green'><AiOutlineCheckCircle /></span>
                                        <span className='cross' id='check_pink'><AiOutlineCheckCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>Pepe Kart</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross' id='check_green'><AiOutlineCheckCircle /></span>
                                        <span className='cross' id='check_pink'><AiOutlineCheckCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>TITANIC2</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>Gundam Inu</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>DOGE X</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>RaptorJudas</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross' id='check_green'><AiOutlineCheckCircle /></span>
                                        <span className='cross' id='check_pink'><AiOutlineCheckCircle /></span>
                                        <span className='cross' id='check_green'><AiOutlineCheckCircle /></span>
                                        <span className='cross' id='check_pink'><AiOutlineCheckCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>Wushu</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>PepeCyborg</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>Pinky Fans</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>TO PAYS</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>Pepe Powell</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div style={{ backgroundColor: "rgb(72, 199, 116)", color: "#000" }} className='upcoming'>0.2/8</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>Arise Chikun</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>Isis Token</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>The Flash</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>CZ KILLER</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div style={{ backgroundColor: "rgb(72, 199, 116)", color: "#000" }} className='upcoming'>0.2/10</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>BOLICAI</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>Corgi</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>SPIKE DOGE</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>86 / 2.2K</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img style={{ width: "25px", marginLeft: "3px" }} src={bsc} alt="" /></span>
                                        <span>Mbap Page</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>266</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='name_section_data'>
                                        <span className='name_image'><img src={BSC} alt="" /></span>
                                        <span>Mbap Page</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>ETH</td>
                                <td>$103.4kb</td>
                                <td>
                                    <div className='cross_icon'>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                        <span className='cross'><AiOutlineCloseCircle /></span>
                                    </div>
                                </td>
                                <td>
                                    <div className='upcoming'>Upcoming</div>
                                </td>
                                <td>
                                    <div className='icon_links'>
                                        <span className='links_icon'><BiGlobe /></span>
                                        <span className='links_icon'><FiTwitter /></span>
                                        <span className='links_icon'><FaTelegramPlane /></span>
                                    </div>
                                </td>
                                <td>266</td>
                                <td>02:04:25:52</td>
                                <td>02:04:25:52</td>
                                <td><a className='view' href="/">View</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='pagination'>
                    <Pagination
                        showSizeChanger
                        onShowSizeChange={onShowSizeChange}
                        defaultCurrent={2}
                        total={500}
                    />
                </div>
            </div>
        </>
    )
}

export default AdvancedMode