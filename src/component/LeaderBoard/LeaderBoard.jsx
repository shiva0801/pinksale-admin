import React from 'react'
import image from "../../Images/IMAGE (1).png"
import { Progress, Select } from 'antd';
import './LeaderBoard.css'
import { Button } from 'antd'
import Link from 'antd/es/typography/Link';

const { Option } = Select;
const LeaderBoard = () => {
    return (
        <div className='container'>
            <div className='leaderboard_main'>
                <div className='airdrop_launched_section'>
                    <div className='airdrop_launched'>
                        <p style={{ fontSize: "14px", fontWeight: "400" }}>AIRDROP LAUNCHED</p>
                        <span style={{ fontSize: "30px", fontWeight: "600" }}>269</span>
                    </div>
                    <div className='particepants_in_all_time'>
                        <p style={{ fontSize: "14px", fontWeight: "400" }}>PARTICIPANTS IN ALL-TIME</p>
                        <span style={{ fontSize: "30px", fontWeight: "600" }}>2344</span>
                    </div>
                </div>
                <div className='leaderboard_chart_main'>
                    <div className='leaderboard_weekchart_top'>
                        {/* <div id='week_one' className='weekchart_data'>Week 17/2023</div>
                        <div className='weekchart_data'>Week 16/2023</div>
                        <div className='weekchart_data'>Week 15/2023</div>
                        <div className='weekchart_data'>Week 14/2023</div>
                        <div className='weekchart_data'>Week 13/2023</div>
                        <div className='weekchart_data'>Week 12/2023</div>
                        <div className='weekchart_data'>Week 11/2023</div>
                        <div className='weekchart_data'>Week 10/2023</div>
                        <div className='weekchart_data'>Week 9/2023</div>
                        <div className='weekchart_data'>hello</div>
                        <div className='weekchart_data'>hello</div> */}
                        <ul>
                            <li><Link id='week_one' href="#">Week 17/2023</Link></li>
                            <li><Link href="#">Week 16/2023</Link></li>
                            <li><Link href="#">Week 15/2023</Link></li>
                            <li><Link href="#">Week 14/2023</Link></li>
                            <li><Link href="#">Week 13/2023</Link></li>
                            <li><Link href="#">Week 12/2023</Link></li>
                            <li><Link href="#">Week 11/2023</Link></li>
                            <li><Link href="#">Week 10/2023</Link></li>
                            <li><Link href="#">Week 9/2023</Link></li>
                            <li className='points_data'><Link href="#">wee <span className='points'>...</span></Link>
                                <ul className='sub_menu'>
                                    <li><Link href="#">Week 16/2023</Link></li>
                                    <li><Link href="#">Week 15/2023</Link></li>
                                    <li><Link href="#">Week 14/2023</Link></li>
                                </ul>

                            </li>


                            <li><Select defaultValue="All chain" onChange={""}>
                                <Option value="No Filter">No Filter</Option>
                                <Option value="No Filter">No Filter</Option>
                                <Option value="No Filter">No Filter</Option>
                            </Select>
                            </li>
                        </ul>

                    </div>
                    <div className='redfloki-chart'>
                        <table>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3, 6, 5687, 9, 8, 978, 9, 756, 7].map((curElm) => {
                                return (
                                    <tr>
                                        <td className='left_data'>1</td>

                                        <td className='leaderboard_image'><img src={image} alt="" /></td>
                                        <td>
                                            <div className="red-folki">
                                                <ul>
                                                    <li>Red Floki CEO</li>
                                                    <li>RedFlokiCEO</li>
                                                </ul>
                                                <ul>
                                                    <li>2,228.910641010463 BNB- <span>Listing time:</span>2023.04.24 16:06</li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td> <Progress type="dashboard" gapDegree={10} percent={44.7} size={40} /></td>
                                        <td><Button >View pool</Button></td>
                                    </tr>
                                )
                            })}

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard