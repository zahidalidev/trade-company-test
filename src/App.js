// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import BubbleView from 'components/BubbleView/BubbleView'
import { companiesList } from 'utils/constants'

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

    setCompanies(companiesList.result.data)
  }, [])

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<BubbleView companies={companies} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
