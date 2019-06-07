import { transformGapString } from './transformGapString'
import { transformTaskString } from './transformTaskString'

export const transformTask = task => {
  return {
    ...task,
    value: task.value
      .replace(/<Task(.|\n)+?>/, transformTaskString(task._id))
      .replace(/<Gap(.|\n)+?\/>/g, transformGapString(task._id))
  }
}
