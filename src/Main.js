/**
 * Created by Ljili on 2020/6/5.
 */
import React from 'react'
import {Layout,Menu} from 'antd'
import NavLeft from './components/NavLeft'
import store from './redux/store'
import { connect } from 'react-redux'
import {switchC} from './redux/action'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
} from '@ant-design/icons';
import './main.less'
import './App.less'

const { Header, Sider, Content } = Layout;
class Main extends React.Component{
  constructor(props){
    super(props)
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    // this.setState({
    //   collapsed: !this.state.collapsed,
    // });
    let open=!this.props.open
    console.log(open);
    store.dispatch(switchC(open))
    // this.props.switchC(open)
    // console.log(this.props);
  };
  componentDidMount(){
    console.log(store);

    console.log(this.props);
  }
  render(){
    return (
      <div className="main">
        <Layout>
          <Sider className="aside-main" trigger={null} collapsible collapsed={this.props.open}>
            <div className="logo" >
            </div>
            <NavLeft/>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background">
              <p className='trigger' onClick={this.toggle}>{this.props.open?<MenuUnfoldOutlined />:<MenuFoldOutlined/>}</p>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                padding: 16,
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
const mapStateProps=(state)=>{
 return {
   open:state.open
 }
}
// const mapDispatchProps = (dispatch) => {
//   return {
//     switchC: () => dispatch({ type: 'OPEN' }),
//   }
// }
// export default Main
export default connect(mapStateProps)(Main)