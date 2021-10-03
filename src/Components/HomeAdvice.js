import React from 'react'
import { Card, Col, Row } from 'antd';
import Container from '@mui/material/Container';

function HomeAdvice() {
    return (
        <Container fixed style={{marginTop:'40px',marginBottom:'40px'}}>
        <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    
  </Card>
      </Col>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    
  </Card>
      </Col>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    
  </Card>
      </Col>
    </Row>
  </div>
  </Container>
    )
}

export default HomeAdvice
