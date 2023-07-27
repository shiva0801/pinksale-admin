import React from "react";
import "../BscMainNet/BscMainNet.css";
import { useNetwork, useSwitchNetwork } from 'wagmi'
import { Button } from "antd";
import img1 from "../../Images/etheram.svg";
import img2 from "../../Images/matic.png";
import img3 from "../../Images/avalanche.svg";
import img4 from "../../Images/coronos.svg";
import img5 from "../../Images/dogchain.png";
import img6 from "../../Images/pulseChain.png";

import img7 from "../../Images/fantom.svg";
import img8 from "../../Images/alvey.svg";

import img9 from "../../Images/BSC.png";
import img10 from "../../Images/matic.png";


const buttondata = [
  {
    img: img1,
    text: "etherum",
    id:1
  },
  {
    img: img2,
    text: "Matic(polygon)",
    id:137
  },
  {
    img: img3,
    text: "Avalanche",
    id:43114
  },
  {
    img: img4,
    text: "Cronos",
    id:25
  },
  {
    img: img5,
    text: "DogeChain",
    id:2000
  },
  {
    img: img6,
    text: "PulseChain",
    id:369
  },
  {
    img: img7,
    text: "Fantom Opera",
    id:250
  },
  {
    img: img8,
    text: "Alvey",
    id:1313161554
  },


  {
    img: img9,
    text: "BNB Smart Chain",
    id:56
  },
  {
    img: img10,
    text: "Matic Mumbai",
    id:80001
  },
  

];

export default function BscMainNet() {
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
  useSwitchNetwork()
  return (
    <div className="bsc_testnet_modal">
      <div className="chhose_network_container">
        <p>
          <strong>Choose Network</strong>
        </p>
      </div>
      <div className="network_item">
        {buttondata.map((item) => (
          <Button type="" onClick={() => {
            switchNetwork?.(item.id)
          }} className="network_item_content">
            <div className="_imgheight">
              <img src={item.img} alt="" />
            </div>
            <div className="_imgtext">{item.text}</div>
          </Button>
        ))}
      </div>
    </div>
  );
}
