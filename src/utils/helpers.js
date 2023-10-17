export const createLinks = (data) => {
  const links = []
  for (let i = 0; i < data.length - 1; i++) {
    const current = data[i]
    const next = data[i + 1]

    links.push({
      source: current._id,
      target: next._id,
    })
  }

  return {
    data,
    links,
  }
}

export const getNameLength = name => (name.length <= 5 ? 7 : name.length)

export const getCompanyQuery = value =>
  value.length
    ? `?query={"status":"Published","$or":[{"name":{"$regex":"(?i)${value}"}},{"email":{"$regex":"(?i)${value}"}},{"website":{"$regex":"(?i)${value}"}},{"userType":{"$regex":"(?i)${value}"}}]}&needPopulate=true&hasTotal=true&sort=-createdAt&limit=10&populates[]={"path":"contacts"}`
    : ''

export const getContactsQuery = value =>
  value.length
    ? `?query={"company.status":"Published","$or":[{"name":{"$regex":"(?i)${value}"}},{"email":{"$regex":"(?i)${value}"}},{"website":{"$regex":"(?i)${value}"}},{"userType":{"$regex":"(?i)${value}"}}]}&needPopulate=true&populates[]={"path":"country","select":"name"}&populates[]={"path":"city","select":"name"}&populates[]={"path":"company"}&hasTotal=true&sort=-createdAt`
    : ''
