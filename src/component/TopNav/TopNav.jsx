import React, { useEffect, useState } from "react";

import "../Navbar.css";
import "./Topnav.css";
import logoImg from "../../Images/logo.png";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, theme } from "antd";

const TopNav = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    props.CollapsedClose(collapsed);
  }, [collapsed]);

  return (
    <>
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
              Metasale Admin Panel
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
