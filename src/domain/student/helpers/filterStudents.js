import { pickFilter } from './pickFilter'
import { filterByAge } from './filterByAge'
import { filterByValue } from './filterByValue'
import { size } from 'lodash'
import { filterByValuesEvery } from './filterByValuesEvery'
import { filterByValuesSome } from './filterByValuesSome'
import { filterByRating } from './filterByRating'

export const filterStudents = (students, filters) => {
  return students.filter(student => {
    if (size(filters.age)) {
      if (!filterByAge(student, filters.age)) {
        return false
      }
    }

    if (size(filters.skills)) {
      if (!filterByValuesEvery(student.skills, filters.skills)) {
        return false
      }
    }

    if (size(filters.university)) {
      if (!filterByValuesSome(student.university, filters.university)) {
        return false
      }
    }

    if (size(filters.rating)) {
      if (!filterByRating(student.rating, filters.rating)) {
        return false
      }
    }

    return true
  })
}
