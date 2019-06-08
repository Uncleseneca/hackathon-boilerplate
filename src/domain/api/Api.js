import axios from 'axios'

export class Api {
  get client() {
    return this.axios
  }

  constructor(token) {
    const authHeaders = !!token ? { Authorization: `Bearer ${token}` } : {}
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: authHeaders
    })
  }
}
