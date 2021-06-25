const config = {
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com/'
  },

  respBody(response) {
    return {
      data: response.data,
      status: response.status,
      headers: response.headers
    }
  },

  respError(error) {
    return {
      status: error.response.status,
      description: error.response.data.description
    }
  }
}

export default config
