class locals {
  set save(data) {
    const stringData = JSON.stringify(data)
    return localStorage.setItem('list', stringData)
  }
  get load() {
    const data = localStorage.getItem('list')
    return JSON.parse(data)
  }
}

export default new locals()