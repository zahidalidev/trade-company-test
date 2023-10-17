import { getCompanyQuery, getContactsQuery } from 'utils/helpers'
import instance from 'api'

export const fetchAllCompanies = () =>
  instance
    .get('/api/v0.3/companies')
    .then((response) => response.data)
    .catch(() => ({}))

export const searchCompanies = value => {
  console.log('query companies: ', getContactsQuery(value))
  return instance
  .get(`/api/v0.3/companies/published-list${getCompanyQuery(value)}`)
  .then((response) => response.data)
  .catch(() => ({}))
}

// https://apiv3.aladdinb2b.com/api/v0.3/companies/published-list?query={"status":"Published","$or":[{"name":{"$regex":"(?i)Raffles"}},{"email":{"$regex":"(?i)Raffles"}},{"website":{"$regex":"(?i)Raffles"}},{"userType":{"$regex":"(?i)Raffles"}}]}&needPopulate=true&hasTotal=true&sort=-createdAt&limit=10&populates[]={"path":"contacts"}

// https://apiv3.aladdinb2b.com/api/v0.3/companies/contacts/advanced-list?query={"company.status":"Published","$or":[{"name":{"$regex":"(?i)akshay"}},{"email":{"$regex":"(?i)akshay"}},{"website":{"$regex":"(?i)akshay"}},{"userType":{"$regex":"(?i)akshay"}}]}&needPopulate=true&populates[]={"path":"country","select":"name"}&populates[]={"path":"city","select":"name"}&populates[]={"path":"company"}&hasTotal=true&sort=-createdAt&limit=10