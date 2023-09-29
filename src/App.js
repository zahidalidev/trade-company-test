// App.js
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import BubbleView from './components/BubbleView'
import CompanyDetails from 'components/CompanyDetails/CompanyDetails'
import ContactDetails from 'components/ContactDetails/ContactDetails'
import Header from 'components/Header/Header'
import Filters from 'components/Filters/Filters'
import BubbleView from 'components/BubbleView/BubbleView'
import {companiesList} from 'utils/constants'

function App() {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    // Fetch companies data from API or other data source
    // Example API call:
    // fetch('https://api.example.com/companies')
    //   .then(response => response.json())
    //   .then(data => setCompanies(data.result.data))
    //   .catch(error => console.error('Error fetching companies:', error));
    // Dummy data for demonstration
    const dummyCompanies = [
      {
        _id: '62a1c6fa0e0e5931a2a45cd0',
        name: 'Company4',
        website: 'Company4.com',
        brief:
          'Rich in systems knowledge and with many years of experience in Industrial field supply, we really are the one-stop station resource...',
        tel: '97440164273',
        email: 'info@company4.com',
        country: '61e536c2135075a97f8a3488',
        address: 'P.O.Box 201382',
        userType: 'host',
        meetingsScheduled: 0,
        meetingsConducted: 0,
        matches: 0,
        RFQs: 0,
        quotations: 0,
        contacts: [{ _id: '62a1c6fa0e0e5931a2a45cd4', firstname: 'Ahmd', lastname: 'Kiani' }],
      },
      {
        _id: '62a1c6fa0e0e5931a2a45cdb',
        name: 'Company5',
        website: 'Company5.com',
        brief:
          'We are capable of putting together a package for pre-opening or existing supplies. Our efficient transport system enables us to make prompt deliveries...',
        tel: '97444443499',
        email: 'info@company5.com',
        country: '61e536c2135075a97f8a3488',
        address: 'Al Sadd Sports Complex , Doha, Doha, Qatar',
        userType: 'host',
        meetingsScheduled: 0,
        meetingsConducted: 0,
        matches: 0,
        RFQs: 0,
        quotations: 0,
        contacts: [{ _id: '62a1c6fb0e0e5931a2a45cdf', firstname: 'Hazim', lastname: 'A' }],
      },
      // Add more companies as needed
    ]

    setCompanies(companiesList.result.data)
  }, [])

  return (
    <Router>
      <div className='App'>
        <Header />
        <Filters />
        <Routes>
          <Route exact path='/' element={<BubbleView companies={companies} />} />
          <Route path='/company/:id' component={CompanyDetails} />
          <Route path='/contact/:id' component={ContactDetails} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
