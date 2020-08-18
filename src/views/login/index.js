/**
 * Created by Ljili on 2020/6/5.
 */
import React from 'react'
import { withRouter } from "react-router-dom";

import { Form, Input, Button, Checkbox } from 'antd';
// import loginbg from './login-bg.png'
import './index.css';

const layout = {
  // labelCol: { span: 4 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: {
    // offset: 4,
    span: 24 },
};

const Login = (props) => {
  const onFinish = values => {
    if(values){
      console.log(values);
      console.log(props);
      window.sessionStorage.setItem('user',true)
      props.history.replace('/')
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <div className="login-con">
        <div className="login-title">登录</div>
        <Form
          name="basic"
          {...layout}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="账号" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password  placeholder="密码"/>
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" className="login-submit" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default withRouter(Login)