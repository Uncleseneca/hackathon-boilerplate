export const filterByRating = (rating, range) => {
  const result = rating >= range[0] && rating < range[1]
  debugger
  return result
}
