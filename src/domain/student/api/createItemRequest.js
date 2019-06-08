export const createItemRequest = api => data =>
  api.client.post(`/student`, data).then(response => response.data)
