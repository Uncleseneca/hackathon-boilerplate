export const createItemRequest = api => data =>
  api.client.post(`/task`, data).then(response => response.data)
