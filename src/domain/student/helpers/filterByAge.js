import { differenceInYears } from 'date-fns'

export const filterByAge = (student, range) => {
  const years = differenceInYears(new Date(), new Date(student.birthDate))
  return years >= range[0] && years < range[1]
}
