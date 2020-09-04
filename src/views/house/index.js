/**
 * Created by Ljili on 2020/6/5.
 */
import React from 'react'
import {DatePicker,Input,Button,Row,Col,Form,Modal } from 'antd'
import "./index.less"
class List extends React.Component{
  constructor(props){
    super(props)
  }
  state={
    list:[
      {
        name:'C7-1',
        area:1500
      },
      {
        name:'C7-1',
        area:1500
      },{
        name:'C7-1',
        area:1500
      },
      {
        name:'C7-1',
        area:1500
      },
      {
        name:'C7-1',
        area:1500
      },
      {
        name:'C7-1',
        area:1500
      },{
        name:'C7-1',
        area:1500
      },
      {
        name:'C7-1',
        area:1500
      }
    ],
    visible:false,
    ModalText:'添加楼栋'
  }
  onFinish=()=>{

  }
  onFinishFailed=()=>{

  }
  handleClick=(item)=>{
    // console.log(item);
    this.props.clicked(item)
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };
  render(){
    return <div className="house">
      <div className="search">
        <Form  name="basic"
               layout="inline"
               onFinish={this.onFinish}
               onFinishFailed={this.onFinishFailed}>
          <Form.Item
            name="username"
            layout="inline"
          >
            <Input placeholder="请输入楼栋名称" />
          </Form.Item>
          <Form.Item
          >
            <Button type="primary"> 查询</Button>
          </Form.Item>
          <Form.Item
          >
            <Button type="primary" onClick={this.showModal}> 添加楼栋</Button>
          </Form.Item>
        </Form>
      </div>
      <div >
        <Row className="house-con" gutter={16}>
          {this.state.list.map((item,index)=>
              <Col className="list" key={index}>
                <div className="item"  onClick={(e)=>this.handleClick(item,e)}>
                  <h4>{item.name}</h4>
                  <div className="detail">招商面积:{item.area}</div>
                  <div className="btns"><Button type="text" size="mini">编辑</Button> <Button type="text" size="mini">编辑</Button></div>
                </div>
              </Col>
          )}
        </Row>
        <Modal
          title="添加"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{this.state.ModalText}</p>
        </Modal>
      </div>
    </div>
  }
}
class BuildManage extends React.Component{
  constructor(props){
    super(props)
  }
  handleBack=()=>{
    this.props.back()
  }
  render(){
    return <div>
      <div className="build-head">
        <div className="head-name">C7-2</div>
        <div className="head-item">
          <div className="icon"></div>
          {/*<img src="../../assets/icon.png" alt=""/>*/}
          <div className="text">
            <p>56789.12</p>
            <span>招商面积(㎡)</span>
          </div>
        </div>
        <div className="head-item">
          <div className="icon"></div>
          {/*<img src="../../assets/icon.png" alt=""/>*/}
          <div className="text">
            <p>56789.12</p>
            <span>招商面积(㎡)</span>
          </div>
        </div>
        <div className="head-item">
          <div className="icon"></div>
          {/*<img src="../../assets/icon.png" alt=""/>*/}
          <div className="text">
            <p>56789.12</p>
            <span>招商面积(㎡)</span>
          </div>
        </div>
        <div className="head-item">
          <div className="icon"></div>
          {/*<img src="../../assets/icon.png" alt=""/>*/}
          <div className="text">
            <p>56789.12</p>
            <span>招商面积(㎡)</span>
          </div>
        </div>
      </div>
      <Button type="primary" onClick={this.handleBack}>返回</Button>
    </div>
  }
}
 class House extends React.Component{
  state={
    showTab:'list'
  }
  handleTab=(item)=>{
    console.log(item);
    this.setState({
      showTab:'build'
    })
  }
   handleBack=()=>{
    this.setState({
      showTab:'list'
    })
   }
  render(){
    let dom;
    if(this.state.showTab=='list'){
      dom=<List clicked={this.handleTab}></List>
    }else{
      dom=<BuildManage back={this.handleBack}></BuildManage>
    }
    return <div>
      {
        dom
      }
    </div>
  }
 }
export default House

