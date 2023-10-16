import { Dropdown, Input, Layout, Select, Flex, Typography } from 'antd'

import DownArrowIcon from 'components/icons/DownArrowIcon'
import MessageIcon from 'components/icons/MessageIcon'
import { menu, options } from 'utils/constants'
import NotificationIcon from 'components/icons/NotificationIcon'

import { ReactComponent as ProfileImage } from '../../../src/Images/profile.svg'
import { SearchIcon } from '../icons'
import './styles.css'

const { Header } = Layout
const { Option } = Select
const { Text } = Typography

const Navbar = () => (
  <Header className='header'>
    <Flex justify='space-between' wrap='wrap'>
      <Flex gap={84} align='center'>
        <Select defaultValue='logoImage' className='select-image' suffixIcon={<DownArrowIcon />}>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <Input placeholder='Search' className='search' suffix={<SearchIcon />} />
      </Flex>
      <Flex gap={35}>
        <NotificationIcon className='icon' />
        <MessageIcon className='icon' />
        <Dropdown overlay={menu}>
          <a className='ant-dropdown-link' onClick={e => e.preventDefault()}>
            <Flex gap={5} align='center' justify='center'>
              <ProfileImage className='zindex1' />

              <Text className='profileName'>Aladdinb2b LLC</Text>

              <DownArrowIcon className='icon' />
            </Flex>
          </a>
        </Dropdown>
      </Flex>
    </Flex>
  </Header>
)

export default Navbar
