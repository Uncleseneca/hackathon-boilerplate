export const selectList = state =>
  state.student.list.map(({ firstName, lastName, ...rest }) => ({
    fullName: `${firstName}, ${lastName}`,
    ...rest
  }))
