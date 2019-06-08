export const fetchItemRequest = api => id =>
  api.client.get(`/student/${id}`).then(response => response.data)
