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
