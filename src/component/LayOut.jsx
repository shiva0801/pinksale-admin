import { React, useState } from 'react';
import './Navbar.css';
import { Layout, theme } from 'antd';
import TopNav from './TopNav/TopNav';
import SideBar from './SideBar/SideBar';
import { Outlet} from 'react-router-dom';



const { Header, Sider, Content } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

 

  const CollapsedClose = (CollapsedClose) => {
    setCollapsed(CollapsedClose)
  }

  
  // const pat = window.location.pathname;
  
  
  // console.log(pat, "fxgfdgdf")


  return (
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, }}>
          <TopNav CollapsedClose={CollapsedClose} />
        </Header>
        <Layout hasSider>
          <Sider
          
          trigger={null} collapsible collapsed={collapsed} >
            <SideBar collapsed={collapsed} />
          </Sider>
          <Content className='main_content'>
             {/* <BodyContent/> */}
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
  )
}

export default Navbar