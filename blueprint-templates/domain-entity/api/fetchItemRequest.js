export const fetchItemRequest = api => id =>
  api.client.get(`/{{kebabCase name}}/${id}`).then(response => response.data)
