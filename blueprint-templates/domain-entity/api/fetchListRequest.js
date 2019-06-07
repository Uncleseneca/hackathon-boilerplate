export const fetchListRequest = api => () =>
  api.client.get(`/{{kebabCase name}}`).then(response => response.data)
