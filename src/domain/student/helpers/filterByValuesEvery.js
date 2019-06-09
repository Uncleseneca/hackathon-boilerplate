export const filterByValuesEvery = (values, filters) => {
  return filters.every(filter => values.includes(filter))
}
