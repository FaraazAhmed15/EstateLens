export function filterProperties(data, filters) {

  return data.filter((property) => {

    if (
      filters.location &&
      !property.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false
    }

    if (filters.type && property.type !== filters.type) {
      return false
    }

    if (filters.bhk && property.bhk != filters.bhk) {
      return false
    }

    if (filters.budget && property.budget !== filters.budget) {
      return false
    }

    return true
  })

}