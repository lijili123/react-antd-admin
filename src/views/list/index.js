/**
 * Created by Ljili on 2020/6/5.
 */
import React from 'react'
import {DatePicker } from 'antd'
class List extends React.Component{
  render(){
    return <div>
      <DatePicker picker="week" />
    </div>
  }
}
export default List