class locals {
  set save(data) {
    const stringData = JSON.stringify(data)
    return localStorage.setItem('list', stringData)
  }
  get load() {
    const data = localStorage.getItem('list')
    return JSON.parse(data)
  }

  async request(url, method, inputToString) {
    const params = {
      "body": JSON.stringify(inputToString),
      "headers": {
        "Content-type": "application/json"
      }
    }

    let options = {}
    method = method ? method.toUpperCase() : "GET"
    switch (method) {
      case "POST":
      case "PATCH":
        options = { method, ...params }
        break
      default:
        options = { method }
    }

    const preResponse = await fetch(`https://hyf-react-api.herokuapp.com/${url}`, options)
    const response = await preResponse.json()
    return response
  }

}

export default new locals()