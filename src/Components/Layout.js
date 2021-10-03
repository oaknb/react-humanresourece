import React from 'react';

import 'antd/dist/antd.css';

import ModalLogin from './ModalLogin'
import ModalRegister from './ModalRegister'
import Logoo from '../Components/img/logo.svg';





function MyLayout(){



/*
return(
<>

  <Layout className="layout">
   
   
    <Header >
      <a href="/" className="Header-logo">HR</a>
      <conteiner className="Header-login">
     <ModalLogin></ModalLogin>
     &nbsp;&nbsp;
     <ModalRegister></ModalRegister>
    </conteiner>
    </Header>
    
  </Layout>
  </>*/
  return (
    <section className="header">
      <section className="header-top">
        
        <section className="header-top__logoo">
        <a href="/">
          <img height='70px' src={Logoo} alt="" /></a>
        </section>
        <section className="header-top__logo">
          <a href="/" className="header-logo">HR57</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__Login">
            <ModalLogin></ModalLogin>
            &nbsp;&nbsp;
            <ModalRegister></ModalRegister>
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        
        </section>
      </section>
   
  )

      };

      export default MyLayout;