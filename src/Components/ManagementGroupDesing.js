import React from 'react'
import { Row, Col } from 'antd';
import UserChart from './UserChart';



function ManagementGroupDesing() {


    return (
        <>
        
        <Row gutter={[16, 16]}>
  <Col span={6}><UserChart></UserChart></Col>
  <Col span={6}> <div>fdsbgajdbfgafdjgad</div></Col>
  <Col span={6}> <div>fdsbgajdbfgafdjgad</div></Col>
  <Col span={6}><div>fdsbgajdbfgafdjgad</div> </Col>

  <Col span={6}><div>fdsbgajdbfgafdjgad</div> </Col>
  <Col span={6}><div>fdsbgajdbfgafdjgad</div> </Col>
  <Col span={6}> <div>fdsbgajdbfgafdjgad</div></Col>
  <Col span={6}><div>fdsbgajdbfgafdjgad</div> </Col>
</Row>
<Row gutter={[16, 16]}>
  <Col span={6}> </Col>
  <Col span={6}> </Col>
  <Col span={6}> </Col>
  <Col span={6}> </Col>
</Row>

</>
    )
}

export default ManagementGroupDesing
