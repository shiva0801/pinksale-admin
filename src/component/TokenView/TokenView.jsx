import React from 'react'
import './TokenView.css'
import {GrFormPrevious} from "react-icons/gr"
import {GrFormNext} from "react-icons/gr"

function TokenView() {
    return (
        <>
            <div className='container'>
                <div className='tokenview_main'>
                    <div className='lock'>Lock info</div>
                    <div className='lock_info'>
                        <table>
                            <tr>
                                <td>Current Locked Amount</td>
                                <td className='right_data'>10,000,000 nn</td>
                            </tr>
                            <tr>
                                <td>Current Values Locked</td>
                                <td className='right_data'>$0</td>
                            </tr>
                            <tr>
                                <td>Token Address</td>
                                <td className='right_data'>nn</td>
                            </tr>
                            <tr>
                                <td>Token Name</td>
                                <td className='right_data'>nn</td>
                            </tr>
                            <tr>
                                <td>Token Symbol</td>
                                <td className='right_data'>18</td>
                            </tr>
                            <tr>
                                <td>Token Decimals</td>
                                <td className='right_data'>10,000,000 nn</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='lock_record'>
                    <div className='lock'>Lock records</div>
                    <div className='lock_table_data'>
                        <table>
                            <tr>
                                <th>Wallet</th>
                                <th>Amount</th>
                                <th>Cycle(m)</th>
                                <th>Cycle Release(%)</th>
                                <th>TGE(%)</th>
                                <th>Unlock time(UTC)</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>0x0C07...29C0</td>
                                <td>2,500,000</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>2023.06.23 17:11</td>
                                <td><a href="/">view</a></td>
                            </tr>
                            <tr>
                                <td>0x0C07...29C0</td>
                                <td>2,500,000</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>2023.06.23 17:11</td>
                                <td><a href="/">view</a></td>
                            </tr>
                            <tr>
                                <td>0x0C07...29C0</td>
                                <td>2,500,000</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>2023.06.23 17:11</td>
                                <td><a href="/">view</a></td>
                            </tr>
                            <tr>
                                <td>0x0C07...29C0</td>
                                <td>2,500,000</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>2023.06.23 17:11</td>
                                <td><a href="/">view</a></td>
                            </tr>
                        </table>
                        <div className='pagination_container'>
                         <div className='pagi_icon'><GrFormPrevious/></div>
                         <div className='pagi_icon'>1</div>
                         <div className='pagi_icon'><GrFormNext/></div>
                        </div>
                    </div>
                </div>
                <div className='footer container'>
                    <p>Disclaimer: MetaSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <span>Binance Academy</span></p>
                </div>
            </div>
        </>
    )
}

export default TokenView