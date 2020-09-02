/**
 * Created by Ljili on 2020/6/5.
 */
import React from 'react'
import {DatePicker,Input,Button,Row,Col,Form } from 'antd'
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
    ]
  }
  onFinish=()=>{

  }
  onFinishFailed=()=>{

  }
  handleClick=(item)=>{
    // console.log(item);
    this.props.clicked(item)
  }
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
            <Button type="primary"> 添加楼栋</Button>
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
      楼栋管理
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

