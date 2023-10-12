import { Col, Divider, Flex, Input, Row, Typography } from 'antd'
import { cloneDeep } from 'lodash'
import React, { useState } from 'react'
import { RiFilter2Line } from 'react-icons/ri'
import { useSelector } from 'react-redux'

import BubbleView from 'components/BubbleView/BubbleView'
import FilterModal from 'components/FilterModal'
import { filterCount } from 'utils/constants'

import './styles.css'

const { Text } = Typography

const Tabs = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('companies')

  const companies = useSelector((state) => state.companies)
  const contacts = useSelector((state) => state.contacts)
  const companiesList = cloneDeep(companies)
  const contactsList = cloneDeep(contacts)
  const data = activeTab === 'companies' ? companiesList.data : contactsList.data
  const links = activeTab === 'companies' ? companiesList.links : contactsList.links

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <>
      <Row justify='start' align='middle'>
        <Col className='search-col'>
          <Input.Search placeholder='Search' className='search-input' />
        </Col>
        <Col className='filter-col'>
          <div className='filter-container' onClick={showModal}>
            <RiFilter2Line className='filter-icon' />
            <span className='filter-text'>Filter</span>
            {filterCount > 0 && <span className='filter-count'>{filterCount}</span>}
          </div>
        </Col>
        <Divider className='tab-divider' />
        <Col className='tab-col'>
          <Flex gap='large'>
            <Col className={activeTab === 'companies' && 'company-tab'}>
              <Text onClick={() => setActiveTab('companies')} className='top-headings'>
                Companies
                <span className='companies-people-count'>{companies.data.length}</span>
              </Text>
            </Col>
            <Col className={activeTab === 'people' && 'company-tab'} >
              <Text onClick={() => setActiveTab('people')} className='top-headings'>
                People
                <span className='companies-people-count'>{contacts.data.length}</span>
              </Text>
            </Col>
          </Flex>
        </Col>
        <Divider className='tab-divider-bottom' />
        <FilterModal
          isModalVisible={isModalVisible}
          handleCancel={handleCancel}
          handleChange={handleChange}
        />
      </Row>
      <BubbleView activeTab={activeTab} data={data} links={links} />
    </>
  )
}

export default Tabs
