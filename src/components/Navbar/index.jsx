import { Avatar, Col, Dropdown, Input, Layout, Menu, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import DownArrowIcon from 'components/icons/DownArrowIcon'
import MessageIcon from 'components/icons/MessageIcon'
import { menu } from 'utils/constants'
import NotificationIcon from 'components/icons/NotificationIcon'

import './styles.css'

const { Header } = Layout

const Navbar = () => (
  <Header className='header'>
    <Row justify='space-between' align='middle'>
      <Col span={6} className='logo'>
        <span className='logoText'>LOGO</span>
        <Input.Search placeholder='Search' className='search' />
      </Col>
      <Col span={10} className='rightContent'>
        <Row justify='end' gutter={16}>
          <Col>
            <NotificationIcon className='icon' />
          </Col>
          <Col>
            <MessageIcon className='icon' />
          </Col>
          <Col>
            <Dropdown overlay={menu}>
              <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
                <Avatar size='medium' icon={<UserOutlined />} />
                <span className='profileName'>Aladdinb2b LLC</span>{' '}
                <DownArrowIcon className='icon' />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
  </Header>
)

export default Navbar
