// contactActions.js
import * as actionTypes from './actionTypes'

export const fetchContactsRequest = () => ({
  type: actionTypes.FETCH_CONTACTS_REQUEST,
})

export const fetchContactsSuccess = (contacts) => ({
  type: actionTypes.FETCH_CONTACTS_SUCCESS,
  payload: contacts,
})

export const fetchContactsFailure = (error) => ({
  type: actionTypes.FETCH_CONTACTS_FAILURE,
  payload: error,
})

export const filterCompanies = (filters) => ({
  type: actionTypes.FILTER_COMPANIES,
  payload: filters,
})

export const filterContacts = (filters) => ({
  type: actionTypes.FILTER_CONTACTS,
  payload: filters,
})
