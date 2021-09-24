import React from "react";
import { Carousel, Row,Col,  Image} from 'antd';

import Container from '@mui/material/Container';


function UserComments() {

 

    return (
    
      
      <Container fixed>
<div style={{height:'450px', flexDirection: "column-reverse"}}>
<Carousel autoplay effect="fade" style={{height:'200px', color:'#fff', lineHeight:'220px',textAlign: 'left',background: '#d8d8d8'}}>
    <div>
    <Row> <Col span={18} push={6}>
   <div style={{textAlign:'justify'}}>aadafdgfadfgadfda</div>
</Col>
<Col span={6} pull={18}>
       <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    </Col>
    </Row>
    </div>
    <div>
    <Row> <Col span={18} push={6}>
   <div style={{textAlign:'justify'}}>aadafdgfadfgadfda</div>
</Col>
<Col span={6} pull={18}>
       <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    </Col>
    </Row>
    </div>
    <div>
    <Row>
    <Col span={18} push={6}>
   <div style={{textAlign:'justify'}}>aadafdgfadfgadfda</div>
</Col>
<Col span={6} pull={18}>
       <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    </Col>
    </Row>
    
    </div>
    <div>
    <Row>
    <Col span={18} push={6}>
   <div style={{textAlign:'justify'}}>aadafdgfadfgadfda</div>
</Col>
<Col span={6} pull={18}>
       <Image
      width={200}
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