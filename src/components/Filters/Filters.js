import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Select, Button } from 'antd'
// import { setFilters } from './redux/actions'

const { Option } = Select

const Filters = () => {
  const filters = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  const handleInputChange = (key, value) => {
    // dispatch(setFilters({ ...filters, [key]: value }))
  }

  const handleApplyFilters = () => {
    // Implement logic to apply filters (e.g., fetch filtered data from API)
    console.log('Applying filters:', filters)
  }

  return (
    <div className='filters-container'>
      <h2>Filters</h2>
      {/* <div className='filter-item'>
        <label>User Type:</label>
        <Select
          value={filters.userType}
          style={{ width: 200 }}
          onChange={(value) => handleInputChange('userType', value)}
        >
          <Option value='all'>All</Option>
          <Option value='guest'>Guest</Option>
          <Option value='host'>Host</Option>
        </Select>
      </div>
      <div className='filter-item'>
        <label>Products and Categories:</label>
        <Input
          value={filters.productsCategories}
          style={{ width: 200 }}
          onChange={(e) => handleInputChange('productsCategories', e.target.value)}
        />
      </div>
      <div className='filter-item'>
        <label>Operation:</label>
        <Select
          value={filters.operation}
          style={{ width: 200 }}
          onChange={(value) => handleInputChange('operation', value)}
        >
          <Option value='selling'>Selling</Option>
          <Option value='buying'>Buying</Option>
        </Select>
      </div>
      <div className='filter-item'>
        <label>Country:</label>
        <Input
          value={filters.country}
          style={{ width: 200 }}
          onChange={(e) => handleInputChange('country', e.target.value)}
        />
      </div>
      <div className='filter-item'>
        <label>Company Size:</label>
        <Input
          value={filters.companySize}
          style={{ width: 200 }}
          onChange={(e) => handleInputChange('companySize', e.target.value)}
        />
      </div>
      <div className='filter-item'>
        <label>Wish (favorite or like):</label>
        <Select
          value={filters.wish}
          style={{ width: 200 }}
          onChange={(value) => handleInputChange('wish', value)}
        >
          <Option value='favorite'>Favorite</Option>
          <Option value='like'>Like</Option>
        </Select>
      </div>
      <div className='apply-button'>
        <Button type='primary' onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </div> */}
    </div>
  )
}

export default Filters
