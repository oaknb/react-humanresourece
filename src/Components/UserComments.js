import React from "react";
import { Carousel, Row,Col,  Image, Button} from 'antd';

import Container from '@mui/material/Container';


function UserComments() {

 

    return (
    
      
      <Container fixed>
<div style={{height:'450px', flexDirection: "column-reverse"}}>
<Carousel autoplay effect="fade" style={{height:'300px', color:'#fff', lineHeight:'220px',textAlign: 'left',background: '#2F4F4F'}}>
    <div>
    <Row> <Col span={18} push={6}>
    
    <div style={{textAlign:'justify', marginLeft:'30px'}}>Afdshfsdhgfshshfshgfbshshfsghsfghsf </div>
   <Button style={{right:'0px',bottom:'105px', position:'absolute'}}>Read me</Button>
</Col>
<Col span={6} pull={18}>
       <Image
      width={300}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    </Col>
    </Row>
    </div>
    <div>
    <Row> <Col span={18} push={6}>
   <div style={{textAlign:'justify', marginLeft:'30px'}}>Aadafdgfadfgadfda</div>
   <Button style={{right:'0px',bottom:'105px', position:'absolute'}}>Read me</Button>
</Col>
<Col span={6} pull={18}>
       <Image
      width={300}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    </Col>
    </Row>
    </div>
    <div>
    <Row>
    <Col span={18} push={6}>
    <div style={{textAlign:'justify', marginLeft:'30px'}}>Aadafdgfadfgadfda</div>
   <Button style={{right:'0px',bottom:'105px', position:'absolute'}}>Read me</Button>
</Col>
<Col span={6} pull={18}>
       <Image
      width={300}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    </Col>
    </Row>
    
    </div>
    <div>
    <Row>
    <Col span={18} push={6}>
    <div style={{textAlign:'justify', marginLeft:'30px'}}>Aadafdgfadfgadfda</div>
   <Button style={{right:'0px',bottom:'105px', position:'absolute'}}>Read me</Button>
</Col>
<Col span={6} pull={18}>
       <Image
      width={300}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    </Col>
    </Row>
    </div>
  </Carousel>
  </div>
  </Container>
    
 
    )
}

export default UserComments;