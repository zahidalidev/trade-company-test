import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { createLinks } from 'utils/helpers'
import Footer from 'components/Footer'
import { fetchAllCompanies } from 'api/company'
import MenuBar from 'components/MenuBar'
import Navbar from 'components/Navbar'
import Routes from 'components/Routes'
import Tabs from 'components/Tabs'
import { UPDATE_COMPANIES } from 'store/companies'

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

  useEffect(() => {
    getAllCompanies()
  }, [])

  return (
    <Router>
      <Layout className='app-container'>
        <Navbar />
        <MenuBar />
        <Content className='app-content'>
          <Tabs />
          <Routes />
        </Content>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App
