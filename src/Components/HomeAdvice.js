import React from 'react'
import { Card, Col, Row } from 'antd';
import Container from '@mui/material/Container';
import Security from '../Components/img/Security.png';
import Satisfaction from '../Components/img/satisfaction.png';
import innovation from '../Components/img/innovation.png';

function HomeAdvice() {
    return (
        <Container fixed style={{marginTop:'40px',marginBottom:'40px'}}>
        <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Security} />}
  >
    <h3 style={{textAlign:'center'}}>Reliability</h3>
    <p style={{textAlign:'center'}}>Reliability is the cornerstone of our business and relationships. The relationships we establish with world brands and our customers are based on this foundation. The fact that we are a global player in our dynamic and ever-evolving industry is the result of this trust.</p>
    
  </Card>
      </Col>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={Satisfaction} />}
  >
    <h3 style={{textAlign:'center'}}>Customer happiness</h3>
    <p style={{textAlign:'center'}}>We believe that our customers are secular to the best of everything. We are working hard to offer the best product. We know that with products that make a difference, we can get ahead of our competitors, grow, and continue to exist as long as our customers are satisfied.</p>
    
  </Card>
      </Col>
      <Col span={8}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={innovation} />}
  >
    <h3 style={{textAlign:'center'}}>Innovation</h3>
    <p style={{textAlign:'center'}}>Innovation means added value for us. We do not only create added value for products, we aim to make a difference to our customers with our innovative service approach. For this purpose, we question ourselves every day and produce innovative solutions that will create added value.</p>
    
  </Card>
      </Col>
    </Row>
  </div>
  </Container>
    )
}

export default HomeAdvice
