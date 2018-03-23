class locals {
  set save(data) {
    const stringData = JSON.stringify(data)
    return localStorage.setItem('list', stringData)
  }
  get load() {
    const data = localStorage.getItem('list')
    return JSON.parse(data)
  }
  get id() {
    // I Agree 100% with you I should use a library instead
    // -- But Also this is a simple fast for small tests ^-^
    let randomString = ""
    for (let i = 0; i < 8; i++) {
      let random = Math.floor(Math.random() * (57 - 49) + 49) // 33 126
      randomString += String.fromCharCode(random)
    }
    return randomString
  }
}

export default new locals()