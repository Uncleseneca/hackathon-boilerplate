import axios from 'axios'

export class Api {
  get client() {
    return this.axios
  }

  constructor(token) {
    const authHeaders = !!token ? { Authorization: `Bearer ${token}` } : {}
    this.axios = axios.create({
      baseURL: 'https://hackathon-server-kooopaxncp.now.sh',
      // baseURL: 'http://127.0.0.1:4000',
      headers: authHeaders
    })
  }
}
