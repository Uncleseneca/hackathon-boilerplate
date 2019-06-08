export const removeItemRequest = api => id =>
  api.client.delete(`/{{kebabCase name}}/${id}`).then(response => response.data)
