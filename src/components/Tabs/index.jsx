import { Col, Divider, Flex, Input, Row, Typography } from 'antd'
import { cloneDeep } from 'lodash'
import React, { useMemo, useState } from 'react'
import { RiFilter2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

import BubbleView from 'components/BubbleView'
import { createLinks } from 'utils/helpers'
import { companiesLogos, contactsLogos, filterCount, filterOptions } from 'utils/constants'
import FilterModal from 'components/FilterModal'
import { FILTER_COTACTS } from 'store/contacts'
import { FILTER_COMPANIES } from 'store/companies'

import './styles.css'
import Spin from 'components/Spin'

const { Text } = Typography

const Tabs = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('companies')
  const [filters, setFilters] = useState(filterOptions)

  const dispatch = useDispatch()
  const companies = useSelector((state) => state.companies)
  const contacts = useSelector((state) => state.contacts)
  const companiesList = cloneDeep(companies)
  const contactsList = cloneDeep(contacts)
  const data = activeTab === 'companies' ? companiesList.data : contactsList.data
  const links = activeTab === 'companies' ? companiesList.links : contactsList.links
  const logos = activeTab === 'companies' ? companiesLogos : contactsLogos

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleChange = (value, index) => {
    let copyFilters = [...filters]
    copyFilters[index].selectedValues = value
    setFilters(copyFilters)
  }

  const handleFilter = () => {
    const filteredContacts = []
    const filteredCompanies = []
    for (let i = 0; i < contacts.allData.length; i++) {
      for (let j = 0; j < filters.length; j++) {
        if (filters[j].selectedValues.includes(contacts.allData[i][filters[j].name]))
          filteredContacts.push(contacts.allData[i])
      }
    }

    for (let i = 0; i < companies.allData.length; i++) {
      for (let j = 0; j < filters.length; j++) {
        if (filters[j].selectedValues.includes(companies.allData[i][filters[j].name]))
          filteredCompanies.push(companies.allData[i])
      }
    }

    const updatedContacts = createLinks(
      filteredContacts.length === 0 ? contacts.allData : filteredContacts
    )
    const updatedCompanies = createLinks(
      filteredCompanies.length === 0 ? companies.allData : filteredCompanies
    )

    dispatch(FILTER_COTACTS(updatedContacts))
    dispatch(FILTER_COMPANIES(updatedCompanies))
  }

  const handleSearch = (event) => {
    const value = event.target.value

    const filteredContacts = contacts.allData.filter((contact) =>
      contact.firstname?.includes(value.toLowerCase())
    )
    const filteredCompanies = companies.allData.filter((company) =>
      company.name?.includes(value.toLowerCase())
    )

    const updatedContacts = createLinks(filteredContacts)
    const updatedCompanies = createLinks(filteredCompanies)

    dispatch(FILTER_COTACTS(updatedContacts))
    dispatch(FILTER_COMPANIES(updatedCompanies))
  }

  return (
    <>
      <Row justify='start' align='middle'>
        <Col className='search-col'>
          <Input.Search onChange={handleSearch} placeholder='Search' className='search-input' />
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
            <Col className={activeTab === 'people' && 'company-tab'}>
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
          filters={filters}
          handleFilter={handleFilter}
        />
      </Row>
      {useMemo(
        () =>
          companies.loading ? (
            <Spin />
          ) : (
            <BubbleView activeTab={activeTab} data={data} links={links} logos={logos} />
          ),
        [activeTab, data, links, logos]
      )}
    </>
  )
}

export default Tabs
