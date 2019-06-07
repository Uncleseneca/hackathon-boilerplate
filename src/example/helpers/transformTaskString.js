export const transformTaskString = taskId => match => {
  const shouldTransform = !/taskId=/.test(match)
  let newMatch = ''
  if (shouldTransform) {
    newMatch = match.replace(/<Task/, `<Task  taskId='${taskId}'`)
  } else {
    newMatch = match
  }

  return newMatch
}
