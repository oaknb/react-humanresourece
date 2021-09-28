import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';

function Deneme() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    
    fetch('https://localhost:44360/api/User/getToken', requestOptions)
      .then((res) => {
        res.json()
          .then((result) => {
            console.log(result.token);
            let bearerStr = "Bearer ";
            localStorage.setItem('token',JSON.stringify(bearerStr+result.token));
            getfruitsaut();
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
          fetch('https://localhost:44360/api/User/getFruitsAuthenticated', requestOptionstoken)
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

export default Deneme;