export const fetchItemRequest = api => id =>
  api.client.get(`/task/${id}`).then(response => response.data)
