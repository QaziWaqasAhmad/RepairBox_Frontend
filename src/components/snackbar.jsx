import React from 'react';
import { Col, Row } from 'antd';
import '../App.css'

const CustomizedSnackbars=React.FC = () => (
  <div className='snackbar'>
     <Row style={{display:'flex',alignItems:'flex-start'}}>
      <Col span={6}>Click For documentation</Col>
      <Col span={6}>Please fill valid/active email to get notification</Col>
      <Col span={6}>Bug report at info.codehas@gmail.com</Col>
      <Col span={6}>v 0.8.7</Col>
    </Row>
    
  </div>
);

export default CustomizedSnackbars;