/**
 * Created by Ljili on 2020/6/5.
 */
import React from 'react'
import {Layout,Menu} from 'antd'
import NavLeft from './components/NavLeft'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
} from '@ant-design/icons';
import './main.css'
const { Header, Sider, Content } = Layout;
class Main extends React.Component{
  constructor(props){
    super(props)
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render(){
    return (
      <div className="main">
        <Layout>
          <Sider className="aside-main" trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" >
            </div>
            <NavLeft/>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background">
              <p className='trigger' onClick={this.toggle}>{this.state.collapsed?<MenuUnfoldOutlined />:<MenuFoldOutlined/>}</p>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default Main