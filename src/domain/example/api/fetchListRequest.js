export const fetchListRequest = api => () =>
  api.client.get(`/task`).then(response => response.data)
