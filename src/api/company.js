import { getCompanyQuery, getContactsQuery } from 'utils/helpers'
import instance from 'api'

export const fetchAllCompanies = () =>
  instance
    .get('/api/v0.3/companies')
    .then((response) => response.data)
    .catch(() => ({}))

export const searchCompanies = (value) =>
  instance
    .get(`/api/v0.3/companies/published-list${getCompanyQuery(value)}`)
    .then((response) => response.data)
    .catch(() => ({}))
