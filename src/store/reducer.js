import { combineReducers } from "redux";

import companies from "./companies";
import contacts from "./contacts";

export default combineReducers({
  companies,
  contacts,
});
