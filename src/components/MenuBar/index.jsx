import { Col, Menu, Row, Typography } from 'antd'
import React, { useState } from 'react'

import './styles.css'

const { Text } = Typography

const MenuBar = () => {
  const [selectedKeys, setSelectedKeys] = useState(['hall'])

  const handleMenuClick = (e) => {
    setSelectedKeys([e.key])
  }

  return (
    <Row justify='start' className='menuRow'>
      <Col>
        <Menu
          mode='horizontal'
          selectedKeys={selectedKeys}
          onClick={handleMenuClick}
          className='menu-container'
        >
          <Menu.Item key='hall' className='menu-items'>
            <span className='menu-border'>
              <Text strong className='topHeadings'>
                Hall
              </Text>
            </span>
          </Menu.Item>
          <Menu.Item key='matches' className='menu-item'>
            <Text className='topHeadings'>Matches</Text>
          </Menu.Item>
          <Menu.Item key='meeting' className='menu-item'>
            <Text className='topHeadings'>Meetings</Text>
          </Menu.Item>
          <Menu.Item key='tradehub' className='menu-item'>
            <Text className='topHeadings'>Trade Hub</Text>
          </Menu.Item>
          <Menu.Item key='pipeline' className='menu-item'>
            Pipeline
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  )
}

export default MenuBar
