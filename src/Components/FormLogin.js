import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input,  Button, Checkbox  } from 'antd';




function LoginForm(){


const storeCollector=()=>
{
  let store=JSON.parse(localStorage.getItem('login'));
  if(store && store.login)
  {
    this.setState({login:true,store:store})
  }
}

const login=()=>
{
  fetch('',{
   method:"POST" ,
   body:JSON.stringify(this.state)
  }).then((response)=>{
    response.json().then((result)=>{
      console.warn("result",result);
      localStorage.setItem('login',JSON.stringify({
        login:true,
        token:result.token
      }))
      storeCollector()
    })
  })
};

  
    return (
      
      

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input onChange={(event)=>{this.setState({email:event.target.value})}}/>
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password type="password" onChange={(event)=>{this.setState({email:event.target.value})}}/>
        </Form.Item>
  
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={()=>{login()}}>
          
            Submit
          </Button>
        </Form.Item>
      </Form>





      
    );
  };



  export default LoginForm;