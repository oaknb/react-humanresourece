/** import React from 'react';
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
          <Input type="email" placeholder="Email" onChange={(event)=>{this.setState({email:event.target.value})}}/>
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password  type="password" placeholder="Password"  onChange={(event)=>{this.setState({email:event.target.value})}}/>
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
  export default LoginForm;**/

  import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { apiUrl } from '../env/config';
import { useHistory } from 'react-router';




function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const history = useHistory();

  const createLogInDTO = () => {
    let logInDTO = {
      email: email,
      password: password
    }
    login(logInDTO);
  }

  const login = (data) => {
    let requestOptions = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    }

    
    fetch(apiUrl+'/api/User/getToken', requestOptions)
      .then((res) => {
        res.json()
          .then((result) => {
            console.log(result.token);
            let bearerStr = "Bearer ";
            localStorage.setItem('token',JSON.stringify(bearerStr+result.token));
            getfruitsaut();
            history.push('/managementhome')
          });
        })

        const getfruitsaut = () => {

          let token = JSON.parse(localStorage.getItem('token'));
          console.log(token) // kontrol maksatlÄ±
    
          //tokeni authorized metoda yollama
          let requestOptionstoken = {
            headers: {
              "content-type": "application/json",
              'Authorization':token
            },
            method: "GET"
          }
          fetch(apiUrl+'/api/User/getFruitsAuthenticated', requestOptionstoken)
          .then((res) => {
            res.json()
              .then((data) => {
                console.log(data);            
                })
              })
        }

      }
  

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
        <Input value={email} onChange={(event) => { setEmail(event.target.value) }} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={() => { createLogInDTO() }}>
          Submit
        </Button>
      </Form.Item>
    </Form>

  );
};

export default LoginForm;