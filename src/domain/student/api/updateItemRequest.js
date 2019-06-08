export const updateItemRequest = api => (id, data) =>
  api.client
    .put(`/student/${id}`, data)
    .then(response => response.data)
