import { Button, Col, Modal, Row, Space, Typography } from 'antd'
import React, { useState } from 'react'

import Select from 'components/Select'

import './styles.css'

const { Text } = Typography

const FilterModal = ({ isModalVisible, handleCancel, handleChange, filters, handleFilter }) => {
  return (
    <Modal
      title='Filter Options'
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      width='70%'
      className='modal-container'
      mask={false}
    >
      <div className='modal-fields'>
        {filters.map((filter, index) => (
          <Col key={index} className='modal-select'>
            <Select
              placeholder={filter.placeHolder}
              onChange={(value) => handleChange(value, index)}
              options={filter.options}
            />
          </Col>
        ))}
        <Row justify='end' className='modal-row'>
          <Space wrap>
            <Button type='text' className='modal-button'>
              <Text>Clear all</Text>
            </Button>
            <Button onClick={handleFilter} className='model-apply-button'>
              <Text className='modal-apply-c' strong>
                Apply
              </Text>
            </Button>
          </Space>
        </Row>
      </div>
    </Modal>
  )
}

export default FilterModal
