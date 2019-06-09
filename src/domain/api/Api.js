import axios from 'axios'

export class Api {
  get client() {
    return this.axios
  }

  constructor(token) {
    const authHeaders = !!token ? { Authorization: `Bearer ${token}` } : {}
    this.axios = axios.create({
      baseURL: 'http://socify.cloud:4000',
      headers: authHeaders
    })
  }
}
