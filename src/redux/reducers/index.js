// reducers/index.js
import { combineReducers } from 'redux'
import companyReducer from './companyReducer'
import contactReducer from './contactReducer'

const rootReducer = combineReducers({
  companies: companyReducer,
  contacts: contactReducer,
})

export default rootReducer
