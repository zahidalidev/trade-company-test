import { getContactsQuery } from 'utils/helpers'
import instance from 'api'

export const fetchAllContacts = () =>
  instance
    .get('/api/v0.3/companies/contacts')
    .then((response) => response.data)
    .catch(() => ({}))

export const searchContacts = value => {
  console.log('query contacts: ', getContactsQuery(value))
  return instance
    .get(`/api/v0.3/companies/contacts/advanced-list${getContactsQuery(value)}`)
    .then((response) => response.data)
    .catch(() => ({}))
}
