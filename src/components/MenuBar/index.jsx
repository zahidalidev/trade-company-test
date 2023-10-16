import { Col, Menu, Row, Typography, Flex, Divider } from 'antd'
import React, { useState } from 'react'

import './styles.css'
import { menus } from 'utils/constants'

const { Text } = Typography

const MenuBar = () => {
  const [selectedKeys, setSelectedKeys] = useState(['hall'])

  const handleMenuClick = (e) => {
    setSelectedKeys([e.key])
  }

  return (
    <>
      <Menu
        mode='horizontal'
        selectedKeys={selectedKeys}
        onClick={handleMenuClick}
        className='menu-container'
      >
        {menus.map(menu => (
          <Menu.Item key={menu.key} className='menu-item'>
            <Text className='topHeadings'>{menu.title}</Text>
          </Menu.Item>
        ))}
      </Menu>
      <Divider className='divider-bottom' />
    </>
  )
}

export default MenuBar
