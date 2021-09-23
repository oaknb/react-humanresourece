import React from 'react';

import 'antd/dist/antd.css';

import { Layout } from 'antd';
import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';




function MyLayout(){


const { Header } = Layout;

return(


  <Layout className="layout">
    <Header style={{textAlign:'right'}}>
      <div className="logo" />
    
     <ModalLogin ></ModalLogin>
     &nbsp;&nbsp;
     <ModalRegister></ModalRegister>
    
    </Header>
    
  </Layout>
)

      };

      export default MyLayout;