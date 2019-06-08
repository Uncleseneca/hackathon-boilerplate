export const createItemRequest = api => data =>
  api.client.post(`/{{kebabCase name}}`, data).then(response => response.data)
