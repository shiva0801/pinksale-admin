import { React, useState } from 'react'
import './Airdrop.css'
import CardItem from '../LaunchpadList/cards/CardItem'
import AirdropCard from './AirdropCard/AirdropCard'

const Airdrop = () => {
    const [active, setActive] = useState(1)

    const hendleActive = (val) => {
        setActive(val)
    }
    return (
        <>
            <div className='container'>
                <div className='airdrop_main'>
                    <div className='airdrop_text_container'>
                        <p>Airdrop</p>
                    </div>
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
                </div>
                <div className='all_launchpad_section_two'>
                    <span className={`launchpad_items ${active === 1 ? "activeMode" : ""}`} onClick={() => hendleActive(1)}><a className='active' href="#">All launchpads</a></span>
                    <span className={`launchpad_items ${active === 2 ? "activeMode" : ""}`} onClick={() => hendleActive(2)}><a href="#">Advanced Mode</a></span>
                    <span className={`launchpad_items ${active === 3 ? "activeMode" : ""}`} onClick={() => hendleActive(3)}><a href="#">My Contributions</a></span>
                </div>
                <div className='card_item_airdrop'>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                <AirdropCard/>
                
                </div>
                <div className='footer container'>
                    <p>Disclaimer: MetaSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <span>Binance Academy</span></p>
                </div>
            </div>
        </>
    )
}

export default Airdrop