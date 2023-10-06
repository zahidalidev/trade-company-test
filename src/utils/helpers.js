export const createLinks = (companies) => {
  const data = companies.result.data
  const companyLinks = []
  for (let i = 0; i < data.length - 1; i++) {
    const currentCompany = data[i]
    const nextCompany = data[i + 1]

    const link = {
      source: currentCompany._id,
      target: nextCompany._id,
    }

    companyLinks.push(link)
  }

  return {
    ...companies,
    links: companyLinks,
  }
}
