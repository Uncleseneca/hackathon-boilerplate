export const removeItemRequest = api => id =>
  api.client.delete(`/student/${id}`).then(response => response.data)
