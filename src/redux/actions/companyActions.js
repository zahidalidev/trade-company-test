// companyActions.js
import * as actionTypes from './actionTypes'

export const fetchCompaniesRequest = () => ({
  type: actionTypes.FETCH_COMPANIES_REQUEST,
})

export const fetchCompaniesSuccess = (companies) => ({
  type: actionTypes.FETCH_COMPANIES_SUCCESS,
  payload: companies,
})

export const fetchCompaniesFailure = (error) => ({
  type: actionTypes.FETCH_COMPANIES_FAILURE,
  payload: error,
})
