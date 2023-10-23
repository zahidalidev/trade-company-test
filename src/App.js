import { BrowserRouter as Router } from 'react-router-dom'

import { Layout, Space, Flex } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { createLinks } from 'utils/helpers'
import FooterBar from 'components/FooterBar'
import { fetchAllCompanies } from 'api/company'
import { fetchAllContacts } from 'api/contacts'
import MenuBar from 'components/MenuBar'
import Navbar from 'components/Navbar'
import SideBar from 'components/SideBar'
import Tabs from 'components/Tabs'
import { UPDATE_COMPANIES } from 'store/companies'
import { UPDATE_COTACTS } from 'store/contacts'

import './App.css'

import axios from 'axios'
import polyline from '@mapbox/polyline'

const { Header, Footer, Sider, Content } = Layout

const App = () => {
  const dispatch = useDispatch()

  const getCompaniesAndContact = async () => {
    try {
      const { result: companies } = await fetchAllCompanies()
      const { result: contacts } = await fetchAllContacts()

      const companiesData = createLinks(companies.data)
      const contactsData = createLinks(contacts.data)

      dispatch(UPDATE_COMPANIES(companiesData))
      dispatch(UPDATE_COTACTS(contactsData))
    } catch (error) {}
  }

  const fetchAllCoordinates = async () => {
    try {
      const origin = '25.1972,55.2744'
      const destination = '25.173186247709985,55.23993520592102'
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyDsEIMpQHSdhZOZcEk7cOe4ibTEV7Lz0Ec`
      )

      if (response.data.status === 'OK') {
        const route = response.data.routes[0]
        const routeCoordinates = polyline.decode(route.overview_polyline.points)

        console.log('routeCoordinates::', routeCoordinates)
      } else {
        throw new Error('Directions API request failed')
      }
    } catch (error) {
      console.error('Error getting route coordinates:', error)
    }
  }

  useEffect(() => {
    fetchAllCoordinates()
    getCompaniesAndContact()
  }, [])

  return (
    <Router>
      <Layout>
        <SideBar />
        <Layout>
          <Header>
            <Navbar />
          </Header>
          <MenuBar />
          <Content
            style={{
              background: '#ECF0F4',
              height: '60vh',
            }}
          >
            <Tabs />
          </Content>
          <Footer style={{ background: '#ECF0F4' }}>
            <FooterBar />
          </Footer>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
