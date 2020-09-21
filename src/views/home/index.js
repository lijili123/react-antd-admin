/**
 * Created by Ljili on 2020/6/5.
 */
import React,{useState,useEffect} from 'react'
import TinyEditor from './../../components/TinyEditor'
import {Button} from 'antd'
import './home.less'
class Home extends React.Component{
  render(){
    return <div>
      <TinyEditor initialValue="富文本"></TinyEditor>
      <Count></Count>
      <div className="css-list">
        <div className="item">
          <div className="item-e"></div>
        </div>
      </div>
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>

      <div className="spinner-box">
        <div className="configure-border-1">
          <div className="configure-core"></div>
        </div>
        <div className="configure-border-2">
          <div className="configure-core"></div>
        </div>
      </div>

      <div className="bubble-box">
        <div className="bubble-item bubble1"></div>
        <div className="bubble-item bubble2"></div>
        <div className="bubble-item bubble3"></div>
      </div>
    </div>
  }
}
function Count(props) {
  const [count,setCount]=useState(0)
  const add=()=>{
    setCount(count+1)
  }
  const minus=()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  useEffect(()=>{
    document.title = `You clicked ${count} times`;
    console.log('mounted');
    return ()=>console.log('unmounted');
  },[])
  return <div className="count">
    <Button type="primary" onClick={add}>加1</Button> <span className="num">{count}</span><Button type="primary" onClick={minus}>减1</Button>
  </div>
}
export default Home