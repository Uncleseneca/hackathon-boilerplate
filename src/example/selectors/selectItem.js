export const selectItem = state => {
  const temp = state.task.item
  const _id = state.task.item._id || 'new'
  const taskId = state.task.item.taskId || 'new'

  const result = { ...temp, _id, taskId }
  return result
}
