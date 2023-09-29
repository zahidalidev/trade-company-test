// companyReducer.js
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  companies: [],
  loading: false,
  error: null,
}

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actionTypes.FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload,
      }
    case actionTypes.FETCH_COMPANIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default companyReducer
