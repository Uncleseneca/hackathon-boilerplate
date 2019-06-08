export const removeItemRequest = api => id =>
  api.client.delete(`/task/${id}`).then(response => response.data)
