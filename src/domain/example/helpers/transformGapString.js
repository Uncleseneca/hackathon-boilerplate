import nanoid from 'nanoid'

export const transformGapString = taskId => match => {
  const shouldTransform = !(/id=/.test(match) && /taskId=/.test(match))
  let newMatch = ''
  if (shouldTransform) {
    newMatch = match.replace(
      /<Gap/,
      `<Gap  taskId='${taskId}'  id='${nanoid()}'`
    )
  } else {
    newMatch = match
  }

  return newMatch
}
