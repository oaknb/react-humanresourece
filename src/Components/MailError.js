import React from 'react'
import { Button } from 'antd';


function MailError() {
    return (
        <>
        <div className="featuredItem" style={{marginTop:'50px'}}>
      
        <div className='divCenter' style={{textAlign:'center'}}>
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
