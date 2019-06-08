export const fetchListRequest = api => (query = '') =>
  api.client.get(`/student?${query}`).then(response => response.data)
