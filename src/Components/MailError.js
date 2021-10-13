import React from 'react'
import { Button,Avatar } from 'antd';
import {CloseOutlined   } from'@ant-design/icons';

function MailError() {
    return (
        <>
        <div className="featuredItem" style={{marginTop:'50px'}}>
      
        <div className='divCenter' style={{textAlign:'center'}}>
        
       < Avatar style={{backgroundColor:'red'}} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
    icon={<CloseOutlined    />}/>
    <hr className="home-top__seperator" style={{width:'300px', marginTop:'30px', marginBottom:'30px'}} />
           <h1>ERROR</h1> 
           
           <h1>An error was encountered while confirming the mail. please contact admin</h1>

           <hr className="home-top__seperator" style={{width:'300px', marginTop:'30px', marginBottom:'30px'}} />
           <Button  type="primary" a href="http://localhost:3000/">Continue to web site</Button>
           
        </div>
        </div>
        
        </>
    )
}

export default MailError
