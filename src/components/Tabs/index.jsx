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

  const logos =
    activeTab === "companies"
      ? [
          "/icons/companyLogo2.svg",
          "/icons/companyLogo3.svg",
          "/icons/companyLogo4.svg",
          "/icons/companyLogo5.svg",
          "/icons/companyLogo6.svg",
          "/icons/companyLogo7.svg",
          "/icons/companyLogo8.svg",
        ]
      : [
          "/icons/people1.svg",
          "/icons/people2.svg",
          "/icons/people3.svg",
          "/icons/people4.svg",
          "/icons/people5.svg",
          "/icons/people6.svg",
          "/icons/people7.svg",
        ];

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
      <BubbleView activeTab={activeTab} data={data} links={links} logos={logos} />
    </>
  )
}

export default Tabs
