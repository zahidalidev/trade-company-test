import { Space, Spin as AntSpin } from 'antd'

import './styles.css'

const Spin = () => (
  <Space className='spin-container'>
    <Space size='large'>
      <AntSpin size='large' />
    </Space>
  </Space>
)

export default Spin
