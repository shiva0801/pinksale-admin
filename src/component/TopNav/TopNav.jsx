import React, { useEffect, useState } from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import "../Navbar.css";
import "./Topnav.css";
import logoImg from "../../Images/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import bscImg from "../../Images/BSC.png";
import { BsWallet2 } from "react-icons/bs";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, Form, Modal } from "antd";
import { connectWallet } from "../../blockchain/walletConnect";
import BscMainNet from "../BscMainNet/BscMainNet";
import Connect from "../Connect/Connect";
import { useNetwork } from "wagmi";

const TopNav = (props) => {
  const { chain } = useNetwork();
  //  this is for model
  const [modelCreated, setModelCreated] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [isOpen2, setIsopen2] = useState(false);
  const [form] = Form.useForm();

  const modalHandle = () => {
    setIsopen2(true);
  };
  const modalHandleCancel = () => {
    setIsopen(false);
  };

  //connect modal
  const connectHandle = () => {
    setIsopen(true);
  };
  const connectHandleCancel = () => {
    setIsopen2(false);
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    props.CollapsedClose(collapsed);
  }, [collapsed]);

  return (
    <>
      <Modal
        width={550}
        open={isOpen}
        footer={null}
        onCancel={modalHandleCancel}
      >
        <div className="_parent">
          <Connect />
        </div>
      </Modal>

      <Modal
        width={550}
        open={isOpen2}
        footer={null}
        onCancel={connectHandleCancel}
      >
        <div className="_parent">
          <BscMainNet />
        </div>
      </Modal>

      <div className="sliderr">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <div className="inner-sidebar">
          <div>
            <img src={logoImg} alt=" " width="36px" />
            <p
              className="dis-none"
              style={{
                paddingLeft: "12px",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              MetaSale
            </p>
          </div>
          <div>
            <button className="btn" onClick={modalHandle}>
              <span>
                <img src={bscImg} alt="" width="24px" />
              </span>
              <span className="dis-none">{"test"}</span>
              {modelCreated && <p>Model created successfully!</p>}
            </button>
            <span className="connect-wallet">
              <ConnectButton chainStatus={"none"} />
            </span>
            <button className="wallet-icon" onClick={modalHandle}>
              <BsWallet2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
