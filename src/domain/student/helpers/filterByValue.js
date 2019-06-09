export const filterByValue = value => filter => {
  const result = `${value}`.toLowerCase() === `${filter}`.toLowerCase()
  return result
}
