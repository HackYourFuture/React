
class Params {
  get random_8() { // just for Id's For Now
    let randomString = ""
    for (let i = 0; i < 8; i++) {
      let random = Math.floor(Math.random() * (57 - 49) + 49) // 33 126
      randomString += String.fromCharCode(random)
    }
    return randomString
  } // this function should return a random string that 8 Characters long

  // localStorage section
  get getLocals() {
    const container = localStorage.getItem('list')
    return JSON.parse(container)
  }
  saveLocal(getLocals, local_Object) {
    const sliced = (getLocals) ? [...getLocals] : [] // << inserting State [[[{{{TODO}}}]]]
    sliced.push({
      ...local_Object,
      id: this.random_8,
      done: false
    })
    const container = JSON.stringify(sliced)
    localStorage.setItem('list', container)
    return this.getLocals
  }
  setLocal(local_Object) {
    const container = JSON.stringify(local_Object)
    localStorage.setItem('list', container)
    return this.getLocals
  }
  removeLocal(local_id) {  // waiting for the delete comand TODO
    const locals = this.getLocals.filter(item => {
      return item.id !== local_id
    })
    this.setLocal(locals)
    return this.getLocals
  }
  updateLocal(local_id, field, newValue) {
    const local_item = this.getLocals.map((item, index, arr) => {
      if (local_id && item.id === local_id) {
        const obj = arr[index]
        obj[field] = newValue
        return obj
      } else {
        return item
      }
    })
    return this.setLocal([...local_item])
  }
  // End localStorage section
}
export default new Params()