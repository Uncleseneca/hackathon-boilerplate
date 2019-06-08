export const updateItemRequest = api => (id, data) =>
  api.client
    .put(`/{{kebabCase name}}/${id}`, data)
    .then(response => response.data)
