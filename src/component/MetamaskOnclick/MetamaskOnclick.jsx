import React from 'react'
import './MetamaskOnclick.css';


const MetamaskOnclick = () => {
    return (
        <div>
            <div className='container'>
                <div className='logout_container_main'>
                    <div className='logout_top'>
                        <p>Connected as 0x692200DE8238e2EADe0A2E7F30e527B9D1315eE20.963785 BNB</p>
                        <button className='logout_button'>Logout</button>
                    </div>
                    <div className='activities_container_bottom'>
                   <ul>
                    <li className='activities'><a href="#">Activities</a></li>
                    <li><a href="#">Affiliate</a></li>
                    <li><a href="#">Favorited</a></li>
                    <li><a href="#">Recently Viewed</a></li>
                   </ul>
                   <p style={{fontSize:"16px", fontFamily:"Segoe UI", padding:"7px 0"}}>The activities only work on mainnet. Let try to change network and try again.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MetamaskOnclick