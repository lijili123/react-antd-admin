/**
 * Created by Ljili on 2020/6/5.
 */
import React from 'react'
import {NavLink,withRouter } from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import { Menu} from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
class NavLeft extends React.Component{
  constructor(props){
    super()
  }
  state={
    currentKey: '/',
    arr:[
      {
        title: '首页',
        key: '1'
      },
      {
        title: 'UI',
        key: '2',
        children: [
          {
            title: '按钮一',
            key: '21',
            children:[
              {
                title: '按钮1',
                key: '211',
                children:[
                  {
                    title: '按钮11',
                    key: '2111',
                  }
                ]
              },
              {
                title: '按钮2',
                key: '212',
              }
            ]
          },
          {
            title: '按钮二',
            key: '22',
          },
        ]
      },
      {
        title: '表单',
        key: '3',
        children: [
          {
            title: '登录',
            key: '31',
          },
          {
            title: '注册',
            key: '32',
          }
        ]
      },
    ]
  }
  handleClick = ({key,keyPath,item}) => {
    this.setState({
      currentKey:key
    })
  }
  componentWillMount(){
    const menuTreeNode=this.renderMenu(MenuConfig)
    let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
    this.setState({
      currentKey:currentKey,
      menuTreeNode:menuTreeNode
    })
  }
  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.name} icon={<UserOutlined />} key={item.path}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.name} icon={<UserOutlined />} key={item.path} >
        <NavLink to={item.path}>{item.name}</NavLink>
      </Menu.Item>
    })
  }
  render(){
    return (
      <div className="nav-menu">
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[this.props.location.pathname]}
          onClick={this.handleClick}
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}
export default withRouter(NavLeft)