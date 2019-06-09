import axios from 'axios'

export class Api {
  get client() {
    return this.axios
  }

  constructor(token) {
    const authHeaders = !!token ? { Authorization: `Bearer ${token}` } : {}
    this.axios = axios.create({
      baseURL: 'https://hackathon-server-dnacykpppq.now.sh',
      headers: authHeaders
    })
  }
}
