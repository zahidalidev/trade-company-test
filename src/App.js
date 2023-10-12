import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { createLinks } from 'utils/helpers'
import Footer from 'components/Footer'
import { fetchAllCompanies } from 'api/company'
import { fetchAllContacts } from 'api/contacts'
import MenuBar from 'components/MenuBar'
import Navbar from 'components/Navbar'
import Tabs from 'components/Tabs'
import { UPDATE_COMPANIES } from 'store/companies'
import { UPDATE_COTACTS } from 'store/contacts'

import './App.css'

const { Content } = Layout

const App = () => {
  const dispatch = useDispatch()

  const getAllCompanies = async () => {
    try {
      const { result } = await fetchAllCompanies()
      const updatedData = createLinks(result.data)
      dispatch(UPDATE_COMPANIES(updatedData))
    } catch (error) {}
  }

  const getAllCotacts = async () => {
    try {
      const { result } = await fetchAllContacts()
      const updatedData = createLinks(result.data)
      dispatch(UPDATE_COTACTS(updatedData))
    } catch (error) {}
  }

  useEffect(() => {
    getAllCompanies()
    getAllCotacts()
  }, [])

  return (
    <Router>
      <Layout className='app-container'>
        <Navbar />
        <MenuBar />
        <Content className='app-content'>
          <Tabs />
        </Content>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App
