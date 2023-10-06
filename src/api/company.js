import instance from 'api'

export const fetchAllCompanies = () =>
  instance
    .get('/api/v0.3/companies?')
    .then(response => response.data)
    .catch(() => ({}))
