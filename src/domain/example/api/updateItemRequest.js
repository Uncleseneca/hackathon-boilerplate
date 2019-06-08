export const updateItemRequest = api => (id, data) =>
  api.client.put(`/task/${id}`, data).then(response => response.data)
