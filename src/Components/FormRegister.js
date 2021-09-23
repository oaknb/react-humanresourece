import { Form, Input, Button } from 'antd';
import React, { useState } from 'react'
// import { useHistory } from 'react-router';

function FormRegister() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const addUser = (data) => {
    let requestOptions = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    }
    /*apiUrl için env oluşturulacak. Loading gifi veya yazı dönecek fetch lerden önce.. */

    fetch('https://localhost:44360/api/User/register', requestOptions)
      .then((res) =>{ 
        if (res.status === 200){alert('User successfully registered');} //alertler yerine janti not kutucukları gelip gidecek
        else if (res.status === 400) {alert('Registration failed');}
      })
    // history.push(ModalLogin) ...   Routing yapılacak !!!
    // Password validation veya diğer validationlar front end e alınacak !! Rule'lar neymiş bulunacak ?!
  }
  const add = () => {
    let newUser = {
      userName: userName,
      email: email,
      password: password
    }
    addUser(newUser);
  }

  return (

    <Form name="nest-messages">
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input value={userName} placeholder="Name" onChange={(e) => setUserName(e.target.value)} />
      </Form.Item>

      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item name={['user', 'password']} label="Password" value={- 'Password' }>  
        <Input.Password  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit" onClick={add}>
          Submit
        </Button>
      </Form.Item>
    </Form>

  )
};

export default FormRegister;