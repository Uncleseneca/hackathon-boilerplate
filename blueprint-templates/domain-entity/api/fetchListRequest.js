export const fetchListRequest = api => query =>
  api.client.get(`/{{kebabCase name}}?${query}`).then(response => response.data)
