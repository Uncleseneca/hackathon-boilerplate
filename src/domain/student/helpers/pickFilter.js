import { isString, isNumber, isArray } from 'lodash'

import { filterByValue } from './filterByValue'
import { filterByRating } from './filterByRating'
import { filterByValuesEvery } from './filterByValuesEvery'
import { filterByAge } from './filterByAge'

const ISODateRegex = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/

export const pickFilter = (filterName, filterValue) => {
  if (filterName === 'age') {
    return filterByAge
  }
  if (filterName === 'skills') {
    return filterByRating
  }

  if (isString(filterValue) || isNumber(filterValue)) {
    return filterByValue
  }

  // if (isArray(filterValue) && isString(filterValue[0])) {
  //   return filterByValues
  // }

  return () => true
}
