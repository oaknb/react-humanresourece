import { Form, Input, InputNumber, Button } from 'antd';
import React, { useState } from 'react'
import { useHistory } from 'react-router';






function FormRegister(){
const handleSubmit=(e)=>{
  e.preventDefault();
 
}

const [userName, setUserName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const history = useHistory();

const addUser = (data) => {
  let requestOptions = {
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      method:"POST",
      body:JSON.stringify(data)
  }
  fetch('http://localhost:8000',requestOptions)
  .then(()=>{alert('User register...')})
}
const add = () => {
  let newUser = {
      
      userName: userName,
      email: email,
      password: password
  }
  addUser(newUser);
}


return(

<Form  name="nest-messages" onSubmit={handleSubmit}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input value={userName} onChange={(e)=>setUserName(e.target.value)} />
      </Form.Item>
      
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
      <Input value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item name={['user', 'password']} label="Password" rules={[{ type: 'password' }]}>
      <Input value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Item>
      
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

)
};


export default FormRegister;