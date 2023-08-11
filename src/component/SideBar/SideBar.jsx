import React, { useState } from "react";
import { GiAirBalloon } from "react-icons/gi";
import { FaHistory } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { MdLeaderboard } from "react-icons/md";
import { AiOutlineRise, AiFillGift } from "react-icons/ai";

import {
  HomeOutlined,
  RocketOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Launchpads list",
    key: "launchpads",
    icon: <RocketOutlined />,
    children: [
      {
        label: <Link to="launchpadlist">Public LounchPads</Link>,
        key: "Create launchpad",
      },
      {
        label: <Link to="privatelaunchpad">Private LounchPad</Link>,
        key: "Create Fair launch",
      },
    ],
  },
  {
    label: <Link to="blockedlaunchpad">Blocked launchpad</Link>,
    key: "Private Sale",
    icon: <ImEyeBlocked />,
  },

  {
    label: <Link to="toptrendingpage">Top Trendings</Link>,
    key: "trending",
    icon: <AiOutlineRise />,
  },

  {
    label: <Link to="/">Locker List</Link>,
    key: "PinkLock",
    icon: <UnlockOutlined />,
  },

  {
    label: <Link to="airdrop">Airdrop List</Link>,
    key: "Airdrop",
    icon: <AiFillGift />,
  },

  {
    label: <Link to="leaderboard">Leaderboard</Link>,
    key: "Leaderboard",
    icon: <MdLeaderboard />,
  },
  {
    label: <Link to="platformstatistics">Platform Statistics</Link>,
    key: "Anti-Bot",
    icon: <CgWebsite />,
  },
  {
    label: <Link to="logspage">Logs</Link>,
    key: "MultiSender",
    icon: <FaHistory />,
  },
];

const SideBar = ({ collapsed }) => {
  const [current, setCurrent] = useState("1");

  const onClick = (e, items) => {
    setCurrent(e.key);
  };

  console.log(collapsed, ":dsfsdfsd");

  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: `${collapsed ? "80px" : "200px"}`,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        selectedKeys={[current]}
      />
    </>
  );
};

export default SideBar;
