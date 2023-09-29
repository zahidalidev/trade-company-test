// contactReducer.js
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  contacts: [],
  loading: false,
  error: null,
}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      }
    case actionTypes.FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default contactReducer
