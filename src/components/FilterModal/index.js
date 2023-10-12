import { Button, Col, Modal, Row, Space, Typography } from 'antd'
import React from 'react'

import Select from 'components/Select'
import { userTypes } from 'utils/constants'

import './styles.css'

const { Text } = Typography

const FilterModal = ({ isModalVisible, handleCancel, handleChange }) => (
  <Modal
    title='Filter Options'
    visible={isModalVisible}
    onCancel={handleCancel}
    footer={null}
    width='70%'
    className='modal-container'
  >
    <div className='modal-fields'>
      {Array.from(Array(10).keys()).map((index) => (
        <Col key={index} className='modal-select'>
          <Select placeholder='User Type' onChange={handleChange} options={userTypes} />
        </Col>
      ))}
      <Row justify='end' className='modal-row'>
        <Space wrap>
          <Button type='text' className='modal-button'>
            <Text>Clear all</Text>
          </Button>
          <Button className='model-apply-button'>
            <Text className='modal-apply-c' strong>
              Apply
            </Text>
          </Button>
        </Space>
      </Row>
    </div>
  </Modal>
)

export default FilterModal
