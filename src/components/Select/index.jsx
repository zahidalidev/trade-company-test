import { Select as AntdSelet, Space } from "antd";
import React from "react";

import "./styles.css";

const { Option } = AntdSelet;

const Select = ({ placeholder, onChange, options, selectedValues }) => (
  <AntdSelet
    mode="multiple"
    className="select"
    placeholder={placeholder}
    value={selectedValues}
    onChange={onChange}
  >
    {options.map((option) => (
      <Option key={option.value} value={option.value} label={option.label}>
        <Space>{option.label}</Space>
      </Option>
    ))}
  </AntdSelet>
);

export default Select;
