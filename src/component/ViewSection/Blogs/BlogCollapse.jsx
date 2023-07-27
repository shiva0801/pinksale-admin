import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const BlogCollapse = () => {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <Collapse onChange={onChange}>

            <Panel header="What is KYC?" key="1">
                <p>Know Your Customer (KYC) is a process whereby the project owner has shared their identification documents with MetaSale. KYC is used as a deterrent method to reduce illicit and deceptive behaviour.
                    More information about KYC can be found on the Binance Academy website via:https://academy.binance.com/en/glossary/know-your-customer
                    More information on MetaSale KYC process can be seen explained in here:https://docs.MetaSale.finance/important/MetaSale-kyc.</p>
            </Panel>
            <Panel header="What is an Audit?" key="2">
                <p>The Audit badge details that the smart contract has been tested and analysed by a 3rd party service.
                    Information about security audits can be seen via the Binance Academy:https://academy.binance.com/en/glossary/security-audit.</p>
            </Panel>
            <Panel header="What is SAFU?" key="3">
                <p>The SAFU badge demonstrates that the contract has been created by a MetaSale verified partner. SAFU benefits can be found via:https://docs.MetaSale.finance/important/safu-contract.</p>
            </Panel>
            <Panel header="What is Doxx?" key="4">
                <p>Projects certified with the Doxx badge highlights that the projects owner has completed a video AMA within their community, and that their submission to MetaSale matches their KYC information.
                    More information on MetaSale Doxx badge can be seen explained in here:https://docs.MetaSale.finance/important/MetaSale-kyc.</p>
            </Panel>
            <Panel header="What is DYOR?" key="4">
                <p>DYOR aims to reduce the number of uninformed investors in cryptocurrency. It encourages them to research and understand a cryptocurrency before investing so that they can answer precisely why they are buying that currency and supporting that project. The term is also often used as a disclaimer when cryptocurrency traders and enthusiasts make public posts or share their market analyses on social media platforms.</p>
            </Panel>
        </Collapse>
    )
}

export default BlogCollapse