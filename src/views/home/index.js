/**
 * Created by Ljili on 2020/6/5.
 */
import React from 'react'
import TinyEditor from './../../components/TinyEditor'
class Home extends React.Component{
  render(){
    return <div>
      <TinyEditor initialValue="富文本"></TinyEditor>
    </div>
  }
}
export default Home