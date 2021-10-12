import React from 'react'
import { Button } from 'antd';



function MailControl() {
   

    return (
        <>
        <div className="featuredItem" style={{marginTop:'50px'}}>
      
        <div className='divCenter' style={{textAlign:'center'}}>
           <h1>WELCOME</h1> 
           
           <h1>Your e-mail has been confirmed</h1>
           
           <p>Thank you for validating your e-mail address. You can now continue to use <a href="http://localhost:3000/"> hr57.co</a></p>
           <hr className="home-top__seperator" style={{width:'300px', marginTop:'30px', marginBottom:'30px'}} />
            <Button  type="primary" a href="http://localhost:3000/">Continue to web site</Button>
        </div>
        </div>
        
        </>
    )
}

export default MailControl
