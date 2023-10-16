import { Select as AntdSelet, Space } from 'antd'
import React, { useState } from 'react'

import './styles.css'

const { Option } = AntdSelet

const Select = ({ placeholder, onChange, options }) => {
  const [selectedValues, setSelectedValues] = useState([])

  const handleSelectChange = (values) => {
    setSelectedValues(values)
    onChange(values)
  }

  return (
    <AntdSelet
      mode='multiple'
      className='select'
      placeholder={placeholder}
      value={selectedValues}
      onChange={handleSelectChange}
    >
      {options.map(option => (
        <Option key={option.value} value={option.value} label={option.label}>
          <Space>{option.label}</Space>
        </Option>
      ))}
    </AntdSelet>
  )
}

export default Select
