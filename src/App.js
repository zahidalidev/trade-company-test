import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BubbleView from 'components/BubbleView/BubbleView'
import { fetchAllCompanies } from 'api/company'
import { createLinks } from 'utils/helpers'
import { UPDATE_COMPANIES } from 'store/companies'

const App = () => {
  const dispatch = useDispatch()

  const getAllCompanies = async () => {
    const responce = await fetchAllCompanies()
    console.log(responce)
    const updatedData = createLinks(responce)
    dispatch(UPDATE_COMPANIES(updatedData))
  }

  useEffect(() => {
    getAllCompanies()
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<BubbleView />} />
      </Routes>
    </Router>
  )
}

export default App
