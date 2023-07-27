import React, { useState } from 'react'
import { GiAirBalloon } from "react-icons/gi"
import { AiOutlineLineChart } from "react-icons/ai"
import { HomeOutlined, RocketOutlined, UnlockOutlined, SafetyCertificateOutlined, CrownOutlined, DollarOutlined, SendOutlined } from '@ant-design/icons';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


const items = [
  {
    label:<Link to="/">Home</Link> ,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: "Launchpads",
    key: 'launchpads',
    icon: <RocketOutlined />,
    children: [
      {
        label:<Link to="createlaunchpad">Create launchpad</Link>,
        key:"Create launchpad",
      },
      {
        label:<Link to="FairLounch">Create Fair launch</Link>,
        key:"Create Fair launch",
      },
      {
        label:<Link to="DutchAuction">Create Dutch Au...</Link>,
        key:"Create Dutch Au...",
      },
      {
        label:<Link to="createSubscription">Create Subscript...</Link>,
        key:"Create Subscript...",
      },
      {
        label:<Link to="createtoken">Create Token</Link>,
        key:"Create Token",
      },
      {
        label:<Link to="launchpadlist">Launchpad list</Link>,
        key:"Launchpad list",
      }
    ]
  },
  {
    label: "Private Sale",
    key: 'Private Sale',
    icon: <SafetyCertificateOutlined />,
    children: [
      {
        label:<Link to="PrivateSale">Create Private S...</Link>,
        key:"Create Private S...",
      },
      {
        label:<Link to="launchpadlist">Private Sales list</Link>,
        key:"Private Sales list",
      }
    ]
  },


  {
    label: "PinkLock",
    key: 'PinkLock',
    icon: <UnlockOutlined />,
    children: [
      {
        label:<Link to="createlock">Create Lock</Link>,
        key:"Create Lock",
      },
      {
        label:<Link to="Token">Token</Link>,
        key:"Token",
      },
      {
        label:<Link to="Token">Liquidity</Link>,
        key:"Liquidity",
      }
    ]
  },

  {
    label: "Airdrop",
    key: 'Airdrop',
    icon: <GiAirBalloon />,
    children: [
      {
        label:<Link to="createairdrop">Create Airdrop</Link>,
        key:"Create Airdrop",
      },
      {
        label:<Link to="airdrop">Airdrop List</Link>,
        key:"Airdrop",
      },
    ]
  },


  {
    label:<Link to="buycryptofiat">Buy Crypto Fiat</Link> ,
    key: 'BuycryptoFiat',
    icon: <DollarOutlined />,
  },
  {
    label:<Link to="leaderboard">Leaderboard</Link> ,
    key: 'Leaderboard',
    icon: <CrownOutlined />,
  },
  {
    label:<Link to="/">Anti-Bot</Link> ,
    key: 'Anti-Bot',
    icon: <SafetyCertificateOutlined />,
  },
  {
    label:<Link to="MultiSender">Multi-Sender</Link> ,
    key: 'MultiSender',
    icon: <SendOutlined />,
  }
];


const SideBar = ({ collapsed }) => {
  const [current, setCurrent] = useState('1');

  const onClick = (e, items) => {
    setCurrent(e.key);
  };

  console.log(collapsed, ":dsfsdfsd")

  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: `${collapsed ? "80px" : "200px"}`,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        selectedKeys={[current]}

      />
    </>
  )
}

export default SideBar