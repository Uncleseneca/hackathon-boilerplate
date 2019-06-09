import { head } from 'lodash'

export const filterByValuesSomeOfMany = (value, filters) => {
  return filters.includes(head(value))
}
