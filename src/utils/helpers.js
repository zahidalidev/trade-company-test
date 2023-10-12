export const createLinks = data => {
  const links = []
  for (let i = 0; i < data.length - 1; i++) {
    const currentCompany = data[i]
    const nextCompany = data[i + 1]

    const link = {
      source: currentCompany._id,
      target: nextCompany._id,
    }

    links.push(link)
  }

  return {
    data,
    links,
  }
}
