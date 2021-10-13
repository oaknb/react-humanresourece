import React from 'react'
import { Button,Avatar } from 'antd';
import {CheckOutlined  } from'@ant-design/icons';


function MailControl() {
   

    return (
        <>
        <div className="featuredItem" style={{marginTop:'50px'}}>
      
        <div className='divCenter' style={{textAlign:'center'}}>
        < Avatar style={{backgroundColor:'green'}} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
    icon={<CheckOutlined   />}/>
    <hr className="home-top__seperator" style={{width:'300px', marginTop:'30px', marginBottom:'30px'}} />

           <h1>WELCOME</h1> 
           
           <h1>Your e-mail has been confirmed</h1>
           
           <p>Thank you for validating your e-mail address. </p>
           <hr className="home-top__seperator" style={{width:'300px', marginTop:'30px', marginBottom:'30px'}} />
            <Button  type="primary" a href="http://localhost:3000/">Continue to web site</Button>
        </div>
        </div>
        
        </>
    )
}

export default MailControl
