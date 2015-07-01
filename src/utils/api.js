/* globals fetch */

import "isomorphic-fetch"

class Api {
  constructor(url) {
    this.url = url
  }

  list() {
    return fetch(`${this.url}`)
      .then(this.status)
      .then(this.json)
  }

  status(response) {
    if (response.ok) {
      return response
    } else {
      throw new Error(response.statusText)
    }
  }

  json(response) {
    return response.json()
  }
}

export default Api
