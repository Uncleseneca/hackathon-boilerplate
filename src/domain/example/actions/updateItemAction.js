import { updateItemRequest } from '../api/updateItemRequest'
import { pages } from 'domain/router/pages'
import { selectItemId } from 'domain/router/selectItemId'
import { selectItem } from '../selectors/selectItem'
import { transformTask } from '../helpers/transformTask'

export const updateItemAction = () => async (dispatch, getState, { extra }) => {
  const state = getState()
  const id = selectItemId(state)
  const item = selectItem(state)
  const transformedTask = transformTask(item)

  await updateItemRequest(extra())(id, transformedTask)
  dispatch({ type: pages.TASKS })
}
