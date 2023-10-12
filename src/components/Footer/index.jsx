import React from 'react'
import { Col, Layout, Row } from 'antd'

import './styles.css'

const { Footer: FooterLayout } = Layout

const Footer = () => (
  <FooterLayout className='footer'>
    <Row justify='start'>
      <Col>
        <span className='footer-copy-right'>Copy Right © Aladdinb2b - Connection Businesses</span>
      </Col>
      <Col>
        <span className='footer-text'>Terms of Use</span>
      </Col>
      <Col>
        <span className='footer-text'>Privacy Policy</span>
      </Col>
    </Row>
  </FooterLayout>
)

export default Footer
